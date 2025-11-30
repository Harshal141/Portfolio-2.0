"use client";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadComplete: () => void;
  minDisplayTime?: number;
}

export default function Loader({
  onLoadComplete,
  minDisplayTime = 1500,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDisplayTime);

    return () => clearTimeout(minTimer);
  }, [minDisplayTime]);

  useEffect(() => {
    const images = Array.from(document.images);
    let loadedCount = 0;
    const totalImages = images.length || 1;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(newProgress);
      if (loadedCount >= totalImages) {
        setAssetsLoaded(true);
      }
    };

    if (images.length === 0) {
      // No images, simulate loading
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setAssetsLoaded(true);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
      return () => clearInterval(interval);
    }

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", updateProgress);
        img.removeEventListener("error", updateProgress);
      });
    };
  }, []);

  useEffect(() => {
    if (assetsLoaded && minTimeElapsed) {
      onLoadComplete();
    }
  }, [assetsLoaded, minTimeElapsed, onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#121212]">
      <div className="flex flex-col items-center gap-4 w-64">
        <span className="text-white text-sm font-mono tracking-widest">
          loading...
        </span>
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-[2px] bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white text-xs font-mono w-8 text-right">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
