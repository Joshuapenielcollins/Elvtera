import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const preference = localStorage.getItem('elvtera_cookie_consent');
    if (!preference) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('elvtera_cookie_consent', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('elvtera_cookie_consent', 'declined');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 sm:bottom-4 sm:left-4 z-40 max-w-md w-full bg-white border border-[#0B0F19] p-5 shadow-2xl rounded-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B0F19] mb-1">
            Privacy & Cookie Preferences
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed mb-4">
            We use essential cookies to maintain system security and assess anonymous traffic. No third-party ad tracking. Read our{' '}
            <Link to="/cookie-policy" className="text-[#0546F2] underline hover:text-[#0437be]">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-[#0546F2] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0437be] transition-colors rounded-lg"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-neutral-300 text-neutral-700 text-xs font-bold uppercase tracking-wider hover:bg-neutral-50 transition-colors rounded-lg"
            >
              Decline Optional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
