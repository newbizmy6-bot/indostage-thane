import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send, Sparkles, CheckCircle } from "lucide-react";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";
import heroImage from "@assets/generated_images/grand_cultural_event_stage_setup.png";
import type { InsertContactInquiry } from "@shared/schema";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertContactInquiry>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const reasons = [
    "Planning a cultural event or festival",
    "Seeking artistic collaboration",
    "Interested in our training programs",
    "Looking to showcase your talent",
    "Media and production inquiries",
    "Corporate event entertainment"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "600px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-[0.3em] uppercase mb-6 text-sm">
              Let's Create Together
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8" 
              data-testid="text-contact-title"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light"
            >
              Ready to bring world-class Indian cultural performances to your audience? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Reach Out</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-6">
              We're Here to <span className="text-primary">Listen</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-10">
              Whether you're planning a grand cultural festival, seeking artistic collaboration, or simply 
              want to learn more about what we do—we welcome your message. Every inquiry receives our 
              personal attention.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="space-y-6 mb-10">
              <motion.div variants={scaleIn} className="flex items-start gap-5 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@indostage.com</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">We respond within 24-48 hours</p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="flex items-start gap-5 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Monday to Saturday, 10am - 7pm IST</p>
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="flex items-start gap-5 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-muted-foreground">Maharashtra, India</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">By appointment only</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-accent text-accent-foreground rounded-xl p-8 relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                style={{
                  backgroundImage: `url(${mandalaImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <h3 className="font-serif font-bold text-2xl mb-4">Leadership</h3>
              <div className="space-y-2">
                <p><strong>Founder:</strong> Pradnya Kale</p>
                <p><strong>Script Writers:</strong> Gopal Awati & Pravin Joshi</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="bg-card border border-border rounded-2xl p-10 shadow-xl">
              <h2 className="text-3xl font-serif font-bold mb-2">Send a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll be in touch shortly.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    data-testid="input-name"
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    data-testid="input-phone"
                    className="mt-2 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project, event, or inquiry..."
                    data-testid="input-message"
                    className="mt-2 text-base resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 h-14 text-lg font-semibold group"
                  disabled={mutation.isPending}
                  data-testid="button-submit"
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-serif font-bold mb-8">
              Reach Out If You're...
            </motion.h2>
            
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
