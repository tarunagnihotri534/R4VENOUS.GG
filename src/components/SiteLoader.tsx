"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`site-loader ${hidden ? "site-loader--hidden" : ""}`} aria-hidden={hidden}>
      <div className="site-loader__inner">
        <p className="site-loader__eyebrow">ESTD. 2022 - R4VENEOUS ESPORTS</p>
        <p className="site-loader__title">Connecting to R4 Platform...</p>
        <div className="site-loader__bar">
          <span />
        </div>
      </div>
    </div>
  );
}
