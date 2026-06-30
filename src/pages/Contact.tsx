import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  
  // Lead state
  const [pillar, setPillar] = useState(location.state?.planName ? "One central system" : "Connecting my apps");
  const [teamSize, setTeamSize] = useState("11-50 employees");
  const [budget, setBudget] = useState("$5,000 - $15,000");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [corpPhone, setCorpPhone] = useState('');
  const [leadDetail, setLeadDetail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Booking state
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [meetingBooked, setMeetingBooked] = useState(false);

  const pillars = ["One central system", "Connecting my apps", "Automatic daily tasks", "Not sure yet"];
  const teamSizes = ["1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"];
  const budgets = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];

  // Generate next 5 working days dynamically (skipping Sundays)
  const getNextDays = () => {
    const days = [];
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    let current = new Date();
    
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      if (current.getDay() !== 0) { // Skip Sunday
        days.push(current.toLocaleDateString('en-US', options));
      }
    }
    return days;
  };

  const availableDays = getNextDays();
  const timeSlots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setIsSubmitted(true);
    }
  };

  const handleBookMeeting = () => {
    if (selectedDate && selectedTime) {
      setMeetingBooked(true);
    }
  };

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <SEO 
        title="Contact & Book Consultation" 
        description="Get in touch with ELVTERA. Use our step-by-step Lead Planner and Live Calendar Booker to schedule an enterprise consulting session." 
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-slate-50 dark:bg-slate-950/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[85%] h-[200px] bg-gradient-glow rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3.5 text-center">
            Get in Touch
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Let's build your system
          </h1>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Fill out our step-by-step questions below. After submitting your details, you can lock in a free, no-pressure call directly on our team's calendar.
          </p>
        </div>
      </section>

      {/* Contact Details & Wizard Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side Traditional Details (4 cols) */}
            <div className="lg:col-span-4 text-left space-y-8">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  Contact Details
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Have quick questions about our process, pricing, or custom systems? Reach out to our team directly.
                </p>
              </div>

              <div className="space-y-5 text-xs">
                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl text-brand-blue shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Corporate Inquiry</h4>
                    <p className="text-slate-500 mt-0.5">hello@elvtera.com</p>
                  </div>
                </div>

                {/* Operator */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl text-brand-blue shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Brand Operator</h4>
                    <p className="text-slate-500 mt-0.5">Collins Enterprise Solutions LLP</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-850 rounded-xl text-brand-blue shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Offices</h4>
                    <p className="text-slate-500 mt-0.5">Tamilnadu, India | Florida, USA</p>
                  </div>
                </div>
              </div>

              {/* Embedded Mock Map */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-3xl h-52 bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex flex-col justify-end p-4 font-sans shadow-sm select-none">
                {/* Background styling for grid maps */}
                <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center space-y-1">
                  <div className="h-9 w-9 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/30 animate-pulse">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-350 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-100 dark:border-slate-800 backdrop-blur-xs">
                    ELVTERA Hubs
                  </span>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-3 relative z-10 text-xs space-y-1 shadow-sm">
                  <p className="font-bold text-slate-900 dark:text-white">Collins Enterprise Solutions LLP</p>
                  <p className="text-slate-500">Tamilnadu, India | Florida, USA</p>
                </div>
              </div>

            </div>

            {/* Right side Wizard Forms (8 cols) */}
            <div className="lg:col-span-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 sm:p-8 text-left shadow-sm">
              {!isSubmitted ? (
                <div className="space-y-6">
                  {/* Wizard Header Progress */}
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/60 dark:border-slate-850">
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-400">Consultation Planner</span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white pt-0.5">
                        Step {step} of 3
                      </h4>
                    </div>
                    {/* Progress Bar indicator */}
                    <div className="w-24 bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-brand-blue h-full transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <form onSubmit={handleLeadSubmit} className="space-y-6">
                    
                    {/* STEP 1: PILLAR SELECTOR */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-350">
                          1. Select Your Primary Technology Pillar of Interest
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {pillars.map((item, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setPillar(item)}
                              className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer text-xs font-bold flex justify-between items-center ${
                                pillar === item
                                  ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue'
                                  : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                              }`}
                            >
                              <span>{item}</span>
                              {pillar === item && <CheckCircle2 className="h-4.5 w-4.5 text-brand-blue shrink-0 ml-2" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: WORKFORCE SCALE & BUDGET */}
                    {step === 2 && (
                      <div className="space-y-6">
                        {/* Team Size */}
                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-350">
                            2. What is the current size of your operational workforce?
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {teamSizes.map((item, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setTeamSize(item)}
                                className={`p-3.5 rounded-xl border text-center transition-colors cursor-pointer text-xs font-bold ${
                                  teamSize === item
                                    ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue'
                                    : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Budget */}
                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-350">
                            3. Estimated technology setup budget
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {budgets.map((item, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setBudget(item)}
                                className={`p-3.5 rounded-xl border text-center transition-colors cursor-pointer text-xs font-bold ${
                                  budget === item
                                    ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue'
                                    : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: DETAILS */}
                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-450 uppercase">Corporate Name</label>
                            <input 
                              type="text" 
                              required 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" 
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-450 uppercase">Representative Email</label>
                            <input 
                              type="email" 
                              required 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" 
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-450 uppercase">Corporate Phone</label>
                          <input 
                            type="text" 
                            required 
                            value={corpPhone}
                            onChange={(e) => setCorpPhone(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white" 
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-450 uppercase">Operational Scopes / Details</label>
                          <textarea 
                            rows={3} 
                            placeholder="Briefly describe your current systems or manual workflows..." 
                            value={leadDetail}
                            onChange={(e) => setLeadDetail(e.target.value)}
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-brand-blue text-slate-900 dark:text-white"
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Navigation buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-200/60 dark:border-slate-855">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={step === 1}
                        className={`flex items-center space-x-1 px-4 py-2.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                          step === 1 
                            ? 'opacity-30 pointer-events-none' 
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:bg-slate-100'
                        }`}
                      >
                        <ChevronLeft className="h-4.5 w-4.5" />
                        <span>Back</span>
                      </button>

                      {step < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center space-x-1 text-xs cursor-pointer"
                        >
                          <span>Continue</span>
                          <ChevronRight className="h-4.5 w-4.5" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-brand-blue/15 flex items-center space-x-1.5 text-xs cursor-pointer animate-pulse"
                        >
                          <span>Submit Scopes</span>
                          <ArrowRight className="h-4.5 w-4.5" />
                        </button>
                      )}
                    </div>

                  </form>
                </div>
              ) : (
                /* STEP 4: SUCCESS & MEETING CALENDAR BOOKER */
                <div className="space-y-8">
                  <div className="flex items-start space-x-4 pb-6 border-b border-slate-200/60 dark:border-slate-850">
                    <CheckCircle2 className="h-10 w-10 text-brand-success shrink-0" />
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Information Saved!
                      </h4>
                      <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                        We have processed your details for **{pillar}** ({teamSize}, budget: {budget}). Lock in a meeting time below.
                      </p>
                    </div>
                  </div>

                  {!meetingBooked ? (
                    <div className="space-y-6">
                      <h3 className="font-display font-semibold text-sm sm:text-base text-slate-900 dark:text-white flex items-center space-x-2">
                        <Calendar className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                        <span>Live Scoping Booker</span>
                      </h3>

                      {/* Day Selectors */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Available Dates</label>
                        <div className="grid grid-cols-5 gap-2">
                          {availableDays.map((day, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedDate(day)}
                              className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer flex flex-col justify-center items-center h-16 ${
                                selectedDate === day
                                  ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue font-bold'
                                  : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100'
                              }`}
                            >
                               <span className="text-[10px] font-extrabold uppercase text-slate-455">{day.split(' ')[0]}</span>
                               <span className="text-xs font-bold mt-1">{day.split(' ')[1]} {day.split(' ')[2]}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selectors */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Available Times</label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((time, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-2.5 rounded-xl border text-center transition-colors cursor-pointer text-xs font-bold ${
                                selectedTime === time
                                  ? 'border-brand-blue bg-brand-blue/5 dark:bg-brand-blue/10 text-brand-blue'
                                  : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-350 hover:bg-slate-100'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={handleBookMeeting}
                        disabled={!selectedDate || !selectedTime}
                        className={`w-full py-4.5 rounded-xl font-bold flex items-center justify-center space-x-2 text-center text-sm transition-colors cursor-pointer ${
                          selectedDate && selectedTime
                            ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/15'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 pointer-events-none'
                        }`}
                      >
                        <Clock className="h-4.5 w-4.5" />
                        <span>Confirm Scoping Session</span>
                      </button>
                    </div>
                  ) : (
                    <div className="py-12 text-center space-y-4 flex flex-col items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-brand-success/10 text-brand-success flex items-center justify-center animate-bounce">
                        <Sparkles className="h-7 w-7" />
                      </div>
                      <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Scoping Session Confirmed!
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mx-auto">
                        Meeting booked for **{selectedDate}** at **{selectedTime}**. A calendar invitation with Zoom details has been forwarded to **{email}**.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
export default Contact;
