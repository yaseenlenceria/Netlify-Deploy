import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Who We Are",
    content: `Weddings with Erica is a boutique wedding planning service operated by Erica Egan, based in Ireland. If you have any questions about this privacy policy or how we handle your data, you can contact us at wedwitherica@gmail.com or by calling 0872186100.`,
  },
  {
    title: "What Information We Collect",
    content: `When you submit an enquiry through our contact form, we collect the following personal information:\n\n• Your name\n• Your email address\n• Your phone number (if provided)\n• Your wedding date and any details you share in your message\n\nWe only collect information that you voluntarily provide to us. We do not collect any sensitive personal data.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information you provide solely to:\n\n• Respond to your enquiry about our wedding planning services\n• Communicate with you about potential or existing bookings\n• Send you relevant information about our services that you have requested\n\nWe will never use your information for unsolicited marketing or share it with third parties for marketing purposes.`,
  },
  {
    title: "Legal Basis for Processing",
    content: `Under the General Data Protection Regulation (GDPR), we process your personal data on the following lawful bases:\n\n• Legitimate interests — to respond to enquiries and manage client relationships\n• Contractual necessity — where you become a client, to fulfil our service agreement\n• Your consent — where you have explicitly agreed to receive information from us`,
  },
  {
    title: "How Long We Keep Your Data",
    content: `We retain your personal information for as long as is necessary to provide our services and to comply with our legal obligations. Enquiry data from non-clients is typically deleted within 12 months. Client records are retained for 6 years as required by Irish tax and business law, after which they are securely deleted.`,
  },
  {
    title: "Sharing Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your data only with trusted suppliers or venues where this is necessary to deliver your wedding services, and only with your knowledge and consent. All third parties we work with are required to handle your data in accordance with GDPR.`,
  },
  {
    title: "Cookies",
    content: `Our website may use essential cookies to ensure it functions correctly. We do not currently use tracking or advertising cookies. If this changes, we will update this policy and obtain your consent where required.`,
  },
  {
    title: "Your Rights",
    content: `Under GDPR, you have the following rights regarding your personal data:\n\n• Right to access — request a copy of the data we hold about you\n• Right to rectification — ask us to correct inaccurate data\n• Right to erasure — ask us to delete your data ("right to be forgotten")\n• Right to restrict processing — ask us to limit how we use your data\n• Right to data portability — receive your data in a portable format\n• Right to object — object to our processing of your data\n\nTo exercise any of these rights, please contact us at wedwitherica@gmail.com. We will respond within 30 days.`,
  },
  {
    title: "Data Security",
    content: `We take the security of your personal data seriously. Your information is stored securely and accessed only by Erica Egan. We use industry-standard security practices to protect your data from unauthorised access, loss, or disclosure.`,
  },
  {
    title: "Complaints",
    content: `If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with Ireland's data protection authority:\n\nData Protection Commission\nwebsite: www.dataprotection.ie\nphone: +353 57 868 4800`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <main className="pt-[76px]">
        {/* Header */}
        <section className="bg-[hsl(90,18%,95%)] border-b border-border/60 py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] uppercase tracking-[0.3em] text-primary/70 mb-4 font-sans"
            >
              Legal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-5"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-base leading-relaxed"
            >
              Last updated: June 2025 &nbsp;·&nbsp; Weddings with Erica, Ireland
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base leading-relaxed text-foreground/80"
            >
              Your privacy matters to us. This policy explains what personal information we collect when you use our website or enquire about our services, how we use it, and your rights under the General Data Protection Regulation (GDPR) and the Data Protection Acts 1988–2018.
            </motion.p>

            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="text-base leading-relaxed text-foreground/80 whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
