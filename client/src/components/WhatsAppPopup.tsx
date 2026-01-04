import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 50, scale: 0.9 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
             {/* Main Popup Card */}
             <div 
                className="bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-5 w-[280px] relative text-left overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
             >
                {/* Decorative Background Element */}
                <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#25D366]/10 rounded-full blur-2xl group-hover:bg-[#25D366]/20 transition-all duration-500" />

                {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full p-1 transition-colors"
                  aria-label="Close popup"
                >
                    <X size={16} />
                </button>
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                   <div className="bg-[#25D366]/10 p-2 rounded-full">
                      <MessageCircle className="text-[#25D366] w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-serif font-bold text-foreground text-lg leading-tight">Hi there! 👋</h3>
                   </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Have questions? Connect with us on WhatsApp for instant support!
                </p>
                
                {/* CTA Button */}
                <a 
                  href="https://whatsapp.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  <span>Connect Now</span>
                  <Send size={14} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </a>
             </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
