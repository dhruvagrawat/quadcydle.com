"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const cookieBannerName = "cookie-consent-dismissed";

export const CopyrightLinearBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = Cookies.get(cookieBannerName);
    if (!isDismissed) {
      setIsVisible(true);
    }
  });

  const dismiss = () => {
    setIsVisible(false);
    Cookies.set(cookieBannerName, "true", { expires: 365 });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl -translate-x-1/2 rounded-2xl border border-transparent-white p-5 backdrop-blur-[12px] bg-background/80 flex items-center justify-between gap-4 shadow-lg">
      <p className="text-sm text-primary-text">
        We use cookies to improve your experience and analyse site traffic.{" "}
        <a href="#" className="text-white underline hover:no-underline">
          Learn more
        </a>
      </p>
      <div className="flex shrink-0 gap-3">
        <button
          onClick={dismiss}
          className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-80"
        >
          Accept
        </button>
        <button
          onClick={dismiss}
          className="rounded-lg border border-transparent-white px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-70"
        >
          Decline
        </button>
      </div>
    </div>
  );
};
