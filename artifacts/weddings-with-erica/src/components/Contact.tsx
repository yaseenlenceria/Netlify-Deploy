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
import ericaImg from "@assets/IMG_2572_1780238892942.jpeg";
import coupleImg from "@assets/IMG_8117_1780238892941.jpeg";

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
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      venue: "",
      service: "",
      details: "",
    },
  });

  function onSubmit(_values: FormValues) {
    toast({
      title: "Enquiry Sent",
      description: "Thank you for reaching out. I'll be in touch very soon!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-[hsl(40,28%,96%)] min-h-screen">
      <div className="grid lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] min-h-screen">

        {/* ── LEFT: heading + stacked images ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col px-10 md:px-14 py-20 md:py-28 bg-[hsl(40,28%,96%)] overflow-hidden"
        >
          {/* Heading */}
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/60 font-sans mb-4 block">Weddings with Erica</span>
            <h2 className="text-5xl md:text-6xl font-serif text-foreground leading-[1.05] mb-6">
              Get<br />In Touch
            </h2>
            <p className="text-foreground/60 font-light leading-relaxed max-w-sm text-base">
              Tell me a little about your plans and how I can support you — I'd love to hear more about your wedding.
            </p>
          </div>

          {/* Stacked images */}
          <div className="flex gap-4 flex-grow items-end max-h-[560px]">
            {/* Tall left image */}
            <div className="w-[54%] h-full overflow-hidden shadow-md">
              <img
                src={ericaImg}
                alt="Erica Egan — Wedding Planner"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Shorter right image, offset down */}
            <div className="w-[42%] h-[78%] overflow-hidden shadow-md self-end">
              <img
                src={coupleImg}
                alt="A happy couple on their wedding day"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact info strip at bottom */}
          <div className="mt-10 pt-8 border-t border-border/40 flex flex-col gap-2.5 text-sm text-foreground/50 font-light">
            <a href="tel:0872186100" className="flex items-center gap-2.5 hover:text-primary transition-colors" data-testid="contact-phone">
              <Phone className="w-3.5 h-3.5" />
              0872186100
            </a>
            <a href="mailto:wedwitherica@gmail.com" className="flex items-center gap-2.5 hover:text-primary transition-colors" data-testid="contact-email">
              <Mail className="w-3.5 h-3.5" />
              wedwitherica@gmail.com
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-primary transition-colors" data-testid="contact-instagram">
              <Instagram className="w-3.5 h-3.5" />
              @weddingswitherica
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT: form ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-center px-8 md:px-14 lg:px-20 xl:px-24 py-20 md:py-28 bg-white"
        >
          <div className="max-w-xl w-full mx-auto lg:mx-0">
            <h3 className="font-serif text-3xl text-foreground mb-2">Let's Start Planning</h3>
            <p className="text-foreground/50 text-sm font-light mb-12 leading-relaxed">
              Fill in the form below and I'll come back to you within 48 hours.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="border-0 border-b border-border/60 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base placeholder:text-foreground/25"
                          placeholder="Your full name"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="border-0 border-b border-border/60 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base placeholder:text-foreground/25"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">Contact Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className="border-0 border-b border-border/60 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base placeholder:text-foreground/25"
                            placeholder="+353 ..."
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Wedding Date + Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px] mb-2">Wedding Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full border-0 border-b border-border/60 rounded-none px-0 py-2 bg-transparent justify-start text-left font-normal text-base hover:bg-transparent focus-visible:ring-0 focus-visible:border-primary h-auto",
                                  !field.value && "text-foreground/25"
                                )}
                                data-testid="input-date"
                              >
                                {field.value ? format(field.value, "d MMMM yyyy") : "Select a date"}
                                <CalendarIcon className="ml-auto h-3.5 w-3.5 opacity-40" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-background border-border shadow-lg" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="venue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">Venue / Location</FormLabel>
                        <FormControl>
                          <Input
                            className="border-0 border-b border-border/60 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base placeholder:text-foreground/25"
                            placeholder="Venue name or location"
                            {...field}
                            data-testid="input-venue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Service dropdown */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">How can I support you?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="border-0 border-b border-border/60 rounded-none px-0 py-2 focus:ring-0 focus:border-primary bg-transparent text-base h-auto"
                            data-testid="input-service"
                          >
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
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/50 font-sans font-normal uppercase tracking-widest text-[10px]">Tell me a little more about your plans…</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[130px] border-0 border-b border-border/60 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none text-base placeholder:text-foreground/25"
                          placeholder="Share as much or as little as you'd like…"
                          {...field}
                          data-testid="input-details"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none mt-4 py-6 uppercase tracking-[0.2em] text-xs font-sans transition-all active:scale-[0.98] shadow-sm"
                  data-testid="button-submit"
                >
                  Send Enquiry
                </Button>

                <p className="text-center text-xs text-foreground/30 font-light">
                  I typically respond within 48 hours. I look forward to hearing from you.
                </p>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
