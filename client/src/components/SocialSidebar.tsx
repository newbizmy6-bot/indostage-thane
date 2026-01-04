import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export default function SocialSidebar() {
    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com", color: "hover:bg-[#1877F2]" },
        { icon: Instagram, href: "https://instagram.com", color: "hover:bg-[#E4405F]" },
        { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-[#0A66C2]" },
        { icon: Phone, href: "https://whatsapp.com", color: "hover:bg-[#25D366]" }, // Using Phone for WA generic 
    ];

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2 p-2">
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg text-foreground transition-all duration-300 ${social.color} hover:text-white`}
                >
                    <social.icon className="w-5 h-5" />
                </motion.a>
            ))}
        </div>
    );
}
