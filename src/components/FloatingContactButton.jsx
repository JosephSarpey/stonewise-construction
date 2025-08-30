import { useState } from 'react';
import { Headset } from 'lucide-react';

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  const mobileStyle = {
    bottom: '15vh',
    right: '1rem',
    paddingBottom: 'env(safe-area-inset-bottom)',
  };

  return (
    <div
      className="
        cursor-pointer
        fixed z-50
        sm:bottom-6 sm:right-6
        md:bottom-8 md:right-8
        flex flex-col items-end space-y-3
      "
      style={mobileStyle}
    >
      {open && (
        <div className="flex flex-col items-end mb-2 space-y-2">
          <a
            href="https://wa.me/+233557137072"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#896267] text-white rounded-lg shadow-lg hover:bg-[#563D40] transition"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.1L0 24l6.35-1.66A12 12 0 1 0 20.52 3.48Zm-8.5 17.2-4.5 1.18 1.2-4.37-.28-.45A9.08 9.08 0 1 1 21.08 12a9.07 9.07 0 0 1-9.06 8.68Zm5.1-6.9c-.28-.14-1.63-.8-1.88-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a7.32 7.32 0 0 1-2.15-1.34 8.07 8.07 0 0 1-1.5-1.87c-.16-.28 0-.43.12-.57.13-.13.28-.34.41-.5s.18-.28.27-.46a.53.53 0 0 0 0-.5c-.07-.14-.62-1.5-.85-2.05s-.45-.45-.62-.46h-.53a1 1 0 0 0-.73.34 3.06 3.06 0 0 0-.96 2.28c0 1.34.97 2.63 1.1 2.8s1.91 3 4.62 4.08c.65.28 1.15.45 1.54.58a3.7 3.7 0 0 0 1.69.11c.51-.08 1.63-.67 1.86-1.3a1.53 1.53 0 0 0 .11-1.3c-.05-.09-.2-.14-.41-.24Z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+233557137072"
            className="flex items-center px-4 py-2 bg-[#896267] text-white rounded-lg shadow-lg hover:bg-[#563D40] transition"
            aria-label="Call us"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.78 3.78 4 4.75 4h2.38c.56 0 1.05.39 1.16.94l.55 2.73c.09.45-.07.92-.41 1.21l-1.13.97a14.05 14.05 0 0 0 6.6 6.6l.97-1.13c.29-.34.76-.5 1.21-.41l2.73.55c.55.11.94.6.94 1.16v2.38c0 .97-.78 1.75-1.75 1.75A16.25 16.25 0 0 1 3 5.75Z" />
            </svg>
            Call Us
          </a>
        </div>
      )}
      <button
        className="
          cursor-pointer
          w-14 h-14 rounded-full bg-[#896267] hover:bg-[#563D40]
          flex items-center justify-center text-white shadow-lg
          transition-all duration-200 transform hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#896267]
        "
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact us"
      >
        <Headset className="w-7 h-7" />
      </button>
    </div>
  );
}