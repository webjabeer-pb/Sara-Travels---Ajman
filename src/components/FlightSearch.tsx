import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plane, Calendar, Users, ArrowRightLeft, Search, ChevronDown, Clock, MapPin, Star, Filter, X } from "lucide-react";

const MOCK_FLIGHTS = [
  {
    id: 1,
    airline: "Emirates",
    logo: "https://www.emirates.com/content/dam/emirates/logos/emirates-logo-red.png",
    departure: "10:30 AM",
    arrival: "02:45 PM",
    duration: "4h 15m",
    price: "AED 1,250",
    type: "Non-stop",
    class: "Economy"
  },
  {
    id: 2,
    airline: "Etihad Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Etihad_Airways_Logo.svg/2560px-Etihad_Airways_Logo.svg.png",
    departure: "08:15 AM",
    arrival: "12:30 PM",
    duration: "4h 15m",
    price: "AED 1,180",
    type: "Non-stop",
    class: "Economy"
  },
  {
    id: 3,
    airline: "Air Arabia",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Air_Arabia_logo.svg/1200px-Air_Arabia_logo.svg.png",
    departure: "11:50 PM",
    arrival: "04:10 AM",
    duration: "4h 20m",
    price: "AED 890",
    type: "Non-stop",
    class: "Economy"
  }
];

export default function FlightSearch() {
  const [tripType, setTripType] = useState("one-way");
  const [fareType, setFareType] = useState("regular");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [origin, setOrigin] = useState("Abu Dhabi - (AUH)");
  const [destination, setDestination] = useState("Thiruvananthapuram - (TRV)");
  const [departureDate, setDepartureDate] = useState("05-04-2026");

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
      // Scroll to results
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-40 relative z-50">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] p-8 md:p-16 border border-gray-100"
      >
        {/* Trip Type & Options */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap items-center gap-8">
            {[
              { id: "one-way", label: "One way" },
              { id: "round", label: "Round" },
              { id: "multicity", label: "Multicity" },
            ].map((type) => (
              <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="tripType"
                    checked={tripType === type.id}
                    onChange={() => setTripType(type.id)}
                    className="peer appearance-none w-6 h-6 border-2 border-gray-200 rounded-full checked:border-primary transition-all"
                  />
                  <div className="absolute w-3 h-3 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                </div>
                <span className={`font-bold text-sm uppercase tracking-widest ${tripType === type.id ? 'text-primary' : 'text-gray-400'} group-hover:text-primary transition-colors`}>
                  {type.label}
                </span>
              </label>
            ))}
          </div>

          <label className="flex items-center gap-3 cursor-pointer bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
            <span className="font-bold text-xs uppercase tracking-widest text-primary">Non Stop Flights</span>
          </label>
        </div>

        {/* Main Search Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
          {/* Origin & Destination */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Origin</label>
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-primary rotate-45" />
                <input 
                  type="text" 
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Abu Dhabi - (AUH)" 
                  className="bg-transparent w-full font-black text-lg outline-none placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Swap Button */}
            <button 
              onClick={() => {
                const temp = origin;
                setOrigin(destination);
                setDestination(temp);
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-blue-100 flex items-center justify-center text-primary hover:rotate-180 transition-all duration-500 z-10 hidden md:flex"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>

            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Destination</label>
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-primary rotate-[135deg]" />
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Thiruvananthapuram - (TRV)" 
                  className="bg-transparent w-full font-black text-lg outline-none placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Departure</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <input 
                  type="text" 
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  placeholder="05-04-2026" 
                  className="bg-transparent w-full font-black text-lg outline-none"
                />
              </div>
            </div>

            <div className={`bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-primary/30 transition-all ${tripType === 'one-way' ? 'opacity-50' : ''}`}>
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Return</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <input 
                  type="text" 
                  placeholder="Return On" 
                  disabled={tripType === 'one-way'}
                  className="bg-transparent w-full font-black text-lg outline-none placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Passengers & Fare Types */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Adult (12y+)", count: "1" },
              { label: "Child (2y-12y)", count: "0" },
              { label: "Infant (0-2y)", count: "0" },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">{item.label}</label>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 px-4 py-2 pr-10 rounded-xl font-bold text-sm outline-none focus:border-primary transition-all">
                    {[0,1,2,3,4,5,6,7,8,9].map(n => (
                      <option key={n} value={n} selected={n.toString() === item.count}>{n}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { id: "regular", label: "Regular" },
              { id: "student", label: "Student" },
              { id: "armed", label: "Armed Force" },
              { id: "senior", label: "Sr. Citizen" },
            ].map((fare) => (
              <label key={fare.id} className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border cursor-pointer transition-all ${fareType === fare.id ? 'bg-blue-50 border-blue-200 text-primary' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'}`}>
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="fareType"
                    checked={fareType === fare.id}
                    onChange={() => setFareType(fare.id)}
                    className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-primary transition-all"
                  />
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                </div>
                <span className="font-bold text-xs uppercase tracking-widest">{fare.label}</span>
              </label>
            ))}
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Class</label>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 px-8 py-2 pr-12 rounded-xl font-bold text-sm outline-none focus:border-primary transition-all">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center -mb-20">
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-[#0046ad] text-white px-24 py-6 rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-[0_20px_50px_-10px_rgba(0,70,173,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4 border-4 border-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
            {isSearching ? "SEARCHING..." : "SEARCH"}
          </button>
        </div>
      </motion.div>

      {/* Flight Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="mt-24 space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black tracking-tighter">Available Flights</h3>
              <button 
                onClick={() => setShowResults(false)}
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
              >
                <X className="w-4 h-4" /> Close Results
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {MOCK_FLIGHTS.map((flight) => (
                <motion.div
                  key={flight.id}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 group"
                >
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center p-2 border border-blue-100">
                      <Plane className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg">{flight.airline}</h4>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{flight.class}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-12 flex-1 w-full md:w-auto">
                    <div className="text-center">
                      <p className="text-2xl font-black">{flight.departure}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AUH</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1 max-w-[150px]">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{flight.duration}</p>
                      <div className="w-full h-[2px] bg-gray-100 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                          <Plane className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{flight.type}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black">{flight.arrival}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">TRV</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Price</p>
                      <p className="text-3xl font-black text-primary">{flight.price}</p>
                    </div>
                    <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all shadow-lg group-hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
