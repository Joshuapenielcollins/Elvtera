import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'elvtera_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage blocked: don't nag */
    }
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-20 z-50 max-w-sm rounded-2xl bg-paper p-4 shadow-window sm:left-4 sm:right-auto lg:bottom-4"
    >
      <p className="text-[13.5px] leading-relaxed text-slate">
        We use essential cookies and anonymous analytics. No ad tracking.{' '}
        <Link to="/cookie-policy" className="text-ink underline underline-offset-2">
          Cookie policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => choose('accepted')}
          className="h-9 rounded-full bg-ink px-4 text-[13px] font-medium text-white hover:bg-ink-2"
        >
          Accept
        </button>
        <button
          onClick={() => choose('declined')}
          className="h-9 rounded-full px-4 text-[13px] font-medium text-ink ring-1 ring-line-2 hover:bg-canvas"
        >
          Decline optional
        </button>
      </div>
    </div>
  );
};
