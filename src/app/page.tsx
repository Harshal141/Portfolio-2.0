import PixelBlast from "@/components/LiquidEther";
import LegacyContent from "@/components/ResumeView";
import MiniatureView from "@/components/MiniatureView";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ position: "relative" }}>
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
    </main>
  );
}
