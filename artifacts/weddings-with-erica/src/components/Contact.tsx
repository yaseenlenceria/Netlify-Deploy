import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Contact number is required"),
  date: z.date({ required_error: "Wedding date is required" }),
  venue: z.string().min(2, "Venue is required"),
  service: z.string().min(1, "Please select a service"),
  details: z.string().min(10, "Please provide some details"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Enquiry Sent",
      description: "Thank you for reaching out. I'll be in touch soon!",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-accent/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Let's Start Planning</h2>
            <p className="text-foreground/80 font-light text-lg mb-12 max-w-md">
              Tell me a little about your plans and how I can support you — I'd love to hear more about your wedding.
            </p>
            
            <div className="aspect-[4/3] w-full hidden lg:block overflow-hidden shadow-sm">
              <img src="/images/erica-bride.png" alt="Wedding Planner" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-14 shadow-sm border border-border/50 relative"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">Name</FormLabel>
                      <FormControl>
                        <Input className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base" {...field} data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base" {...field} data-testid="input-email" />
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
                        <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">Contact Number</FormLabel>
                        <FormControl>
                          <Input type="tel" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col mt-2.5">
                        <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs mb-2">Wedding Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full border-0 border-b border-border rounded-none px-0 bg-transparent justify-start text-left font-normal text-base hover:bg-transparent hover:text-foreground focus-visible:ring-0 focus-visible:border-primary",
                                  !field.value && "text-muted-foreground"
                                )}
                                data-testid="input-date"
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span className="opacity-50">Select a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-background border-border" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
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
                        <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">Venue / Location</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-base" {...field} data-testid="input-venue" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">How can I support you?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-primary bg-transparent text-base" data-testid="input-service">
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-border">
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

                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/70 font-normal uppercase tracking-wider text-xs">Tell me a little more about your plans...</FormLabel>
                      <FormControl>
                        <Textarea 
                          className="min-h-[120px] border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none text-base" 
                          {...field} 
                          data-testid="input-details"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none mt-10 py-7 uppercase tracking-widest text-sm transition-transform active:scale-[0.98]" data-testid="button-submit">
                  Send Enquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
