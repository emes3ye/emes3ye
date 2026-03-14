"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const CAL_LINK = "emes3ye/30min";
const CAL_NAMESPACE = "booking";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export default function CalBookingEmbed() {
  const initialized = useRef(false);

  function initCal() {
    if (initialized.current || !window.Cal) return;
    initialized.current = true;

    window.Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" });
    window.Cal(`${CAL_NAMESPACE}:inline`, {
      elementOrSelector: "#cal-booking-inline",
      calLink: CAL_LINK,
      layout: "month_view",
    });
    window.Cal(`${CAL_NAMESPACE}:ui`, {
      styles: { branding: { brandColor: "#2D5A3D" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }

  useEffect(() => {
    // If script already loaded (e.g. HMR), init immediately
    if (window.Cal) initCal();
  });

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={initCal}
      />
      <div
        id="cal-booking-inline"
        className="w-full rounded-xl overflow-hidden border border-black/5"
        style={{ minHeight: 500 }}
      />
    </>
  );
}
