import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Phone, Mail, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@assets/above_contact_1780239389448.png";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Contact number is required"),
  date: z.date().optional(),
  venue: z.string().min(2, "Venue / location is required"),
  service: z.string().min(1, "Please select a service"),
  details: z.string().min(10, "Please share a little more about your plans"),
});

type FormValues = z.infer<typeof formSchema>;

const fieldClass =
  "border-0 border-b border-foreground/15 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-[1rem] text-foreground placeholder:text-foreground/30 transition-colors duration-200 h-auto";
const labelClass =
  "text-[11px] uppercase tracking-[0.18em] text-foreground/50 font-sans font-medium mb-1 block";

export function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", venue: "", service: "", details: "" },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Enquiry Sent",
      description: "Thank you for reaching out — I'll be in touch very soon!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="flex flex-col lg:flex-row">

      {/* ── LEFT: image panel, reduced to 38% ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative lg:w-[38%] h-[65vw] lg:h-auto min-h-[480px] overflow-hidden shrink-0"
      >
        <img
          src={contactBg}
          alt="Erica with a happy couple"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-foreground/10" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="absolute bottom-0 left-0 right-0 p-10 md:p-14"
        >
          <span className="text-[10px] uppercase tracking-[0.32em] text-primary-foreground/45 font-sans mb-4 block">
            Weddings with Erica
          </span>
          <h2 className="font-serif text-[2.8rem] md:text-5xl text-primary-foreground leading-[1.05] mb-5">
            Get<br />In Touch
          </h2>
          <p className="text-primary-foreground/60 font-light text-[1rem] leading-[1.8] max-w-[260px] mb-8">
            Tell me about your plans — I'd love to hear more about your wedding.
          </p>
          <div className="flex flex-col gap-3 text-[0.9rem] text-primary-foreground/55 font-light">
            <a href="tel:0872186100" className="flex items-center gap-3 hover:text-primary-foreground transition-colors" data-testid="contact-phone">
              <Phone className="w-4 h-4 shrink-0" /> 0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="flex items-center gap-3 hover:text-primary-foreground transition-colors" data-testid="contact-email">
              <Mail className="w-4 h-4 shrink-0" /> wedwitherica@gmail.com
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary-foreground transition-colors" data-testid="contact-instagram">
              <Instagram className="w-4 h-4 shrink-0" /> @weddingswitherica
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: premium white form panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center bg-white"
      >
        <div className="w-full max-w-[580px] mx-auto px-8 md:px-14 xl:px-20 py-16 md:py-24">

          <p className="text-[11px] uppercase tracking-[0.25em] text-primary/55 font-sans mb-4">Start your journey</p>
          <h3 className="font-serif text-[2.2rem] md:text-[2.8rem] text-foreground mb-3 leading-[1.08]">
            Let's Start Planning
          </h3>
          <p className="text-foreground/50 text-[1rem] font-light mb-12 leading-[1.8] max-w-md">
            Fill in the form below and I'll be in touch within 48 hours. Every wedding is unique — I can't wait to hear about yours.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">

              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Full Name</FormLabel>
                  <FormControl>
                    <Input className={fieldClass} placeholder="Your full name" {...field} data-testid="input-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" className={fieldClass} placeholder="your@email.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" className={fieldClass} placeholder="+353 ..." {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className={labelClass}>Wedding Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn(
                            "w-full border-0 border-b border-foreground/15 rounded-none px-0 py-4 bg-transparent justify-start font-normal text-[1rem] hover:bg-transparent h-auto focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-200",
                            !field.value && "text-foreground/30"
                          )} data-testid="input-date">
                            {field.value ? format(field.value, "d MMM yyyy") : "Select date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-25" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background border-border shadow-xl" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus disabled={(d) => d < new Date()} />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="venue" render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Venue / Location</FormLabel>
                    <FormControl>
                      <Input className={fieldClass} placeholder="Venue name or county" {...field} data-testid="input-venue" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>How can I support you?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-0 border-b border-foreground/15 rounded-none px-0 py-4 focus:ring-0 focus:border-primary bg-transparent text-[1rem] h-auto shadow-none transition-colors duration-200" data-testid="input-service">
                        <SelectValue placeholder="Select a package..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white border-border shadow-xl">
                      <SelectItem value="power-hour">Planning Power Hour</SelectItem>
                      <SelectItem value="signature-day">Signature Day Coordination</SelectItem>
                      <SelectItem value="partial-planning">Partial Planning Support</SelectItem>
                      <SelectItem value="full-planning">Full Planning + Coordination</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="details" render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>Tell me about your plans…</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[120px] border-0 border-b border-foreground/15 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none text-[1rem] text-foreground placeholder:text-foreground/30 transition-colors duration-200"
                      placeholder="Share as much or as little as you'd like — your venue, date, guest count, and what matters most to you…"
                      {...field} data-testid="input-details"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="pt-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-6 uppercase tracking-[0.22em] text-[12px] font-sans transition-all active:scale-[0.99] flex items-center justify-center gap-3 group"
                  data-testid="button-submit"
                >
                  Send My Enquiry
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <p className="text-center text-[12px] text-foreground/30 font-light mt-5 leading-relaxed">
                  I typically respond within 48 hours.<br />I look forward to hearing about your wedding.
                </p>
              </div>

            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
