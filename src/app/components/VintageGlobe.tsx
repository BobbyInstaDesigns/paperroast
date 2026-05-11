import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "./theme-provider";

export const VintageGlobe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const isDark = theme === 'dark';
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 100 * 2,
      height: 100 * 2,
      phi: 0,
      theta: 0,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: isDark ? [0.1, 0.1, 0.1] : [0.96, 0.94, 0.9],
      markerColor: [1, 0, 0],
      glowColor: isDark ? [1, 0.9, 0] : [0.2, 0.2, 0.2],
      opacity: 1,
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [theme]);

  return (
    <div className={`${className} relative flex items-center justify-center overflow-hidden rounded-full`}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', maxWidth: '100%', aspectRatio: '1' }}
      />
    </div>
  );
};
