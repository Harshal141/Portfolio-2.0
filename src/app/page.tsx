"use client";
import PixelBlast from "@/components/LiquidEther";
import LegacyContent from "@/components/ResumeView";
import MiniatureView from "@/components/MiniatureView";
import { useState, useEffect } from "react";
import { Notification } from "@/components/baseComponents/Notification";
import { ExpandedExperienceProvider } from "@/context/ExpandedExperienceContext";

const NOTIF_DISMISS_KEY = "blog-notif-dismissed";
const DISMISS_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 1 week

export default function Home() {
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    const dismissedAt = localStorage.getItem(NOTIF_DISMISS_KEY);
    if (dismissedAt) {
      const elapsed = Date.now() - parseInt(dismissedAt, 10);
      if (elapsed < DISMISS_DURATION_MS) {
        return; // Still within dismiss period
      }
    }
    setShowNotif(true);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(NOTIF_DISMISS_KEY, Date.now().toString());
    setShowNotif(false);
  };

  return (
    <main
      className="min-h-screen bg-[#121212]"
      style={{ position: "relative" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#67627A"
          patternScale={4}
          patternDensity={0.75}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      <ExpandedExperienceProvider>
        <div style={{ position: "relative", zIndex: 1 }}>
          <MiniatureView />
          <LegacyContent />
        </div>
      </ExpandedExperienceProvider>

      <Notification
        show={showNotif}
        onClose={handleDismiss}
        title="New Blog Available 🚀"
        message="Exploring AI-driven UI testing with Mocha."
        site="medium.com/@harshalmukundapatil"
        iconUrl="/fav/favicon-32x32.png"
        blogUrl="https://medium.com/@harshalmukundapatil"
      />
    </main>
  );
}
