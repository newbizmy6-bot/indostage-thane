import { Link } from "wouter";
import { ArrowRight, Music, Palette, Globe, Film, GraduationCap, Briefcase, Star, Award, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@assets/generated_images/grand_indian_classical_dance_performance_on_stage.png";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";
import stageImage from "@assets/generated_images/grand_cultural_event_stage_setup.png";

const dancerImage = "https://res.cloudinary.com/dlcshzldd/image/upload/v1770437644/Gemini_Generated_Image_yfswe2yfswe2yfsw_z6l7tq.png"; // Heritage & Innovation - Artistic performance
const vocalistImage = "https://images.unsplash.com/photo-1735891969992-1256311f791a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Rural Talent - Authentic/Grounded

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
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

export default function Home() {
  const services = [
    {
      icon: Music,
      title: "Classical Music & Dance",
      description: "Experience the divine essence of Hindustani & Carnatic ragas, the grace of Bharatanatyam, and the storytelling of Kathak—performed by maestros who have dedicated their lives to these ancient arts.",
    },
    {
      icon: Palette,
      title: "Folk Music & Dance",
      description: "From the vibrant energy of Lavani to the mystical rhythms of Gondhal, we bring India's diverse folk traditions from rural heartlands to prestigious stages worldwide.",
    },
    {
      icon: Globe,
      title: "Conceptual & Fusion",
      description: "Where tradition meets innovation—our fusion concerts blend the timeless melodies of sitar with contemporary orchestration, creating unforgettable sonic journeys.",
    },
    {
      icon: Briefcase,
      title: "Corporate & Public Events",
      description: "Elevate your corporate gatherings with cultural experiences that leave lasting impressions. Our bespoke productions transform ordinary events into extraordinary memories.",
    },
    {
      icon: Film,
      title: "Film & Media Production",
      description: "We craft compelling visual narratives that capture the soul of Indian culture—from intimate documentaries to grand musical productions.",
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      description: "Nurturing the next generation of artists through immersive workshops led by distinguished gurus and contemporary masters of their craft.",
    },
  ];

  const stats = [
    { number: "15", label: "Performances", icon: Star },
    { number: "50", label: "Artists Network", icon: Users },
    { number: "5", label: "Years Experience", icon: Award },
    { number: "3", label: "Countries Reached", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Decorative mandala overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 text-center text-white relative z-10 pt-24 md:pt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base"
            >
              Presenting India's Artistic Legacy
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
              data-testid="text-hero-title"
            >
              Indostage
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto font-light italic"
              data-testid="text-hero-subtitle"
            >
              Where Indian Heritage Meets Global Stages
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-white/80"
            >
              A premier cultural and entertainment company dedicated to presenting India's rich artistic legacy to audiences across the world.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg group"
                  data-testid="button-get-in-touch"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 px-10 py-7 text-lg"
                >
                  Explore Our Art
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wider opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
              Our Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-foreground leading-tight"
              data-testid="text-vision-title"
            >
              Bridging Heritage
              <span className="text-primary"> & Innovation</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              data-testid="text-vision-description"
            >
              At IndoStage, we believe that India's artistic traditions are not relics of the past,
              but living, breathing expressions of human creativity that deserve to be celebrated on
              the world's grandest stages.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our vision is to become India's leading cultural production house—one that connects heritage
              with innovation, nurtures emerging talent from every corner of the nation, and delivers
              world-class artistic experiences that transcend borders and touch hearts.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button variant="outline" size="lg" className="group">
                  Discover Our Story
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={dancerImage}
                alt="Classical Dancer"
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-primary rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Our Artistic Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From intimate recitals to grand productions, we curate experiences that celebrate
              the full spectrum of India's cultural magnificence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card
                  className="group h-full hover:shadow-2xl transition-all duration-500 border-border hover:border-primary/50 bg-card overflow-hidden"
                  data-testid={`card-service-${index}`}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group" data-testid="button-explore-services">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${stageImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-2xl text-white"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Global Aspirations</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Taking Indian Artistry Beyond Borders
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-white/90 leading-relaxed mb-8">
                We aspire to collaborate with international festivals, cultural organisations,
                Indian embassies, tourism boards, and global corporate houses to create impactful,
                memorable experiences on world stages.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Partner With Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Talent Promotion Section */}
      <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
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
                src={vocalistImage}
                alt="Classical Vocalist"
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="font-medium tracking-widest uppercase mb-4 text-sm opacity-80">
                Our Commitment
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight"
                data-testid="text-commitment-title"
              >
                Promoting New & Rural Talent
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg leading-relaxed mb-6"
                data-testid="text-commitment-description"
              >
                At the heart of IndoStage lies an unwavering commitment to discovering, nurturing,
                and promoting talented artists from rural and underrepresented regions of India.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed mb-8">
                We offer them a dignified platform, professional grooming, and opportunities to
                perform on national as well as international stages—transforming their dreams into
                reality.
              </motion.p>
              <motion.blockquote
                variants={fadeInUp}
                className="border-l-4 border-primary pl-6 italic text-xl font-serif"
              >
                "Indian culture grows when every artist is heard—and we are here to make their
                voice reach the world."
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Create Something <span className="text-primary">Extraordinary?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're planning a cultural event, seeking artistic collaboration, or looking to
            showcase your talent, we'd love to hear from you.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-7 text-lg group">
                Start a Conversation
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
