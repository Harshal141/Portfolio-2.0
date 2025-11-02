"use client";
import PixelBlast from "@/components/LiquidEther";
import LegacyContent from "@/components/ResumeView";
import MiniatureView from "@/components/MiniatureView";
import { useState } from "react";
import { Notification } from "@/components/baseComponents/Notification";

export default function Home() {
  const [showNotif, setShowNotif] = useState(true);

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
      <div style={{ position: "relative", zIndex: 1 }}>
        <MiniatureView />
        <LegacyContent />
      </div>

      <Notification
        show={showNotif}
        onClose={() => setShowNotif(false)}
        title="New Blog Available 🚀"
        message="Exploring AI-driven UI testing with Mocha."
        site="medium.com/@harshalmukundapatil"
        iconUrl="/fav/favicon-32x32.png"
        blogUrl="https://medium.com/@harshalmukundapatil"
      />
    </main>
  );
}
