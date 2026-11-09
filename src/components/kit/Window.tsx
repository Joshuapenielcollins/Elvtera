import React from 'react';

interface WindowProps {
  title?: React.ReactNode;
  /** Small element shown on the right of the title bar */
  meta?: React.ReactNode;
  /** Show a URL pill instead of a plain title (for browser mockups) */
  url?: string;
  dark?: boolean;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

/** An app or browser window with traffic lights. */
export const Window: React.FC<WindowProps> = ({ title, meta, url, dark = false, className = '', bodyClassName = '', children }) => (
  <div
    className={`overflow-hidden rounded-[16px] ${
      dark ? 'bg-ink-2 text-white shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/10' : 'bg-paper text-ink shadow-app'
    } ${className}`}
  >
    <div className={`flex h-10 items-center gap-3 border-b px-4 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-line bg-paper'}`}>
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      {url ? (
        <div className="mx-auto flex h-6 min-w-0 max-w-[70%] flex-1 items-center justify-center gap-1.5 rounded-md bg-canvas px-3 text-[11px] text-slate">
          <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
            <path d="M2 4V3a2.5 2.5 0 0 1 5 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 0h3V3a1.5 1.5 0 0 0-3 0z" fill="currentColor" />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      ) : (
        title && <div className={`min-w-0 flex-1 truncate text-[12.5px] ${dark ? 'text-white/55' : 'text-slate'}`}>{title}</div>
      )}
      <div className="min-w-[33px] text-right">{meta}</div>
    </div>
    <div className={bodyClassName}>{children}</div>
  </div>
);
