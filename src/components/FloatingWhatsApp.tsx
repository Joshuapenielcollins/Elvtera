import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: 'bot', 
      text: "Hi there! I'm ELVTERA's automation assistant. How can we optimize your operations today?", 
      time: 'Just now' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const quickReplies = [
    "WhatsApp API pricing?",
    "Book an ERP demo",
    "How do AI agents work?"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text, time }]);
    setInput('');
    setIsTyping(true);

    // Simulate smart bot response
    setTimeout(() => {
      setIsTyping(false);
      let reply = "Thanks for asking! I've logged this request. To speak with our enterprise team directly, you can also schedule a consultation on our Contact page or call +1 (800) 555-ELVT.";
      
      const query = text.toLowerCase();
      if (query.includes('whatsapp') || query.includes('api')) {
        reply = "Our Official WhatsApp API solutions start with shared inbox CRM integrations, auto-responses, and sales funnel workflows. I can route you to an WhatsApp setup advisor!";
      } else if (query.includes('erp') || query.includes('demo') || query.includes('book')) {
        reply = "Absolutely! We offer modular ERP solutions for Manufacturing, Textile, Healthcare, and Education. Let's arrange a deep-dive product demo. Please leave your email and our solution architect will reach out!";
      } else if (query.includes('ai') || query.includes('agent') || query.includes('voice')) {
        reply = "Our AI Voice Calling and Sales Agents connect via Twilio/WhatsApp to qualify leads, book appointments, and process documents 24/7. Would you like to set up a live phone agent trial?";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 sm:w-96 h-[480px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-brand p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-display font-semibold">
                  EV
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">ELVTERA Assistant</h3>
                  <p className="text-[11px] text-teal-100">AI Support Agent • Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="grow overflow-y-auto p-4 space-y-3.5 bg-slate-50 dark:bg-slate-950/40">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs ${
                    msg.sender === 'user'
                      ? 'bg-brand-blue text-white rounded-br-none'
                      : 'bg-white dark:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-800/80 rounded-bl-none shadow-sm'
                  }`}>
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-850 border border-slate-100 dark:border-slate-800/80 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="h-1.5 w-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="h-1.5 w-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/40 flex flex-wrap gap-1.5">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="text-[11px] font-medium bg-white dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-2.5 py-1.5 rounded-lg transition-colors flex items-center space-x-0.5 cursor-pointer"
                  >
                    <span>{reply}</span>
                    <ChevronRight className="h-3 w-3 text-slate-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI, CRM, ERP..."
                className="grow bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-blue"
              />
              <button
                type="submit"
                className="h-8.5 w-8.5 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-brand-blue/15 transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-lg shadow-brand-blue/20 hover:scale-105 active:scale-95 transition-all duration-300 relative cursor-pointer"
        aria-label="Contact support"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-brand-success rounded-full ring-2 ring-white dark:ring-slate-950 animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
export default FloatingWhatsApp;
