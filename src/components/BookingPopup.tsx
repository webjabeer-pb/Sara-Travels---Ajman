import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            
            <div className="p-8 md:p-10">
              <h3 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Book Your Trip</h3>
              <p className="text-gray-500 mb-8 font-medium">Fill in the details and we'll get back to you within 24 hours.</p>
              
              <form className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+971 56 771 7978"
                    className="w-full px-6 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Destination</label>
                  <select className="w-full px-6 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                    <option>Maldives</option>
                    <option>Turkey</option>
                    <option>Saudi Arabia (Umrah)</option>
                    <option>Dubai / UAE</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700 ml-1">Travel Date</label>
                  <input
                    type="date"
                    className="w-full px-6 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                
                <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 mt-4">
                  Confirm Booking <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
