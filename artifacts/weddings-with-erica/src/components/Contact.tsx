import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Phone, Mail, Instagram } from "lucide-react";
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
    <section id="contact" className="flex flex-col lg:flex-row min-h-screen">

      {/* ── LEFT: full-bleed image with overlay ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative lg:w-[42%] xl:w-[45%] h-[60vw] lg:h-auto min-h-[400px] overflow-hidden shrink-0"
      >
        {/* Full-bleed photo */}
        <img
          src={contactBg}
          alt="Erica with a happy couple"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Text overlaid at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/55 font-sans mb-3 block">
            Weddings with Erica
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-[1.05] mb-5">
            Get<br />In Touch
          </h2>
          <p className="text-primary-foreground/65 font-light text-[0.95rem] leading-relaxed max-w-[280px] mb-7">
            Tell me a little about your plans — I'd love to hear more about your wedding.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-2.5 text-[0.875rem] text-primary-foreground/60 font-light">
            <a href="tel:0872186100" className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors" data-testid="contact-phone">
              <Phone className="w-3.5 h-3.5 shrink-0" /> 0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors" data-testid="contact-email">
              <Mail className="w-3.5 h-3.5 shrink-0" /> wedwitherica@gmail.com
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-primary-foreground transition-colors" data-testid="contact-instagram">
              <Instagram className="w-3.5 h-3.5 shrink-0" /> @weddingswitherica
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT: form ── */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-20 py-16 md:py-20 bg-[hsl(40,33%,98%)]"
      >
        <div className="max-w-lg w-full mx-auto lg:mx-0">
          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Let's Start Planning</h3>
          <p className="text-foreground/45 text-[0.95rem] font-light mb-10 leading-relaxed">
            Fill in the form below and I'll be in touch within 48 hours.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">Full Name</FormLabel>
                  <FormControl>
                    <Input className="border-0 border-b border-border/40 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-[0.95rem] placeholder:text-foreground/20" placeholder="Your full name" {...field} data-testid="input-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" className="border-0 border-b border-border/40 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-[0.95rem] placeholder:text-foreground/20" placeholder="your@email.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">Phone</FormLabel>
                    <FormControl>
                      <Input type="tel" className="border-0 border-b border-border/40 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-[0.95rem] placeholder:text-foreground/20" placeholder="+353 ..." {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px] mb-1">Wedding Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("w-full border-0 border-b border-border/40 rounded-none px-0 py-2 bg-transparent justify-start font-normal text-[0.95rem] hover:bg-transparent h-auto focus-visible:ring-0 focus-visible:border-primary shadow-none", !field.value && "text-foreground/25")} data-testid="input-date">
                            {field.value ? format(field.value, "d MMM yyyy") : "Select date"}
                            <CalendarIcon className="ml-auto h-3.5 w-3.5 opacity-30" />
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
                <FormField control={form.control} name="venue" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">Venue / Location</FormLabel>
                    <FormControl>
                      <Input className="border-0 border-b border-border/40 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-[0.95rem] placeholder:text-foreground/20" placeholder="Venue name" {...field} data-testid="input-venue" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="service" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">How can I support you?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-0 border-b border-border/40 rounded-none px-0 py-2 focus:ring-0 focus:border-primary bg-transparent text-[0.95rem] h-auto shadow-none" data-testid="input-service">
                        <SelectValue placeholder="Select a package..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border-border shadow-lg">
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
                  <FormLabel className="text-foreground/40 font-sans font-normal uppercase tracking-widest text-[10px]">Tell me about your plans…</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[100px] border-0 border-b border-border/40 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none text-[0.95rem] placeholder:text-foreground/20" placeholder="Share as much or as little as you'd like…" {...field} data-testid="input-details" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-5 uppercase tracking-[0.2em] text-[11px] font-sans transition-all active:scale-[0.99]" data-testid="button-submit">
                Send Enquiry
              </Button>

              <p className="text-center text-[11px] text-foreground/30 font-light">
                I typically respond within 48 hours — I look forward to hearing from you.
              </p>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
