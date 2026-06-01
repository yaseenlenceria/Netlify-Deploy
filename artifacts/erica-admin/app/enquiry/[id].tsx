import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
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

const HOW_HEARD_LABELS: Record<string, string> = {
  instagram: "Instagram",
  google: "Google Search",
  facebook: "Facebook",
  referral: "Friend / Family Referral",
  venue: "Recommended by Venue",
  supplier: "Recommended by Supplier",
  other: "Other",
};

async function fetchEnquiry(id: number): Promise<Enquiry> {
  const res = await fetch(`/api/enquiries/${id}`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

async function updateStatus(id: number, status: string): Promise<Enquiry> {
  const res = await fetch(`/api/enquiries/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update");
  return res.json();
}

export default function EnquiryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const numericId = Number(id);

  const { data, isLoading, isError } = useQuery<Enquiry>({
    queryKey: ["enquiry", numericId],
    queryFn: () => fetchEnquiry(numericId),
    enabled: !isNaN(numericId),
  });

  const mutation = useMutation({
    mutationFn: (status: string) => updateStatus(numericId, status),
    onSuccess: (updated) => {
      queryClient.setQueryData(["enquiry", numericId], updated);
      queryClient.invalidateQueries({ queryKey: ["enquiries"] });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    },
    onError: () => {
      Alert.alert("Error", "Couldn't update status. Please try again.");
    },
  });

  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom + 16;
  const styles = makeStyles(colors);

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
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

  function InfoRow({ icon, label, value }: { icon: string; label: string; value?: string | null }) {
    if (!value) return null;
    return (
      <View style={styles.infoRow}>
        <View style={styles.infoIconWrap}>
          <Feather name={icon as any} size={14} color={colors.primary} />
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.infoLabel}>{label}</Text>
          <Text style={styles.infoValue}>{value}</Text>
        </View>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Feather name="alert-circle" size={32} color={colors.mutedForeground} />
        <Text style={styles.errorText}>Couldn't load this enquiry</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: bottomPad }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero card */}
        <View style={styles.heroCard}>
          <View style={styles.heroAvatar}>
            <Text style={styles.heroAvatarText}>
              {data.name.charAt(0)}{data.partnerName.charAt(0)}
            </Text>
          </View>
          <View style={styles.heroInfo}>
            <Text style={styles.heroNames}>{data.name} & {data.partnerName}</Text>
            <StatusBadge status={data.status} />
          </View>
          <Text style={styles.heroDate}>Received {formatDate(data.createdAt)}</Text>
        </View>

        {/* Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <InfoRow icon="mail" label="Email" value={data.email} />
          <InfoRow icon="phone" label="Phone" value={data.phone} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wedding</Text>
          <InfoRow icon="map-pin" label="Venue" value={data.venue} />
          <InfoRow icon="calendar" label="Date" value={data.weddingDate ?? "Not specified"} />
          <InfoRow icon="package" label="Package" value={SERVICE_LABELS[data.service] ?? data.service} />
          <InfoRow
            icon="search"
            label="How they heard about Erica"
            value={data.howHeard ? (HOW_HEARD_LABELS[data.howHeard] ?? data.howHeard) : "Not specified"}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Their message</Text>
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>{data.details}</Text>
          </View>
        </View>

        {/* Status actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Update status</Text>
          <View style={styles.actionRow}>
            {(["new", "read", "replied"] as const).map((s) => (
              <TouchableOpacity
                key={s}
                onPress={() => mutation.mutate(s)}
                disabled={data.status === s || mutation.isPending}
                activeOpacity={0.75}
                style={[
                  styles.actionBtn,
                  data.status === s && styles.actionBtnActive,
                  mutation.isPending && { opacity: 0.5 },
                ]}
              >
                <Text
                  style={[
                    styles.actionBtnText,
                    data.status === s && styles.actionBtnTextActive,
                  ]}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function makeStyles(colors: ReturnType<typeof useColors>) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scroll: {
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
    },
    errorText: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
    },
    heroCard: {
      backgroundColor: colors.card,
      borderRadius: colors.radius,
      padding: 20,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 16,
    },
    heroAvatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.accent,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    heroAvatarText: {
      fontSize: 20,
      fontFamily: "Inter_600SemiBold",
      color: colors.primary,
    },
    heroInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
    },
    heroNames: {
      fontSize: 20,
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
    },
    badge: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 100,
    },
    badgeText: {
      fontSize: 12,
      fontFamily: "Inter_500Medium",
    },
    heroDate: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: colors.mutedForeground,
      marginTop: 8,
    },
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 12,
      fontFamily: "Inter_600SemiBold",
      color: colors.mutedForeground,
      textTransform: "uppercase",
      letterSpacing: 0.8,
      marginBottom: 10,
      paddingHorizontal: 2,
    },
    infoRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 12,
      backgroundColor: colors.card,
      borderRadius: colors.radius,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 8,
    },
    infoIconWrap: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: colors.accent,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1,
    },
    infoContent: {
      flex: 1,
    },
    infoLabel: {
      fontSize: 11,
      fontFamily: "Inter_500Medium",
      color: colors.mutedForeground,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      marginBottom: 2,
    },
    infoValue: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: colors.foreground,
      lineHeight: 21,
    },
    messageBox: {
      backgroundColor: colors.card,
      borderRadius: colors.radius,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    messageText: {
      fontSize: 15,
      fontFamily: "Inter_400Regular",
      color: colors.foreground,
      lineHeight: 24,
    },
    actionRow: {
      flexDirection: "row",
      gap: 10,
    },
    actionBtn: {
      flex: 1,
      paddingVertical: 12,
      borderRadius: colors.radius,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: "center",
      backgroundColor: colors.card,
    },
    actionBtnActive: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    actionBtnText: {
      fontSize: 13,
      fontFamily: "Inter_500Medium",
      color: colors.mutedForeground,
    },
    actionBtnTextActive: {
      color: colors.primaryForeground,
    },
  });
}
