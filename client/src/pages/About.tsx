import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Star, TrendingUp, Award, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";
import stageImage from "@assets/generated_images/grand_cultural_event_stage_setup.png";
import dancerImage from "@assets/generated_images/elegant_classical_dancer_portrait.png";
import heroImage from "@assets/generated_images/grand_indian_classical_dance_performance_on_stage.png";

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

export default function About() {
  const values = [
    {
      icon: Star,
      title: "Authenticity",
      description: "We honour the purity and essence of traditional art forms while presenting them with contemporary finesse."
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Every artist, regardless of their background, deserves a dignified platform to share their gift with the world."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue the highest standards in every production, from intimate recitals to grand international showcases."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Tradition and creativity coexist in our work, creating fresh interpretations that resonate with modern audiences."
    }
  ];

  const differentiators = [
    "Strong artistic network spanning classical, folk, and contemporary fields across India",
    "Professional production team with decades of combined experience",
    "Concept-driven, culturally rich programming that tells compelling stories",
    "Global-ready performance formats designed for diverse international audiences",
    "Unwavering commitment to quality, authenticity, and artistic integrity",
    "Deep relationships with maestros, emerging artists, and cultural institutions"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center pt-20"
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
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8"
              data-testid="text-about-title"
            >
              About IndoStage
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light"
              data-testid="text-about-subtitle"
            >
              A premier cultural and entertainment company dedicated to presenting India's rich artistic
              legacy to audiences across the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
              Custodians of India's <span className="text-primary">Cultural Heritage</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
              IndoStage Creative & Production Pvt. Ltd. is more than just an entertainment company—we are
              passionate custodians of India's magnificent cultural heritage. For over two decades, we have
              been at the forefront of presenting India's artistic excellence to discerning audiences worldwide.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
              We curate, create, and celebrate the finest in Classical Music, Indian Dance, Folk Art,
              World Music, and Concept-Based Performances, bringing timeless traditions into contemporary
              global arenas with the reverence they deserve.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Our productions are not mere performances—they are immersive journeys that transport audiences
              through centuries of artistic evolution, from the ancient courts of maharajas to the vibrant
              village squares, from sacred temple traditions to the grandest concert halls of the world.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={dancerImage}
              alt="Classical Art Form"
              className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl max-w-xs">
              <p className="font-serif text-2xl font-bold mb-2">25+ Years</p>
              <p className="text-sm opacity-90">of celebrating Indian artistic excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5"
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
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
              Our Guiding Light
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Vision & Mission
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become India's leading cultural production house that connects heritage with innovation,
                nurtures emerging talent from every corner of the nation, and delivers world-class artistic
                experiences on national and international platforms—making Indian culture a universal language
                of beauty and expression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-10 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To ensure that India's music, dance, rhythm, and stories resonate across the world, while
                providing a dignified platform for artists from rural and underrepresented regions. We believe
                every voice deserves to be heard, every tradition deserves to be celebrated, and every artist
                deserves to shine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
            What Drives Us
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Core Values
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These principles guide every decision we make and every production we create.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={stageImage}
                alt="Grand Stage"
                className="w-full aspect-video object-cover rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                What Sets IndoStage <span className="text-primary">Apart</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Aspiration */}
      <section className="py-24 container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Global Vision</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Taking Indian Artistry <span className="text-primary">Beyond Borders</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-8">
            IndoStage aims to take Indian artistry beyond borders. We aspire to collaborate with
            international festivals, cultural organisations, Indian embassies, tourism boards, and
            global corporate houses to create impactful, memorable experiences on global stages.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed mb-12">
            Our mission is to ensure that India's music, dance, rhythm, and stories resonate across
            the world—not as exotic curiosities, but as profound expressions of universal human
            experience that touch hearts and transform perspectives.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 py-7 text-lg group">
                Partner With Us
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
