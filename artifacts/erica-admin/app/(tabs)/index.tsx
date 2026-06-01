import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";

interface Enquiry {
  id: number;
  name: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string | null;
  venue: string;
  service: string;
  howHeard: string | null;
  details: string;
  status: string;
  createdAt: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "power-hour": "Planning Power Hour",
  "signature-day": "Signature Day Coordination",
  "partial-planning": "Partial Planning Support",
  "full-planning": "Full Planning + Coordination",
  "unsure": "Not sure yet",
};

type Filter = "all" | "new" | "read" | "replied";

async function fetchEnquiries(): Promise<Enquiry[]> {
  const res = await fetch("/api/enquiries");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default function InboxScreen() {
  const colors = useColors();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<Filter>("all");

  const { data, isLoading, isError, refetch, isRefetching } = useQuery<Enquiry[]>({
    queryKey: ["enquiries"],
    queryFn: fetchEnquiries,
  });

  const filtered = (data ?? []).filter(
    (e) => filter === "all" || e.status === filter
  );

  const counts = {
    all: (data ?? []).length,
    new: (data ?? []).filter((e) => e.status === "new").length,
    read: (data ?? []).filter((e) => e.status === "read").length,
    replied: (data ?? []).filter((e) => e.status === "replied").length,
  };

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  const styles = makeStyles(colors);

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IE", { day: "numeric", month: "short", year: "numeric" });
  }

  function StatusBadge({ status }: { status: string }) {
    const bg =
      status === "new" ? colors.statusNewBg :
      status === "read" ? colors.statusReadBg :
      colors.statusRepliedBg;
    const fg =
      status === "new" ? colors.statusNew :
      status === "read" ? colors.statusRead :
      colors.statusReplied;
    const label = status === "new" ? "New" : status === "read" ? "Read" : "Replied";

    return (
      <View style={[styles.badge, { backgroundColor: bg }]}>
        <Text style={[styles.badgeText, { color: fg }]}>{label}</Text>
      </View>
    );
  }

  function EnquiryCard({ item }: { item: Enquiry }) {
    const isNew = item.status === "new";
    return (
      <TouchableOpacity
        onPress={() => router.push(`/enquiry/${item.id}`)}
        activeOpacity={0.75}
        style={[styles.card, isNew && styles.cardNew]}
      >
        <View style={styles.cardTop}>
          <View style={styles.cardLeft}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}{item.partnerName.charAt(0)}
              </Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={[styles.coupleNames, isNew && styles.coupleNamesNew]}>
                {item.name} & {item.partnerName}
              </Text>
              <StatusBadge status={item.status} />
            </View>
            <Text style={styles.service} numberOfLines={1}>
              {SERVICE_LABELS[item.service] ?? item.service}
            </Text>
            <View style={styles.cardMeta}>
              <View style={styles.metaRow}>
                <Feather name="map-pin" size={11} color={colors.mutedForeground} />
                <Text style={styles.metaText} numberOfLines={1}>{item.venue}</Text>
              </View>
              {item.weddingDate ? (
                <View style={styles.metaRow}>
                  <Feather name="calendar" size={11} color={colors.mutedForeground} />
                  <Text style={styles.metaText}>{item.weddingDate}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
        <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { paddingBottom: bottomPad }]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: topPad + 16 }]}>
        <View>
          <Text style={styles.headerTitle}>Inbox</Text>
          <Text style={styles.headerSub}>
            {counts.new > 0 ? `${counts.new} new enquir${counts.new === 1 ? "y" : "ies"}` : "Weddings with Erica"}
          </Text>
        </View>
        <TouchableOpacity onPress={() => refetch()} style={styles.refreshBtn}>
          <Feather name="refresh-cw" size={18} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Filter pills */}
      <View style={styles.filtersRow}>
        {(["all", "new", "read", "replied"] as Filter[]).map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={[styles.pill, filter === f && styles.pillActive]}
          >
            <Text style={[styles.pillText, filter === f && styles.pillTextActive]}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
              {counts[f] > 0 ? ` (${counts[f]})` : ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      ) : isError ? (
        <View style={styles.centered}>
          <Feather name="alert-circle" size={32} color={colors.mutedForeground} />
          <Text style={styles.emptyTitle}>Couldn't load enquiries</Text>
          <TouchableOpacity onPress={() => refetch()} style={styles.retryBtn}>
            <Text style={styles.retryText}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : filtered.length === 0 ? (
        <View style={styles.centered}>
          <Feather name="inbox" size={40} color={colors.mutedForeground} />
          <Text style={styles.emptyTitle}>
            {filter === "all" ? "No enquiries yet" : `No ${filter} enquiries`}
          </Text>
          <Text style={styles.emptyBody}>
            {filter === "all"
              ? "New enquiries from your website\nwill appear here."
              : `Switch to 'All' to see everything.`}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <EnquiryCard item={item} />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          scrollEnabled={filtered.length > 0}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={refetch}
              tintColor={colors.primary}
            />
          }
        />
      )}
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useColors>) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingHorizontal: 20,
      paddingBottom: 16,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: {
      fontSize: 28,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
      letterSpacing: -0.5,
    },
    headerSub: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      marginTop: 2,
    },
    refreshBtn: {
      padding: 8,
    },
    filtersRow: {
      flexDirection: "row",
      paddingHorizontal: 16,
      paddingVertical: 12,
      gap: 8,
      backgroundColor: colors.background,
    },
    pill: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 100,
      backgroundColor: colors.muted,
    },
    pillActive: {
      backgroundColor: colors.primary,
    },
    pillText: {
      fontSize: 12,
      fontFamily: "Inter_500Medium",
      color: colors.mutedForeground,
    },
    pillTextActive: {
      color: colors.primaryForeground,
    },
    list: {
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 24,
      gap: 10,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: colors.radius,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border,
    },
    cardNew: {
      borderColor: colors.primary + "40",
      backgroundColor: "#FAFCF9",
    },
    cardTop: {
      flexDirection: "row",
      gap: 12,
    },
    cardLeft: {
      alignItems: "center",
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.accent,
      alignItems: "center",
      justifyContent: "center",
    },
    avatarText: {
      fontSize: 13,
      fontFamily: "Inter_600SemiBold",
      color: colors.primary,
    },
    cardContent: {
      flex: 1,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    coupleNames: {
      fontSize: 15,
      fontFamily: "Inter_500Medium",
      color: colors.foreground,
      flex: 1,
    },
    coupleNamesNew: {
      fontFamily: "Inter_600SemiBold",
    },
    badge: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 100,
    },
    badgeText: {
      fontSize: 11,
      fontFamily: "Inter_500Medium",
    },
    service: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      marginTop: 3,
    },
    cardMeta: {
      flexDirection: "row",
      gap: 12,
      marginTop: 6,
      flexWrap: "wrap",
    },
    metaRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    metaText: {
      fontSize: 12,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
    },
    cardDate: {
      fontSize: 11,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      marginTop: 10,
      textAlign: "right",
    },
    centered: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: 32,
    },
    emptyTitle: {
      fontSize: 17,
      fontFamily: "Inter_500Medium",
      color: colors.foreground,
      textAlign: "center",
    },
    emptyBody: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      textAlign: "center",
      lineHeight: 20,
    },
    retryBtn: {
      marginTop: 8,
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.primary,
      borderRadius: colors.radius,
    },
    retryText: {
      fontSize: 14,
      fontFamily: "Inter_500Medium",
      color: colors.primaryForeground,
    },
  });
}
