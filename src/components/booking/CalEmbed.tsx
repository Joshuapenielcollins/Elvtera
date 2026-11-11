import React, { useEffect, useState } from 'react';
import { ExternalLink, Calendar, AlertCircle } from 'lucide-react';

interface CalEmbedProps {
  calLink?: string;
  className?: string;
  minHeight?: string;
  elementId?: string;
  theme?: 'light' | 'dark';
}

export const CalEmbed: React.FC<CalEmbedProps> = ({
  calLink = 'elvtera-business-solutions-uwltid/30min',
  className = '',
  minHeight = '700px',
  elementId = 'my-cal-inline-30min',
  theme = 'light',
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const directUrl = `https://cal.com/${calLink}`;

  useEffect(() => {
    // Cal embed loader function exactly as specified
    try {
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        const d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal;
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const script = d.createElement('script');
              script.src = A;
              d.head.appendChild(script);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: any = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === 'string') {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ['initNamespace', namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }
            p(cal, ar);
          };
      })(window, 'https://app.cal.com/embed/embed.js', 'init');

      const Cal = (window as any).Cal;
      if (Cal) {
        Cal('init', '30min', { origin: 'https://app.cal.com' });
        Cal.config = Cal.config || {};
        Cal.config.forwardQueryParams = true;

        Cal.ns['30min']('inline', {
          elementOrSelector: `#${elementId}`,
          config: {
            layout: 'month_view',
            useSlotsViewOnSmallScreen: 'true',
            theme: theme,
          },
          calLink: calLink,
        });

        Cal.ns['30min']('ui', {
          theme: theme,
          cssVarsPerTheme: {
            light: { 'cal-brand': '#0a0d14' },
            dark: { 'cal-brand': '#2563eb' },
          },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
        setHasLoaded(true);
      }
    } catch (err) {
      console.warn('Cal.com script initialization issue:', err);
    }
  }, [calLink, elementId, theme]);

  const isDark = theme === 'dark';

  return (
    <div className={`w-full ${className}`}>
      {/* Inline Embed Container */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl ${
          isDark ? 'bg-[#0f1117] ring-1 ring-white/10' : 'bg-paper ring-1 ring-line'
        }`}
      >
        <div
          id={elementId}
          style={{ width: '100%', height: '100%', minHeight, overflow: 'scroll' }}
          className="w-full"
        />
      </div>

      {/* Fallback / Direct Link Bar */}
      <div
        className={`mt-4 flex flex-col items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[12.5px] sm:flex-row ${
          isDark
            ? 'border border-white/10 bg-white/[0.04] text-white/70'
            : 'bg-canvas text-slate'
        }`}
      >
        <div className="flex items-center gap-2">
          <Calendar className={`h-4 w-4 shrink-0 ${isDark ? 'text-blue-soft' : 'text-blue'}`} />
          <span>Need immediate access or experiencing browser embed issues?</span>
        </div>
        <a
          href={directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 font-medium hover:underline ${
            isDark ? 'text-blue-soft' : 'text-blue'
          }`}
        >
          <span>Open Direct Booking Calendar</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};
