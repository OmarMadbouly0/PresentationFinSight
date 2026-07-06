import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, RefreshCw } from "lucide-react";
import { SLIDES } from "@/components/slides";
import { SlideEditor } from "@/components/slide-editor";
import { useContentMap, str, type SlideId } from "@/lib/slide-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinSight — AI-Powered Financial Intelligence" },
      { name: "description", content: "Animated presentation with a live editor: edit titles and bullets, watch animations replay instantly." },
    ],
  }),
  component: Presentation,
});

function Presentation() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [editorOpen, setEditorOpen] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const total = SLIDES.length;
  const map = useContentMap();

  useEffect(() => {
    const handleFullscreen = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreen);
    return () => document.removeEventListener("fullscreenchange", handleFullscreen);
  }, []);

  const go = useCallback((next: number) => {
    setDir(next > i ? 1 : -1);
    setI(Math.max(0, Math.min(total - 1, next)));
  }, [i, total]);

  const activeSlide = SLIDES[i];

  // Auto-replay when current slide's content changes
  const contentSignature = useMemo(
    () => JSON.stringify(map[activeSlide.id]),
    [map, activeSlide.id],
  );
  useEffect(() => {
    setReplayKey((k) => k + 1);
  }, [contentSignature]);

  // Keyboard and Custom Events
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT")) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); go(i + 1); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(i - 1); }
      else if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      else if (e.key.toLowerCase() === "e") setEditorOpen((o) => !o);
      else if (e.key.toLowerCase() === "r") setReplayKey((k) => k + 1);
    };
    
    const onGoSlide = (e: CustomEvent<number>) => {
      go(e.detail);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("go-slide", onGoSlide as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("go-slide", onGoSlide as EventListener);
    };
  }, [i, go]);

  const pointerStart = useRef<{x: number, y: number, time: number} | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY, time: Date.now() };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerStart.current) return;
    const { x: startX, y: startY, time: startTime } = pointerStart.current;
    pointerStart.current = null;

    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, textarea, select, [role='button']")) return;
    if (target.closest(".slide-editor")) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const dt = Date.now() - startTime;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) go(i + 1);
      else go(i - 1);
      return;
    }

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && dt < 500) {
      if (e.clientX > window.innerWidth / 2) go(i + 1);
      else go(i - 1);
    }
  };

  const { C, title } = activeSlide;

  return (
    <div 
      className="relative h-screen w-screen overflow-hidden bg-background"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {/* Slide stage */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={`${i}-${replayKey}`}
            custom={dir}
            initial={{ opacity: 0, x: dir * 80, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -dir * 80, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <C />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Per-slide media overlay (S1 handles its own illustration inline) */}
      <AnimatePresence mode="wait">
        {activeSlide.id !== "s1" && activeSlide.id !== "s7" && str(map[activeSlide.id].image) && (
          <motion.div
            key={`media-${i}-${replayKey}`}
            initial={{ opacity: 0, y: 20, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.35 }}
            className="pointer-events-none absolute top-20 right-8 z-40 w-[280px] md:w-[340px] rounded-2xl overflow-hidden glass shadow-2xl"
          >
            <img
              src={str(map[activeSlide.id].image)}
              alt="Slide media"
              className="block w-full h-48 md:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top progress */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan via-primary to-violet"
          initial={false}
          animate={{ width: `${((i+1)/total)*100}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>

      {/* Editor panel */}
      <SlideEditor
        open={editorOpen}
        onOpenChange={setEditorOpen}
        activeSlide={activeSlide.id as SlideId}
        onSelectSlide={(id) => {
          const idx = SLIDES.findIndex((s) => s.id === id);
          if (idx >= 0) go(idx);
        }}
        onReplay={() => setReplayKey((k) => k + 1)}
        hideToggle={isFullscreen}
      />

      {/* Bottom controls */}
      {!isFullscreen && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full glass px-3 py-2 scale-75 sm:scale-100 origin-bottom w-max">
          <button onClick={() => go(i - 1)} disabled={i === 0}
            className="flex size-9 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-30 transition" aria-label="Previous slide">
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5 px-2">
            {SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => go(idx)}
                className="group relative h-1.5 rounded-full overflow-hidden transition-all"
                style={{ width: idx === i ? 24 : 8 }} aria-label={`Slide ${idx+1}`}>
                <span className={`absolute inset-0 ${idx === i ? "bg-gradient-to-r from-cyan to-violet" : "bg-white/20 group-hover:bg-white/40"}`} />
              </button>
            ))}
          </div>
          <div className="px-3 text-xs font-mono text-muted-foreground tabular-nums">
            {String(i+1).padStart(2,"0")} / {String(total).padStart(2,"0")}
          </div>
          <button onClick={() => go(i + 1)} disabled={i === total - 1}
            className="flex size-9 items-center justify-center rounded-full hover:bg-white/10 disabled:opacity-30 transition" aria-label="Next slide">
            <ChevronRight className="size-4" />
          </button>
          <div className="mx-1 h-6 w-px bg-border" />
          <button onClick={() => setReplayKey((k) => k + 1)} title="Replay (R)"
            className="flex size-9 items-center justify-center rounded-full hover:bg-white/10 transition">
            <RefreshCw className="size-4" />
          </button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} title="Fullscreen (F)"
            className="flex size-9 items-center justify-center rounded-full hover:bg-white/10 transition">
            <Maximize2 className="size-4" />
          </button>
        </div>
      )}

      {/* Slide title corner */}
      <div className="absolute top-4 right-5 z-50 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
        {title}
      </div>

      {/* Hint */}
      {!isFullscreen && (
        <div className="absolute bottom-5 right-5 z-50 text-[10px] uppercase tracking-widest text-muted-foreground hidden md:block">
          ← → navigate · E editor · R replay · F fullscreen
        </div>
      )}
    </div>
  );
}

