import React, { useRef, useEffect } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  burstRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export const ClickSpark = ({
  sparkColor = '#FFEA00',
  burstRadius = 50,
  sparkCount = 8,
  duration = 300,
}: ClickSparkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (time: number) => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const newSparks: Spark[] = [];
      sparksRef.current.forEach(spark => {
        const elapsed = time - spark.startTime;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const ease = 1 - (1 - progress) * (1 - progress);
          const currentRadius = ease * burstRadius;
          const alpha = 1 - progress;
          const x = spark.x + Math.cos(spark.angle) * currentRadius;
          const y = spark.y + Math.sin(spark.angle) * currentRadius;
          const size = 3 * (1 - progress);
          ctx.fillStyle = sparkColor;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          newSparks.push(spark);
        }
      });
      sparksRef.current = newSparks;
      if (sparksRef.current.length > 0) {
        frameIdRef.current = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();
      for (let i = 0; i < sparkCount; i++) {
        sparksRef.current.push({
          x, y,
          angle: (Math.PI * 2 * i) / sparkCount + (Math.random() * 0.5 - 0.25),
          startTime: now
        });
      }
      cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousedown', handleClick);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('mousedown', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [sparkColor, burstRadius, sparkCount, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ClickSpark;
