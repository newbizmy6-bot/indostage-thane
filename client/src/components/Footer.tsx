import { Link } from "wouter";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import mandalaImage from "@assets/generated_images/golden_mandala_decorative_pattern.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative mandala */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${mandalaImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">Indo</h3>
            <p className="text-lg italic text-secondary-foreground/80 mb-6">
              Where Indian Heritage Meets Global Stages
            </p>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              A premier cultural and entertainment company dedicated to presenting India's rich
              artistic legacy to audiences across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/team", label: "Our Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">Our Services</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>Classical Music & Dance</li>
              <li>Folk Music & Dance</li>
              <li>Conceptual & Fusion Concerts</li>
              <li>Corporate & Public Events</li>
              <li>Film & Media Production</li>
              <li>Training & Workshops</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-secondary-foreground">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Email</p>
                  <p className="text-secondary-foreground">pradnya@indostage.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Phone</p>
                  <p className="text-secondary-foreground">+91 836 984 5536</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">Location</p>
                  <p className="text-secondary-foreground">Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
              <p className="text-sm text-secondary-foreground/70 mb-1">Founder</p>
              <p className="font-medium text-primary">Pradnya Kale</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {currentYear} IndoStage Creative & Production Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/60">
            Crafted with passion for Indian culture
          </p>
        </div>

        <div className="mt-8 text-center border-t border-secondary-foreground/5 pt-4">
          <p className="text-xs text-secondary-foreground/40">
            Designed / Managed by <a href="https://stratcrowd.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Stratcrowd</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
