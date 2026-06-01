import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import contactBg from "@assets/contact-tablescape_1780246484111.jpg";
import coupleImg from "@assets/cropped_Wedding_couple_love_green_hugs_via_getty_1780246527255.jpg";

const formSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  partnerName: z.string().min(2, "Partner's name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(5, "Contact number is required"),
  date: z.date().optional(),
  venue: z.string().min(2, "Venue / location is required"),
  service: z.string().min(1, "Please select a package"),
  howHeard: z.string().optional(),
  details: z.string().min(10, "Please share a little more about your plans"),
});

type FormValues = z.infer<typeof formSchema>;

const fieldClass =
  "bg-[hsl(40,33%,97%)] border border-border/30 rounded-sm px-4 py-3 text-[1rem] text-foreground placeholder:text-foreground/30 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all shadow-none";

const labelClass =
  "text-foreground/60 font-sans font-medium uppercase tracking-widest text-[13px]";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", partnerName: "", email: "", phone: "",
      venue: "", service: "", howHeard: "", details: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const payload = {
        name: values.name,
        partnerName: values.partnerName,
        email: values.email,
        phone: values.phone,
        weddingDate: values.date ? format(values.date, "d MMM yyyy") : null,
        venue: values.venue,
        service: values.service,
        howHeard: values.howHeard || null,
        details: values.details,
      };

      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Enquiry Sent ✓",
        description: "Thank you for reaching out — I'll be in touch very soon!",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via Instagram.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

        {/* ── LEFT: heading + two stacked images ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:sticky lg:top-[100px]"
        >
          {/* Big heading */}
          <div>
            <span className="text-[13px] uppercase tracking-[0.28em] text-primary/70 mb-4 font-sans block">
              Let's Connect
            </span>
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-foreground leading-[1.02]">
              Let's Start<br />
              <em className="not-italic text-primary">Planning</em>
            </h1>
            <p className="mt-5 text-foreground/60 font-light text-[1rem] leading-[1.85] max-w-sm">
              Fill in the form and I'll come back to you within 48 hours. I can't wait to hear all about your wedding plans.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/weddingswitherica/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/55 hover:text-primary transition-colors text-[0.95rem] font-light"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>@weddingswitherica</span>
              </a>
              <span className="text-foreground/25">·</span>
              <a
                href="https://www.tiktok.com/@weddingswitherica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/55 hover:text-primary transition-colors text-[0.95rem] font-light"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Two stacked images */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="overflow-hidden aspect-[3/4]"
            >
              <img
                src={coupleImg}
                alt="Happy couple at their wedding"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="overflow-hidden aspect-[3/4] mt-8"
            >
              <img
                src={contactBg}
                alt="Erica with a happy couple"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ── RIGHT: form ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-1">
            I'd love to hear from you!
          </h2>
          <p className="text-foreground/50 text-[1.05rem] font-light mb-9 leading-relaxed">
            Every enquiry is answered personally — no automated replies here.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

              {/* Name + Partner name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Your Name *</FormLabel>
                    <FormControl>
                      <Input className={fieldClass} placeholder="e.g. Jane Smith" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="partnerName" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Partner's Name *</FormLabel>
                    <FormControl>
                      <Input className={fieldClass} placeholder="e.g. John Smith" {...field} data-testid="input-partner-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Email */}
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" className={fieldClass} placeholder="Enter your email" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Wedding Date */}
              <FormField control={form.control} name="date" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className={cn(labelClass, "mb-1")}>Wedding Date if known</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className={cn(
                          "w-full rounded-sm px-4 py-3 bg-[hsl(40,33%,97%)] border border-border/30 justify-start font-normal text-[1rem] hover:bg-[hsl(40,33%,95%)] h-auto focus-visible:ring-1 focus-visible:ring-primary shadow-none transition-all",
                          !field.value && "text-foreground/30"
                        )} data-testid="input-date">
                          {field.value ? format(field.value, "d MMM yyyy") : "Choose date"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-30" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-background border-border shadow-lg" align="start">
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus disabled={(d) => d < new Date()} />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Phone */}
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Contact Number *</FormLabel>
                  <FormControl>
                    <Input type="tel" className={fieldClass} placeholder="Enter your phone number" {...field} data-testid="input-phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Venue + Package side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField control={form.control} name="venue" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Venue Location *</FormLabel>
                    <FormControl>
                      <Input className={fieldClass} placeholder="Venue name & area" {...field} data-testid="input-venue" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="service" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Package *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-[hsl(40,33%,97%)] border border-border/30 rounded-sm px-4 py-3 text-[1rem] h-auto focus:ring-1 focus:ring-primary shadow-none transition-all" data-testid="input-service">
                          <SelectValue placeholder="Select the package you wo..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border-border shadow-lg">
                        <SelectItem value="power-hour">Planning Power Hour</SelectItem>
                        <SelectItem value="signature-day">Signature Day Coordination</SelectItem>
                        <SelectItem value="partial-planning">Partial Planning Support</SelectItem>
                        <SelectItem value="full-planning">Full Planning + Coordination</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* How did you hear about Erica */}
              <FormField control={form.control} name="howHeard" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>How did you hear about Erica?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[hsl(40,33%,97%)] border border-border/30 rounded-sm px-4 py-3 text-[1rem] h-auto focus:ring-1 focus:ring-primary shadow-none transition-all" data-testid="input-how-heard">
                        <SelectValue placeholder="Choose your option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border-border shadow-lg">
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="referral">Friend / Family Referral</SelectItem>
                      <SelectItem value="venue">Recommended by Venue</SelectItem>
                      <SelectItem value="supplier">Recommended by Supplier</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Tell me more */}
              <FormField control={form.control} name="details" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Tell me a little more… *</FormLabel>
                  <FormControl>
                    <Textarea
                      className={cn(fieldClass, "min-h-[130px] resize-none")}
                      placeholder="A bit about you both, what you need and how I can help!"
                      {...field}
                      data-testid="input-details"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-5 uppercase tracking-[0.2em] text-[12px] font-sans transition-all active:scale-[0.99] disabled:opacity-60"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending…" : "Send Enquiry"}
                </Button>
                <p className="text-center text-[13px] text-foreground/35 font-light mt-4">
                  I typically respond within 48 hours — I look forward to hearing from you.
                </p>
              </div>

            </form>
          </Form>
        </motion.div>

      </div>
    </section>
  );
}
