import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eraser, PenLine } from 'lucide-react';

export function SignaturePad({ onChange }: { onChange: (dataUrl: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const [hasSignature, setHasSignature] = useState(false);
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();
    const existing = canvas.toDataURL();
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.scale(ratio, ratio);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 2.2;
    context.strokeStyle = 'hsl(220 30% 15%)';
    if (existing && existing !== 'data:,') {
      const image = new Image();
      image.onload = () => context.drawImage(image, 0, 0, rect.width, rect.height);
      image.src = existing;
    }
  };
  useEffect(() => { resizeCanvas(); window.addEventListener('resize', resizeCanvas); return () => window.removeEventListener('resize', resizeCanvas); }, []);
  const position = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  const start = (event: React.PointerEvent<HTMLCanvasElement>) => { const point = position(event); if (!point) return; drawing.current = true; event.currentTarget.setPointerCapture(event.pointerId); const context = event.currentTarget.getContext('2d'); context?.beginPath(); context?.moveTo(point.x, point.y); };
  const move = (event: React.PointerEvent<HTMLCanvasElement>) => { if (!drawing.current) return; const point = position(event); if (!point) return; const context = event.currentTarget.getContext('2d'); if (!context) return; context.lineTo(point.x, point.y); context.stroke(); setHasSignature(true); onChange(event.currentTarget.toDataURL('image/png')); };
  const end = () => { drawing.current = false; };
  const clear = () => { const canvas = canvasRef.current; const context = canvas?.getContext('2d'); if (canvas && context) { context.clearRect(0, 0, canvas.width, canvas.height); onChange(''); setHasSignature(false); } };
  return <div className="space-y-3">
    <div className="overflow-hidden rounded-lg border border-dashed border-primary/40 bg-background">
      <canvas ref={canvasRef} className="h-52 w-full touch-none cursor-crosshair" onPointerDown={start} onPointerMove={move} onPointerUp={end} onPointerCancel={end} aria-label="Applicant signature canvas" />
    </div>
    <div className="flex items-center justify-between gap-3">
      <p className="flex items-center gap-2 text-xs text-muted-foreground"><PenLine className="h-4 w-4" /> {hasSignature ? 'Signature captured' : 'Draw your signature above'}</p>
      <Button type="button" variant="outline" size="sm" onClick={clear}><Eraser className="h-4 w-4" /> Clear</Button>
    </div>
  </div>;
}
