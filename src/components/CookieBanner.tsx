"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    // Notify other components (e.g. Analytics) in the same tab
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-navy text-white p-4 sm:p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm leading-relaxed flex-1">
          We use cookies to improve your experience and analyse site traffic. By continuing to use
          this site you consent to our use of cookies. See our{" "}
          <Link href="/cookies" className="underline hover:text-gray-300">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <button
          onClick={accept}
          className="bg-white text-navy px-6 py-2.5 rounded text-sm font-semibold hover:bg-gray-100 transition-colors shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
