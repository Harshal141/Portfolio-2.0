import PixelBlast from "@/components/LiquidEther";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
  );
}
