"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const STORAGE_KEY = "cookie_consent";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    function check() {
      setConsented(localStorage.getItem(STORAGE_KEY) === "accepted");
    }
    check();
    // Re-check when storage changes (e.g. user accepts cookies)
    window.addEventListener("storage", check);
    // Also poll briefly since the banner sets localStorage in the same tab
    const interval = setInterval(check, 1000);
    return () => {
      window.removeEventListener("storage", check);
      clearInterval(interval);
    };
  }, []);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId || !consented) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
