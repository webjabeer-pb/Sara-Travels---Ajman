import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/971567717978"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[45] bg-gradient-to-br from-[#25D366] to-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-500/35 flex items-center justify-center transition-transform hover:scale-110 group"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap text-sm">
        Chat with us
      </span>
    </motion.a>
  );
}
