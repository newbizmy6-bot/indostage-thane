import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Sparkles, ArrowRight, Crown, Pen, Star } from "lucide-react";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";
import heroImage from "@assets/generated_images/grand_indian_classical_dance_performance_on_stage.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Team() {
  const founder = {
    name: "Pradnya Kale",
    role: "Founder & Concept Director",
    description: "Visionary leader driving IndoStage's mission to bring Indian cultural heritage to global stages."
  };

  const scriptWriters = [
    { 
      name: "Gopal Awati", 
      role: "Script Writer",
      description: "Master storyteller weaving narratives that bring cultural performances to life."
    },
    { 
      name: "Pravin Joshi", 
      role: "Script Writer",
      description: "Creative wordsmith crafting compelling scripts for our productions."
    }
  ];

  const teamMembers = [
    "Harsha Sawant",
    "Kunchala Lad",
    "Nitisha Potnis",
    "Nishka Bhawsar",
    "Abha Mahajan",
    "Sanika Pawar",
    "Swanandee Date",
    "Kasturi Hatode",
    "Shreya Naik",
    "Shubham Joshi",
    "Gautam Mhakse",
    "Tanish Mothe",
    "Soham Chougule",
    "Ajinkya Inarkar",
    "Hardish Taptekar",
    "Sahil Yadav"
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
              The People Behind The Magic
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8" 
              data-testid="text-team-title"
            >
              Our Team
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light"
            >
              Passionate individuals united by a shared love for Indian culture and a commitment to artistic excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
            Behind every breathtaking performance and every seamless production stands a team of dedicated 
            professionals who share an unwavering passion for Indian arts and culture. Our diverse team 
            brings together creative visionaries, seasoned producers, talented artists, and meticulous 
            managers—all working in harmony to deliver world-class cultural experiences.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
            Together, we are building a future where Indian heritage shines on global stages, where every 
            artist finds their voice, and where cultural traditions are celebrated with the reverence and 
            innovation they deserve.
          </motion.p>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-8">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Leadership</span>
            </motion.div>
            
            <motion.div 
              variants={scaleIn}
              className="bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary rounded-2xl p-12 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-2" data-testid="text-founder-name">
                    {founder.name}
                  </h2>
                  <p className="text-xl text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {founder.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Script Writers Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-8">
            <Pen className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Creative Direction</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-12 text-center">
            Script Writers
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scriptWriters.map((writer, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Pen className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-2" data-testid={`text-writer-${index}`}>
                      {writer.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{writer.role}</p>
                    <p className="text-muted-foreground">{writer.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-8">
              <Star className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Talented Crew</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl font-serif font-bold mb-6 text-center">
              Team Members
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-center text-lg opacity-80 max-w-2xl mx-auto mb-12">
              The dedicated individuals who bring our vision to life through their passion, 
              creativity, and unwavering commitment to excellence.
            </motion.p>
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-lg p-5 text-center hover:bg-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">
                      {member.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-medium text-secondary-foreground" data-testid={`text-member-${index}`}>
                    {member}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Join Our Journey</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Be Part of Something <span className="text-primary">Extraordinary</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're an artist seeking a platform, a partner looking to collaborate, or someone 
            who shares our passion for Indian culture—we'd love to hear from you.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-7 text-lg group">
                Connect With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
