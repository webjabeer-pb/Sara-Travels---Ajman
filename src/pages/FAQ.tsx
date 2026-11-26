import PageWrapper from "../components/PageWrapper";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      { question: "Where is SARA TRAVELS located?", answer: "We are located in Ajman, UAE. You can open our exact pin directly via Google Maps on the Contact page." },
      { question: "What are your business hours?", answer: "We are open from Monday to Saturday, 9:00 AM to 9:00 PM. We are closed on Sundays." },
      { question: "How can I book a trip or visa service?", answer: "Simply send us an inquiry through our Contact page or reach out directly on WhatsApp (+971 56 771 7978), and our consultants will handle everything for you." },
    ]
  },
  {
    id: "visa",
    title: "Visa Services",
    questions: [
      { question: "How long does UAE visa processing take?", answer: "Standard processing takes 24-48 hours. Express options are also available for urgent needs." },
      { question: "What documents are required for a tourist visa?", answer: "Typically, a clear passport copy (valid for 6 months) and a passport-sized photograph with a white background are required." },
      { question: "Can I extend my tourist visa?", answer: "Yes, we provide visa extension services. You can extend your stay without leaving the country or via an A2A visa change." },
    ]
  },
  {
    id: "umrah",
    title: "Umrah Packages",
    questions: [
      { question: "What is included in the Umrah package?", answer: "Our packages typically include visa processing, hotel accommodation, transportation, and guided Ziyarat tours." },
      { question: "Do you provide group Umrah tours?", answer: "Yes, we organize regular group tours with experienced guides to assist you throughout the journey." },
      { question: "Can I customize my Umrah trip?", answer: "Absolutely! We offer VIP and customized Umrah packages tailored to your specific hotel and transport preferences." },
    ]
  },
  {
    id: "flights",
    title: "Flights & Hotels",
    questions: [
      { question: "Do you offer dummy tickets for visa applications?", answer: "Yes, we provide verifiable dummy tickets and hotel bookings for visa purposes." },
      { question: "Can I get a refund on my flight ticket?", answer: "Refund policies depend on the airline and the type of ticket purchased. Our team will assist you with the cancellation process." },
      { question: "Do you offer group discounts for hotel bookings?", answer: "Yes, we provide special rates for group bookings and corporate travel." },
    ]
  }
];

interface FAQItemProps {
  key?: number | string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-all ${isOpen ? 'bg-sky-50/40 rounded-2xl px-3 sm:px-4' : ''}`}>
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-7 flex items-center justify-between text-left gap-4"
      >
        <span className={`text-base sm:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-sm sm:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const allQuestions = faqCategories.flatMap((c) => c.questions);

  return (
    <PageWrapper>
      <SEO
        title="Travel & UAE Visa FAQs | SARA TRAVELS Ajman"
        description="Answers to frequently asked questions about UAE visit visas, Umrah packages, flight bookings, and office hours at SARA TRAVELS Ajman."
        keywords="UAE visa FAQ, Umrah FAQ UAE, Sara Travels Ajman FAQ, dummy ticket FAQ"
        path="/faq"
        structuredData={{
          "@type": "FAQPage",
          "mainEntity": allQuestions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        }}
      />

      {/* Header */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-25"
        >
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80" alt="Travel scenery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent" />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 right-10 w-64 sm:w-72 h-64 sm:h-72 bg-secondary/35 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm mb-5 uppercase tracking-widest">
              <HelpCircle size={14} className="text-secondary" />
              Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Common <br />
              <span className="text-secondary italic font-serif">Inquiries.</span>
            </h1>
            <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Clarity in every detail of your journey. Find answers to our most frequently discussed topics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar Categories */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-36 space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-5 sm:mb-8">
                  <span className="text-secondary font-sans text-xs font-bold uppercase tracking-[0.35em]">Categories</span>
                  <div className="h-px w-12 bg-secondary/40" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                  {faqCategories.map((cat) => (
                    <motion.button
                      key={cat.id}
                      type="button"
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setOpenIndex(0);
                      }}
                      className={cn(
                        "w-full min-h-[48px] text-center lg:text-left px-3 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-full font-sans font-bold uppercase tracking-wider text-[11px] leading-snug transition-all duration-300 flex items-center justify-center lg:justify-between group border",
                        activeCategory === cat.id
                          ? "bg-gradient-to-r from-primary to-[#155a96] text-white border-primary shadow-lg shadow-primary/15"
                          : "bg-bg-light text-primary/75 border-primary/10 hover:border-secondary/40 hover:text-secondary"
                      )}
                    >
                      <span>{cat.title}</span>
                      <ArrowRight className={cn(
                        "w-4 h-4 hidden lg:block transition-all duration-300",
                        activeCategory === cat.id ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-5 sm:p-10 md:p-14 rounded-3xl sm:rounded-[3rem] border border-gray-100 shadow-lg shadow-gray-100/80"
                >
                  {faqCategories.find(c => c.id === activeCategory)?.questions.map((faq, i) => (
                    <FAQItem
                      key={i}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === i}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Help Box */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 sm:mt-16 bg-gradient-to-br from-[#0e3f6e] via-primary to-[#155a96] rounded-3xl sm:rounded-[3rem] p-7 sm:p-12 md:p-16 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] -mr-48 -mt-48" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                  <div className="text-center lg:text-left max-w-xl">
                    <span className="text-secondary font-bold text-xs uppercase tracking-[0.35em] block mb-4">Direct Support</span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 tracking-tight leading-tight">
                      Still have <span className="italic font-light text-secondary">Questions?</span>
                    </h3>
                    <p className="text-sm sm:text-lg text-white/75 leading-relaxed">
                      Our dedicated travel team is available around the clock to assist with your trip or visa inquiries.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                    <Link to="/contact" className="btn-secondary px-8 py-4 text-sm text-center">
                      Contact Support
                    </Link>
                    <a href="https://wa.me/971567717978" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full font-semibold bg-white/15 text-white px-8 py-4 text-sm border border-white/25 hover:bg-white/25 transition-all">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
