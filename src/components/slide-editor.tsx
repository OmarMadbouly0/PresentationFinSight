
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, X, RotateCcw, RefreshCw, Plus, Trash2, ChevronDown, Upload, Image as ImageIcon } from "lucide-react";
import {
  slideOrder, slideMeta, useContentMap, updateField, resetSlide, resetAll,
  arr, str, type SlideId,
} from "@/lib/slide-content";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  activeSlide: SlideId;
  onSelectSlide: (id: SlideId) => void;
  onReplay: () => void;
  hideToggle?: boolean;
};

export function SlideEditor({ open, onOpenChange, activeSlide, onSelectSlide, onReplay, hideToggle }: Props) {
  const map = useContentMap();
  const meta = slideMeta[activeSlide];
  const content = map[activeSlide];

  return (
    <>
      {/* Toggle button (always visible unless explicitly hidden) */}
      {!hideToggle && (
        <button
          onClick={() => onOpenChange(!open)}
          className="fixed top-4 left-4 z-[60] flex size-10 items-center justify-center rounded-full glass hover:bg-white/15 transition"
          aria-label={open ? "Close editor" : "Open editor"}
          title="Editor (E)"
        >
          {open ? <X className="size-4" /> : <Pencil className="size-4" />}
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.aside
            key="editor"
            initial={{ x: -420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -420, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[420px] max-w-[92vw] glass border-r border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 pl-16 py-4 border-b border-border">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Editor</div>
                <div className="font-display text-lg font-semibold leading-tight">Slide content</div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={onReplay} title="Replay animation"
                  className="flex size-9 items-center justify-center rounded-md hover:bg-white/10 text-cyan">
                  <RefreshCw className="size-4" />
                </button>
                <button onClick={() => resetAll()} title="Reset all slides"
                  className="flex size-9 items-center justify-center rounded-md hover:bg-white/10 text-muted-foreground">
                  <RotateCcw className="size-4" />
                </button>
              </div>
            </div>

            {/* Slide picker */}
            <div className="px-5 py-3 border-b border-border">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Slide</label>
              <div className="relative mt-1.5">
                <select
                  value={activeSlide}
                  onChange={(e) => onSelectSlide(e.target.value as SlideId)}
                  className="w-full appearance-none rounded-lg bg-white/5 border border-border px-3 py-2.5 pr-9 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {slideOrder.map((id, i) => (
                    <option key={id} value={id} className="bg-card">
                      {String(i + 1).padStart(2, "0")} · {slideMeta[id].title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Fields */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              <div className="flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-widest text-cyan">{meta.title}</div>
                <button onClick={() => resetSlide(activeSlide)}
                  className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                  <RotateCcw className="size-3" /> Reset slide
                </button>
              </div>

              {meta.fields.map((f) => {
                if (f.type === "text") {
                  return (
                    <Field key={f.key} label={f.label} hint={f.hint}>
                      <input
                        value={str(content[f.key])}
                        onChange={(e) => updateField(activeSlide, f.key, e.target.value)}
                        className="w-full rounded-lg bg-white/5 border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </Field>
                  );
                }
                if (f.type === "textarea") {
                  return (
                    <Field key={f.key} label={f.label} hint={f.hint}>
                      <textarea
                        value={str(content[f.key])}
                        onChange={(e) => updateField(activeSlide, f.key, e.target.value)}
                        rows={3}
                        className="w-full resize-y rounded-lg bg-white/5 border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </Field>
                  );
                }
                if (f.type === "image") {
                  return (
                    <Field key={f.key} label={f.label} hint={f.hint}>
                      <ImageInput
                        value={str(content[f.key])}
                        onChange={(v) => updateField(activeSlide, f.key, v)}
                      />
                    </Field>
                  );
                }
                // list
                const list = arr(content[f.key]);
                return (
                  <Field key={f.key} label={f.label} hint={f.hint}>
                    <div className="space-y-1.5">
                      {list.map((v, i) => (
                        <div key={i} className="flex gap-1.5">
                          <input
                            value={v}
                            onChange={(e) => {
                              const next = [...list];
                              next[i] = e.target.value;
                              updateField(activeSlide, f.key, next);
                            }}
                            className="flex-1 rounded-lg bg-white/5 border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                          <button
                            onClick={() => updateField(activeSlide, f.key, list.filter((_, j) => j !== i))}
                            className="flex size-9 items-center justify-center rounded-lg hover:bg-destructive/15 text-muted-foreground hover:text-destructive transition"
                            title="Remove"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => updateField(activeSlide, f.key, [...list, ""])}
                        className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
                      >
                        <Plus className="size-3" /> Add item
                      </button>
                    </div>
                  </Field>
                );
              })}
            </div>

            <div className="px-5 py-3 border-t border-border text-[10px] text-muted-foreground">
              Changes save automatically · animations replay on edit
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-xs font-medium text-foreground">{label}</span>
        {hint && <span className="text-[10px] text-muted-foreground">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

function ImageInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<string | null>(null);

  const onFile = (file: File) => {
    setErr(null);
    if (!file.type.startsWith("image/")) { setErr("Not an image file"); return; }
    if (file.size > 4 * 1024 * 1024) { setErr("Max 4 MB (localStorage limit)"); return; }
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result ?? ""));
    reader.onerror = () => setErr("Failed to read file");
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative group rounded-lg overflow-hidden border border-border bg-white/5">
          <img src={value} alt="Slide media preview" className="block w-full h-32 object-cover" />
          <button
            onClick={() => onChange("")}
            className="absolute top-1.5 right-1.5 flex size-7 items-center justify-center rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition"
            title="Remove image"
          >
            <Trash2 className="size-3.5" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-border bg-white/5 py-6 text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
        >
          <ImageIcon className="size-5" />
          <span className="text-xs">Click to upload</span>
        </button>
      )}
      <div className="flex gap-1.5">
        <button
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white/5 px-2.5 py-1.5 text-[11px] hover:bg-white/10 transition"
        >
          <Upload className="size-3" /> Upload
        </button>
        <input
          type="url"
          placeholder="or paste image URL"
          value={value.startsWith("data:") ? "" : value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-lg bg-white/5 border border-border px-2.5 py-1.5 text-[11px] focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); e.target.value = ""; }}
      />
      {err && <div className="text-[10px] text-destructive">{err}</div>}
    </div>
  );
}

