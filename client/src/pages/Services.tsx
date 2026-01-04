import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Palette, Globe, Film, GraduationCap, Briefcase } from "lucide-react";
import classicalImage from "@assets/generated_images/indian_classical_music_instruments_close_up.png";
import folkImage from "@assets/generated_images/vibrant_indian_folk_dance_performance.png";
import fusionImage from "@assets/generated_images/fusion_music_concert_with_mixed_instruments.png";
import corporateImage from "@assets/generated_images/professional_corporate_event_with_cultural_decor.png";
import filmImage from "@assets/generated_images/film_production_behind_the_scenes.png";
import workshopImage from "@assets/generated_images/dance_workshop_training_session.png";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";
import heroImage from "@assets/generated_images/grand_cultural_event_stage_setup.png";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function Services() {
  const services = [
    {
      icon: Music,
      title: "Classical Music & Dance",
      image: classicalImage,
      tagline: "The Divine Essence of Ancient Arts",
      description: "We present exceptional performances that embody the depth, purity, and spiritual essence of India's classical traditions. Our curated presentations feature maestros and virtuosos who have dedicated their lives to these sacred art forms.",
      offerings: [
        "Hindustani Classical Music featuring legendary vocalists and instrumentalists",
        "Carnatic Music concerts with South India's finest musicians",
        "Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam performances",
        "Instrumental recitals featuring sitar, tabla, sarod, santoor, and veena",
        "Jugalbandis and thematic classical productions",
        "Intimate baithak-style concerts and grand auditorium presentations"
      ],
      highlight: "Our classical presentations celebrate the ragas of dawn and dusk, the taals that have echoed through millennia, and the mudras that speak the language of the divine."
    },
    {
      icon: Palette,
      title: "Folk Music & Dance",
      image: folkImage,
      tagline: "Celebrating India's Vibrant Heritage",
      description: "India's soul lives in its villages, and we bring that vibrant spirit to prestigious stages worldwide. Our folk presentations showcase the incredible diversity of India's regional traditions, from the colourful energy of Maharashtra to the rhythmic traditions of every state.",
      offerings: [
        "Lavani performances with authentic traditional choreography",
        "Koli dance representing the fishing communities of Maharashtra",
        "Banjara, Gondhal, and Powada—storytelling through movement",
        "Regional folk music featuring traditional instruments",
        "Tribal and rural art forms from across India",
        "Curated folk festivals celebrating regional diversity"
      ],
      highlight: "We strongly believe in bringing regional and rural artists to the mainstream stage, showcasing the breathtaking diversity of India's cultural fabric to the world."
    },
    {
      icon: Globe,
      title: "Conceptual & Fusion Concerts",
      image: fusionImage,
      tagline: "Where Tradition Meets Innovation",
      description: "Innovation and tradition dance together in our fusion productions. We create thematic programs designed for modern audiences while respecting the roots of every art form we touch. These productions offer a refreshing mix of nostalgia, creativity, and global soundscapes.",
      offerings: [
        "Live Concert Series of Bollywood classics",
        "Sitar Symphony—Indian classical meets orchestral grandeur",
        "Indian-Western Fusion Ensembles featuring world-class musicians",
        "Jazz blends with Indian classical ragas",
        "All-instrumental shows with contemporary arrangements",
        "Youth-oriented creative experiments and new-age collaborations"
      ],
      highlight: "Our fusion concerts are sonic journeys that honor tradition while speaking to contemporary sensibilities—a bridge between generations and cultures."
    },
    {
      icon: Briefcase,
      title: "Corporate & Public Events",
      image: corporateImage,
      tagline: "Elevating Every Occasion",
      description: "Transform your corporate gatherings into cultural experiences that leave lasting impressions. Our professional team brings creativity, seamless execution, and deep audience connect to every event we manage, from intimate corporate dinners to grand public festivals.",
      offerings: [
        "Corporate shows with customized cultural programming",
        "Public cultural festivals and city celebrations",
        "Political and promotional events with heritage themes",
        "Historical and heritage theme productions",
        "Product launches with cultural entertainment",
        "Award ceremonies and gala evenings"
      ],
      highlight: "With a strong execution team and decades of experience, we ensure every event exceeds expectations—delivering professionalism, creativity, and memorable experiences."
    },
    {
      icon: Film,
      title: "Film & Media Production",
      image: filmImage,
      tagline: "Stories Rooted in Culture",
      description: "Our production wing creates compelling visual narratives that capture the soul of Indian culture. We tell stories rooted in culture, history, tradition, and profound human experiences—stories that need to be told and deserve to be seen.",
      offerings: [
        "Documentaries exploring cultural traditions and artistic journeys",
        "Short films with cultural and social themes",
        "Web series celebrating Indian heritage",
        "Music albums and live concert recordings",
        "Artist profiles and promotional films",
        "Cultural event documentation and archiving"
      ],
      highlight: "Every frame we capture, every story we tell, is infused with respect for the traditions we document and love for the artists we feature."
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      image: workshopImage,
      tagline: "Nurturing Tomorrow's Maestros",
      description: "The traditions we celebrate must be passed on. Our comprehensive training programs are designed to nurture the next generation of artists, providing them with the skills, knowledge, and platform they need to carry these ancient arts into the future.",
      offerings: [
        "Acting workshops with theatre veterans",
        "Dance training in classical and folk forms",
        "Classical music workshops for vocals and instruments",
        "Folk art training preserving regional traditions",
        "Instrumental training with master musicians",
        "Future talent hunts and artist development programmes"
      ],
      highlight: "We are building a future where every talented young artist has access to world-class training and the opportunity to share their gift with the world."
    }
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
              What We Offer
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8" 
              data-testid="text-services-title"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 font-light"
            >
              Comprehensive cultural production services celebrating the full spectrum of India's artistic magnificence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`py-20 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
            data-testid={`section-service-${index}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[450px] object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary/30 rounded-lg -z-10" />
                    <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={staggerContainer}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
                    {service.tagline}
                  </motion.p>
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </motion.p>
                  
                  <motion.div variants={fadeInUp} className="mb-6">
                    <h4 className="font-semibold text-lg mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.blockquote 
                    variants={fadeInUp}
                    className="border-l-4 border-primary pl-6 italic text-foreground/80 text-lg"
                  >
                    {service.highlight}
                  </motion.blockquote>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${mandalaImage})`,
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Create Something Extraordinary?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Let us bring the magnificence of Indian culture to your event, project, or platform. 
              We'd love to discuss how we can collaborate.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg group">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
