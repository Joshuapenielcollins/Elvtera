import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { dealValueOptions, callCapacityOptions } from '../../data/pilotData';
import { CALENDLY_URL } from '../../data/siteConfig';
import { Button } from '../ui/Button';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    companyWebsite: '',
    whatDoYouSell: '',
    averageDealValue: dealValueOptions[0],
    callsCapacity: callCapacityOptions[0],
  });

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit function
    console.log('Pilot application submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 transition-opacity backdrop-blur-none"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white border border-[#0B0F19] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto rounded-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="border-l-4 border-[#0546F2] pl-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0546F2]">
                Evaluation Window
              </span>
              <h2 id="modal-headline" className="text-2xl font-extrabold text-[#0B0F19] tracking-tight mt-1">
                Apply for a No-Risk Pilot
              </h2>
            </div>
            <p className="text-sm text-neutral-600 mb-6">
              We test intent sourcing and outbound response metrics across a dedicated pilot sprint. Complete the application below to verify offer qualification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] focus:ring-1 focus:ring-[#0546F2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] focus:ring-1 focus:ring-[#0546F2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                    Company Website *
                  </label>
                  <input
                    required
                    type="url"
                    placeholder="https://company.com"
                    value={formData.companyWebsite}
                    onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] focus:ring-1 focus:ring-[#0546F2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                  What do you sell? *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Enterprise cybersecurity audits for financial firms"
                  value={formData.whatDoYouSell}
                  onChange={(e) => setFormData({ ...formData, whatDoYouSell: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0546F2] focus:ring-1 focus:ring-[#0546F2]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                    Average Deal Value *
                  </label>
                  <select
                    value={formData.averageDealValue}
                    onChange={(e) => setFormData({ ...formData, averageDealValue: e.target.value })}
                    className="w-full px-3 py-3 border border-neutral-300 rounded-xl text-sm bg-white focus:outline-none focus:border-[#0546F2]"
                  >
                    {dealValueOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
                    Calls you can handle / month *
                  </label>
                  <select
                    value={formData.callsCapacity}
                    onChange={(e) => setFormData({ ...formData, callsCapacity: e.target.value })}
                    className="w-full px-3 py-3 border border-neutral-300 rounded-xl text-sm bg-white focus:outline-none focus:border-[#0546F2]"
                  >
                    {callCapacityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" className="w-full justify-center">
                  Submit Application
                </Button>
              </div>

              <p className="text-xs text-neutral-500 text-center">
                Strict qualification criteria. We respond within 24 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-blue-50 text-[#0546F2] flex items-center justify-center mx-auto mb-4 border border-[#0546F2] rounded-2xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#0B0F19] mb-2">Application Received</h3>
            <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto">
              Our strategy team will review your target profile and reply by email within 24 hours. You may also skip the queue by scheduling your qualification intro right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={CALENDLY_URL} variant="primary">
                Book a call now
              </Button>
              <Button variant="secondary" showArrow={false} onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
