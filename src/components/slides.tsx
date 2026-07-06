
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Sparkles, BarChart3, Brain, Bot, FlaskConical, BellRing, Layers,
  TrendingUp, AlertTriangle, Database, Code2, Rocket, CheckCircle2,
  Play, MessageSquareText, ArrowRight, ArrowDown, Wand2, Briefcase, Calculator,
  Users, MousePointerClick, ShieldCheck, Activity, Ticket, Globe,
  Heart, Share2, DollarSign, Mail
} from "lucide-react";
import { type ReactNode, useState, useEffect } from "react";
import { useSlideContent, str, arr, parseKV, parseGroup, type SlideId } from "@/lib/slide-content";

/* Safelist for Tailwind v4 JIT — dynamic class names must appear as literals */
const _safelist = [
  "bg-cyan/15", "bg-cyan/20", "bg-cyan/30", "text-cyan", "border-cyan/20", "border-cyan/30",
  "bg-violet/15", "bg-violet/20", "bg-violet/30", "text-violet", "border-violet/20", "border-violet/30",
  "bg-emerald/15", "bg-emerald/20", "bg-emerald/30", "text-emerald", "border-emerald/20", "border-emerald/30",
  "bg-amber/15", "bg-amber/20", "bg-amber/30", "text-amber", "border-amber/20", "border-amber/30",
  "bg-primary/15", "bg-primary/20", "bg-primary/30", "text-primary", "border-primary/20", "border-primary/30",
  "bg-destructive/15", "bg-destructive/20", "bg-destructive/30", "text-destructive", "border-destructive/20", "border-destructive/30",
];
void _safelist;

/* ---------- shared motion ---------- */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 110, damping: 18 } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};
const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 14 } },
};

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={item}
      className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan"
    >
      <Sparkles className="size-3.5" /> {children}
    </motion.div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-12 size-72 rounded-full bg-cyan/20 blur-3xl float" />
      <div className="absolute right-10 bottom-10 size-96 rounded-full bg-violet/20 blur-3xl float" style={{ animationDelay: "-3s" }} />
      <div className="absolute inset-0 grid-lines opacity-40" />
    </div>
  );
}

function SlideShell({ children, kicker, scaleDown }: { children: ReactNode; kicker?: ReactNode; scaleDown?: boolean }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative h-full w-full bg-stage px-12 py-12 md:px-20 md:py-16 overflow-hidden"
    >
      <FloatingShapes />
      <div className={`relative h-full flex flex-col ${scaleDown ? 'transform scale-[0.9] origin-top' : ''}`}>
        {kicker}
        {children}
      </div>
    </motion.div>
  );
}

function SectionTitle({ pre, accent, suffix }: { pre: string; accent: string; suffix?: string }) {
  return (
    <motion.h2 variants={item} className="mt-4 font-display text-5xl md:text-6xl font-semibold leading-[1.05]">
      {pre} {accent && <span className="text-gradient">{accent}</span>} {suffix}
    </motion.h2>
  );
}

/* ============ SLIDE 1: TITLE ============ */
export function S1_Title() {
  const c = useSlideContent("s1");
  return (
    <SlideShell>
      <div className="flex h-full items-center">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 w-full items-center">
          <div>
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan">
              <Sparkles className="size-3.5" /> {str(c.kicker)}
            </motion.div>
            <motion.h1 variants={item} className="mt-6 font-display text-7xl md:text-[8.5rem] font-bold leading-[0.9] tracking-tight">
              {str(c.brandPrefix)}<span className="text-gradient">{str(c.brandAccent)}</span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-xl text-xl text-muted-foreground leading-relaxed">
              {str(c.subtitle)}
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-2.5">
              {arr(c.pills).map((t) => (
                <motion.span key={t} variants={pop} whileHover={{ y: -3 }}
                  className="rounded-full glass px-4 py-2 text-sm font-medium">
                  {t}
                </motion.span>
              ))}
            </motion.div>

          </div>

          <motion.div variants={pop} className="relative aspect-square mx-auto w-full max-w-md">
            {str(c.image) ? (
              <div className="absolute inset-0 rounded-3xl glass overflow-hidden">
                <img src={str(c.image)} alt="Slide illustration" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 rounded-2xl glass p-3 flex items-center gap-2">
                  <Brain className="size-5 text-violet" /><span className="text-sm font-medium">AI online</span>
                </motion.div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 rounded-3xl glass pulse-ring" />
                <div className="absolute inset-6 rounded-2xl glass overflow-hidden">
                  <div className="absolute inset-0 grid-lines opacity-60" />
                  <svg viewBox="0 0 200 200" className="absolute inset-0 size-full">
                    <motion.path
                      d="M10 150 Q 50 80, 80 110 T 150 60 T 195 30"
                      stroke="url(#g)" strokeWidth="3" fill="none" strokeLinecap="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                    <defs>
                      <linearGradient id="g" x1="0" x2="1">
                        <stop offset="0" stopColor="oklch(0.85 0.16 210)" />
                        <stop offset="1" stopColor="oklch(0.78 0.2 295)" />
                      </linearGradient>
                    </defs>
                    {[[80, 110], [150, 60], [195, 30]].map(([x, y], i) => (
                      <motion.circle key={i} cx={x} cy={y} r="5" fill="oklch(0.85 0.16 210)"
                        initial={{ scale: 0 }} animate={{ scale: [0, 1.4, 1] }}
                        transition={{ delay: 0.6 + i * 0.3, duration: 0.6 }} />
                    ))}
                  </svg>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-10 -bottom-10 size-44 rounded-full border border-cyan/30"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald/20 px-2.5 py-1 text-xs text-emerald">
                    <TrendingUp className="size-3" /> +24.8%
                  </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 rounded-2xl glass p-3 flex items-center gap-2">
                  <Brain className="size-5 text-violet" /><span className="text-sm font-medium">AI online</span>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 2: AGENDA ============ */
export function S2_Agenda() {
  const c = useSlideContent("s2");
  const items = arr(c.items);
  const themes = ["cyan", "violet", "emerald", "amber", "primary", "rose"];
  
  // Maps the 12 agenda items to their starting slide index in the presentation
  const targetIndices = [2, 3, 4, 5, 7, 9, 13, 15, 16, 20, 21, 22];

  const handleNavigate = (index: number) => {
    const target = targetIndices[index];
    if (target !== undefined) {
      window.dispatchEvent(new CustomEvent("go-slide", { detail: target }));
    }
  };

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      
      <div className="mt-16 flex-1 flex flex-col justify-center">
        <motion.div variants={item} className="grid grid-cols-3 gap-8 w-full">
          {items.map((t, i) => {
            const theme = themes[i % themes.length];
            return (
              <motion.div key={`${t}-${i}`} variants={pop} whileHover={{ y: -8, scale: 1.03 }}
                onClick={() => handleNavigate(i)}
                className={`glass rounded-3xl p-8 flex items-center gap-6 group border-b-[8px] border-${theme} relative overflow-hidden shadow-2xl cursor-pointer`}>
                <div className={`absolute inset-0 bg-${theme}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`absolute -right-8 -bottom-8 size-32 rounded-full bg-${theme}/10 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700`} />
                
                <div className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-${theme}/20 text-${theme} font-display text-3xl font-extrabold shadow-sm group-hover:-rotate-12 transition-transform duration-300 relative z-10`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                
                <div className="text-2xl font-bold text-foreground/90 leading-tight relative z-10">
                  {t}
                </div>
                
                <div className={`ml-auto size-12 rounded-full bg-${theme}/10 flex shrink-0 items-center justify-center text-${theme} opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10`}>
                  <ArrowRight className="size-6" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 3: INTRODUCTION ============ */
export function S3_Intro() {
  const c = useSlideContent("s3");
  const featureIcons = [TrendingUp, BellRing, Bot, Layers];
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      
      <div className="mt-12 flex flex-col gap-10 flex-1 justify-center">
        {/* Top: Massive Tagline */}
        <motion.div variants={item} className="text-center">
          <h2 className="text-5xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan via-violet to-emerald pb-4">
            {str(c.tagline)}
          </h2>
          <p className="mt-6 text-3xl leading-snug text-muted-foreground max-w-5xl mx-auto font-medium">
            {str(c.description)}
          </p>
        </motion.div>

        {/* Bottom: 4 Core Features laid out horizontally */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          {arr(c.coreFeatures).map((feat, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            const colors = [
              "from-cyan/20 to-transparent border-cyan",
              "from-violet/20 to-transparent border-violet",
              "from-emerald/20 to-transparent border-emerald",
              "from-amber/20 to-transparent border-amber"
            ];
            const iconColors = ["text-cyan", "text-violet", "text-emerald", "text-amber"];
            
            return (
              <motion.div key={i} variants={pop} whileHover={{ y: -8 }} transition={{ delay: i * 0.1 }}
                className={`glass rounded-3xl p-8 flex flex-col items-center justify-center text-center border-t-8 shadow-xl bg-gradient-to-b ${colors[i]} relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`size-24 rounded-full flex items-center justify-center bg-background/50 shadow-inner mb-8 relative`}>
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                      className={`absolute inset-[-4px] rounded-full border border-dashed ${iconColors[i].replace('text-', 'border-')}/50`} />
                  <Icon className={`size-12 ${iconColors[i]}`} />
                </div>
                <div className="font-display text-2xl font-bold leading-tight text-foreground/90">{feat}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 4: PROBLEM ============ */
export function S4_Problem() {
  const c = useSlideContent("s4");
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-12 grid md:grid-cols-[1fr_1.5fr] gap-12 flex-1 content-center">
        {/* Left: Massive Stat */}
        <motion.div variants={pop} className="glass rounded-3xl p-10 flex flex-col justify-center items-center text-center border-b-8 border-rose-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="text-[8rem] font-display font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-rose-600">
            {str(c.statValue)}
          </motion.div>
          <div className="mt-6 text-2xl font-bold text-foreground/80 leading-snug">
            {str(c.statLabel)}
          </div>
        </motion.div>

        {/* Right: Pain Points */}
        <div className="flex flex-col justify-center gap-6">
          {arr(c.painPoints).map((point, i) => {
            const [title, desc] = String(point).split(" — ");
            return (
              <motion.div key={i} variants={fadeRight} transition={{ delay: i * 0.15 }} className="glass rounded-2xl p-6 border-l-8 border-amber flex items-start gap-5 shadow-lg relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-amber/5" />
                <div className="size-12 rounded-xl bg-amber/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="size-6 text-amber" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{title}</div>
                  <div className="mt-2 text-xl text-muted-foreground">{desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 5: OBJECTIVES ============ */
export function S5_Objectives() {
  const c = useSlideContent("s5");
  const icons = [TrendingUp, Bot, FlaskConical];
  const colors = ["cyan", "violet", "emerald"];
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-12 grid md:grid-cols-[1.5fr_1fr] gap-12 flex-1 content-center">
        {/* Left: Massive Mission */}
        <motion.div variants={item} className="flex flex-col justify-center">
          <div className="flex items-center gap-4 text-primary mb-8">
            <Sparkles className="size-8" />
            <span className="text-xl uppercase tracking-widest font-bold">The Vision</span>
          </div>
          <p className="text-5xl leading-snug font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
            {str(c.missionStatement)}
          </p>
        </motion.div>

        {/* Right: 3 Goals */}
        <div className="flex flex-col gap-6 justify-center">
          {arr(c.goals).map((goal, i) => {
             const [label, text] = String(goal).split(" — ");
             const Icon = icons[i];
             const theme = colors[i];
             return (
               <motion.div key={i} variants={pop} transition={{ delay: i * 0.1 }} className={`glass rounded-3xl p-6 border-l-8 border-${theme} flex items-center gap-6 shadow-xl relative overflow-hidden group`}>
                 <div className={`absolute inset-0 bg-${theme}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
                 <div className={`size-16 rounded-2xl bg-${theme}/20 flex items-center justify-center shrink-0`}>
                   <Icon className={`size-8 text-${theme}`} />
                 </div>
                 <div>
                   <div className={`text-xl uppercase tracking-widest text-${theme} font-bold mb-1`}>{label}</div>
                   <div className="text-2xl font-bold text-foreground/90 leading-tight">{text}</div>
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </SlideShell>
  );
}


/* ============ SLIDE 7: DASHBOARD ============ */
export function S7_Dashboard() {
  const c = useSlideContent("s7");
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-12 grid md:grid-cols-[1fr_1.8fr] gap-16 flex-1 items-center">
        <motion.div variants={item} className="space-y-12 flex flex-col justify-center">
          <p className="text-4xl text-muted-foreground leading-snug font-medium font-display">
            {str(c.intro)}
          </p>
          <div className="flex flex-col gap-8">
            {arr(c.benefits).map((b, i) => (
              <motion.div key={i} variants={fadeRight} transition={{ delay: i * 0.1 }} className="flex items-center gap-6 glass rounded-3xl p-8 border-l-8 border-cyan shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="size-16 rounded-2xl bg-cyan/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-8 text-cyan" />
                </div>
                <span className="text-3xl font-bold leading-tight">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={pop} className="glass rounded-[3rem] p-6 relative overflow-hidden flex items-center justify-center border-t-8 border-violet shadow-2xl h-[700px]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-violet/10" />
          <img src="/dashboard.png" alt="Financial Dashboard" className="w-full h-full object-cover object-top rounded-[2rem] shadow-inner relative z-10" />
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 8: FORECASTING ============ */
export function S8_Forecast() {
  const c = useSlideContent("s8");
  const steps = arr(c.steps);
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-12 grid md:grid-cols-2 gap-8 flex-1 content-center">
        <motion.div variants={item} className="glass rounded-3xl p-10 border-l-8 border-violet">
          <div className="text-xl uppercase tracking-widest text-muted-foreground font-bold">Predicts</div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {arr(c.targets).map((t, i) => (
              <motion.div key={`${t}-${i}`} variants={pop} className="rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 p-6 text-center shadow-lg">
                <div className="font-display text-3xl font-bold">{t}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 h-56 relative border-t-2 border-white/10 pt-8">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <motion.path d="M0 90 L 50 75 L 100 80 L 150 55 L 200 60 L 250 35 L 300 20"
                fill="none" stroke="url(#fg)" strokeWidth="4" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
              <motion.path d="M150 55 L 200 60 L 250 35 L 300 20"
                fill="none" stroke="oklch(0.85 0.16 210)" strokeWidth="4" strokeDasharray="6 6"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.5 }} />
              <defs>
                <linearGradient id="fg" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.78 0.2 295)" />
                  <stop offset="1" stopColor="oklch(0.85 0.16 210)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute right-4 top-10 text-lg font-bold text-cyan">— forecast</div>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-10 border-l-8 border-cyan flex flex-col justify-center">
          <div className="text-xl uppercase tracking-widest text-cyan font-bold">AI Process</div>
          <div className="mt-8 flex flex-col items-stretch gap-4">
            {steps.map((s, i) => (
              <div key={`${s}-${i}`}>
                <motion.div variants={fadeRight} whileHover={{ x: 6 }}
                  className="flex items-center gap-6 rounded-2xl bg-white/10 px-6 py-5 shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-violet/30 text-2xl font-mono font-bold shrink-0">{i + 1}</div>
                  <span className="text-2xl font-bold leading-snug">{s}</span>
                </motion.div>
                {i < steps.length - 1 && <div className="flex justify-center my-3"><ArrowDown className="size-8 text-violet" /></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 9: AI ASSISTANT ============ */
export function S9_Assistant() {
  const c = useSlideContent("s9");
  const questions = arr(c.questions);
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-12 grid md:grid-cols-2 gap-8 flex-1 content-center">
        <motion.div variants={item} className="space-y-6">
          <p className="text-3xl text-muted-foreground leading-relaxed">{str(c.intro)}</p>
          <div className="glass rounded-3xl p-8 border-l-8 border-violet">
            <div className="text-xl uppercase tracking-widest text-violet font-bold">Technologies</div>
            <div className="mt-6 flex flex-wrap gap-4">
              {arr(c.technologies).map((t, i) => (
                <motion.span key={`${t}-${i}`} variants={pop} className="rounded-2xl bg-violet/20 px-5 py-3 text-2xl text-violet font-bold">{t}</motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={pop} className="glass rounded-3xl p-8 flex flex-col h-full justify-between">
          <div className="flex items-center gap-5 pb-5 border-b-2 border-border">
            <div className="size-16 rounded-full bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
              <Bot className="size-8 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold">FinSight Assistant</div>
              <div className="text-lg text-emerald flex items-center gap-2 font-medium">
                <span className="size-3 rounded-full bg-emerald animate-pulse" /> online
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-5 flex-1">
            {questions.map((q, i) => (
              <motion.div key={`${q}-${i}`}
                initial={{ opacity: 0, x: i % 2 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.2, type: "spring" }}
                className={`max-w-[85%] rounded-3xl px-6 py-4 text-xl font-medium shadow-md ${i % 2 ? "ml-auto bg-primary text-primary-foreground rounded-br-sm" :
                    "bg-white/10 rounded-bl-sm"
                  }`}>
                {q}
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
              className="max-w-[85%] rounded-3xl rounded-bl-sm px-6 py-4 text-xl bg-white/10 flex gap-2">
              {[0, 1, 2].map((d) => (
                <motion.span key={d} className="size-3 rounded-full bg-cyan"
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }} />
              ))}
            </motion.div>
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 px-6 py-5 flex items-center gap-4 text-xl text-muted-foreground font-medium">
            <MessageSquareText className="size-6" /> Ask anything…
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 10: SCENARIO SIMULATOR ============ */
export function S10_Scenario() {
  const c = useSlideContent("s10");
  const impacts = arr(c.impacts).map(parseKV);
  const colors = ["emerald", "cyan", "amber", "violet"];
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} suffix={str(c.titleSuffix)} />
      <div className="mt-12 grid md:grid-cols-2 gap-8 flex-1 content-center">
        <motion.div variants={item} className="glass rounded-3xl p-8 border-l-8 border-cyan flex flex-col justify-center">
          <div className="text-xl uppercase tracking-widest text-cyan flex items-center gap-3 font-bold">
            <FlaskConical className="size-6" /> Simulate Scenarios
          </div>
          <div className="mt-8 space-y-6">
            {arr(c.sims).map((s, i) => (
              <motion.div key={`${s}-${i}`} variants={fadeRight} whileHover={{ x: 8 }}
                className="rounded-2xl bg-white/10 px-6 py-5 flex items-center gap-5 text-2xl font-bold shadow-lg">
                <Wand2 className="size-8 text-cyan" /> {s}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-8 border-l-8 border-violet flex flex-col justify-center">
          <div className="text-xl uppercase tracking-widest text-violet font-bold">AI calculates impact</div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {impacts.map((im, i) => {
              const col = colors[i % colors.length];
              return (
                <motion.div key={`${im.k}-${i}`} variants={pop} whileHover={{ y: -6 }}
                  className="relative rounded-3xl glass p-8 overflow-hidden shadow-xl">
                  <div className={`text-sm font-bold uppercase tracking-widest text-${col}`}>{im.k}</div>
                  <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 180 }}
                    className="mt-4 font-display text-4xl lg:text-5xl font-bold text-gradient">
                    {im.v}
                  </motion.div>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-8 -bottom-8 size-32 rounded-full border border-primary/20" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 11: NOTIFICATIONS ============ */
export function S11_Notifications() {
  const c = useSlideContent("s11");
  const alertColors = ["amber", "destructive", "amber", "violet", "cyan"];
  const flow = arr(c.flow);
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} suffix={str(c.titleSuffix)} />
      <div className="mt-12 grid md:grid-cols-2 gap-8 flex-1 content-center">
        <motion.div variants={item} className="space-y-8 flex flex-col justify-center">
          <p className="text-3xl text-muted-foreground leading-relaxed">{str(c.intro)}</p>
          <div className="space-y-6">
            {arr(c.alerts).map((a, i) => {
              const col = alertColors[i % alertColors.length];
              return (
                <motion.div key={`${a}-${i}`} variants={fadeRight}
                  className={`glass rounded-3xl p-6 flex items-center gap-6 relative overflow-hidden border-l-8 border-${col}`}>
                  <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className={`size-16 rounded-full bg-${col}/20 flex items-center justify-center shrink-0`}>
                    <BellRing className={`size-8 text-${col}`} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-foreground">{a}</div>
                    <div className="text-lg text-muted-foreground mt-1">Auto-triggered when threshold breached</div>
                  </div>
                  <span className="text-lg text-muted-foreground font-mono font-bold bg-white/5 px-4 py-2 rounded-xl">now</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-3xl p-8 border-l-8 border-emerald flex flex-col justify-center">
          <div className="text-xl uppercase tracking-widest text-emerald font-bold">Workflow</div>
          <div className="mt-8 flex flex-col items-stretch gap-4">
            {flow.map((f, i) => (
              <div key={`${f}-${i}`}>
                <motion.div variants={pop}
                  className="rounded-2xl bg-gradient-to-r from-cyan/15 to-violet/15 border-2 border-border px-8 py-6 text-center font-display text-3xl font-bold shadow-lg">
                  {f}
                </motion.div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center my-3">
                    <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}>
                      <ArrowDown className="size-10 text-cyan" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 12: TECH STACK ============ */
export function S12_Stack() {
  const c = useSlideContent("s12");
  const groups = arr(c.groups).map(parseGroup);
  const colors = ["cyan", "violet", "emerald"];
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-8 flex flex-col items-center justify-center flex-1 w-full max-w-6xl mx-auto relative">
        {groups.map((g, i) => {
          const col = colors[i % colors.length];
          return (
            <motion.div key={`${g.t}-${i}`} variants={item} className="w-full flex flex-col items-center">
              <motion.div variants={pop} whileHover={{ scale: 1.02 }}
                className={`glass w-full rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 border-l-[12px] shadow-2xl relative group`} 
                style={{ borderLeftColor: `var(--${col})` }}>
                
                <div className={`absolute inset-0 bg-${col}/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]`} />
                
                <div className={`md:w-1/3 w-full flex flex-col justify-center text-center md:text-left`}>
                  <div className={`text-3xl font-display font-extrabold uppercase tracking-widest text-${col}`}>
                    {g.t}
                  </div>
                  <div className="text-muted-foreground font-medium mt-2 text-lg uppercase tracking-widest">System Layer</div>
                </div>

                <div className="md:w-2/3 w-full flex flex-wrap justify-center md:justify-start gap-4">
                  {g.items.map((it, j) => (
                    <span key={`${it}-${j}`}
                      className={`rounded-2xl bg-${col}/15 text-${col} px-5 py-2.5 text-xl font-bold border border-${col}/20 shadow-sm transition-transform hover:-translate-y-1`}>
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {i < groups.length - 1 && (
                <div className="my-4 text-muted-foreground/40 flex flex-col items-center animate-pulse">
                  <ArrowDown className="size-10" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 13: FUTURE WORK ============ */
export function S13_Future() {
  const c = useSlideContent("s13");
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-8 grid md:grid-cols-2 gap-6 flex-1 content-center">
        {arr(c.phases).map((f, i) => (
          <motion.div key={`${f}-${i}`} variants={pop} whileHover={{ scale: 1.02 }}
            className="glass rounded-3xl p-6 flex flex-col justify-center gap-4 border-l-[10px] border-cyan shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 text-cyan mb-1">
              <Rocket className="size-8" />
              <div className="text-xl uppercase tracking-[0.2em] font-bold">Post-V1 Target</div>
            </div>
            <div className="font-display text-3xl leading-tight font-bold text-foreground">
              {f}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 14: CONCLUSION ============ */
export function S14_Conclusion() {
  const c = useSlideContent("s14");
  const icons = [Layers, TrendingUp, BellRing, Users, ShieldCheck, Database];
  const colors = ["cyan", "emerald", "amber", "violet", "rose", "primary"];
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-8 grid md:grid-cols-2 gap-6 flex-1 content-center">
        {arr(c.wins).map((w, i) => {
          const Icon = icons[i % icons.length];
          const col = colors[i % colors.length];
          return (
            <motion.div key={`${w}-${i}`} variants={pop} whileHover={{ scale: 1.03 }}
              className={`glass rounded-3xl p-6 flex items-center gap-6 border-t-[8px] border-${col} shadow-2xl relative overflow-hidden group`}>
              <div className={`absolute inset-0 bg-${col}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.2 }}
                className={`flex size-16 items-center justify-center rounded-2xl bg-${col}/15 shrink-0`}>
                <Icon className={`size-8 text-${col}`} />
              </motion.div>
              <div className="font-display text-3xl font-bold leading-tight">{w}</div>
            </motion.div>
          );
        })}
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 15: DEMO ============ */
export function S15_Demo() {
  const c = useSlideContent("s15");
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <motion.p variants={item} className="mt-8 text-3xl text-muted-foreground font-medium">{str(c.intro)}</motion.p>
      <div className="mt-16 flex-1 flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
          
          <motion.a href={str(c.videoLink)} target="_blank" rel="noopener noreferrer" variants={pop} whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-[3rem] p-10 flex flex-col items-center text-center group border-b-[10px] border-cyan shadow-2xl relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="size-28 rounded-[2rem] bg-cyan/15 flex items-center justify-center text-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
              <Play className="size-14 fill-current ml-2" />
            </div>
            <div className="font-display text-4xl font-bold leading-tight mb-4">{str(c.videoLabel)}</div>
            <div className="text-xl text-cyan font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              View <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

          <motion.a href={str(c.githubLink)} target="_blank" rel="noopener noreferrer" variants={pop} whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-[3rem] p-10 flex flex-col items-center text-center group border-b-[10px] border-violet shadow-2xl relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="size-28 rounded-[2rem] bg-violet/15 flex items-center justify-center text-violet mb-8 group-hover:scale-110 transition-transform duration-500">
              <Code2 className="size-14" />
            </div>
            <div className="font-display text-4xl font-bold leading-tight mb-4">{str(c.githubLabel)}</div>
            <div className="text-xl text-violet font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Explore <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

          <motion.a href={str(c.demoLink)} target="_blank" rel="noopener noreferrer" variants={pop} whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-[3rem] p-10 flex flex-col items-center text-center group border-b-[10px] border-emerald shadow-2xl relative overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="size-28 rounded-[2rem] bg-emerald/15 flex items-center justify-center text-emerald mb-8 group-hover:scale-110 transition-transform duration-500">
              <Globe className="size-14" />
            </div>
            <div className="font-display text-4xl font-bold leading-tight mb-4">{str(c.demoLabel)}</div>
            <div className="text-xl text-emerald font-bold uppercase tracking-widest flex items-center gap-2 mt-auto">
              Launch <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>

        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 16: THANK YOU ============ */
export function S16_Thanks() {
  const c = useSlideContent("s16");
  return (
    <SlideShell>
      <div className="flex h-full items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <motion.div variants={pop} className="mx-auto mb-12 relative size-48">
            <div className="absolute inset-0 rounded-full glass pulse-ring" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan to-violet flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)]">
              <Sparkles className="size-20 text-white" />
            </div>
          </motion.div>
          <motion.h1 variants={item} className="font-display text-[12rem] font-bold leading-none mb-4">
            Thank <span className="text-gradient">You</span>
          </motion.h1>
          <motion.p variants={item} className="mt-8 text-5xl text-muted-foreground font-medium mb-12">Questions?</motion.p>
          
          <motion.div variants={item} className="flex flex-col gap-6 items-center w-full mt-8">
            <div className="inline-flex items-center gap-4 rounded-full glass px-10 py-5 text-2xl font-bold border-white/20">
              <Sparkles className="size-8 text-cyan" /> {str(c.tagline)}
            </div>
            
            <motion.a href={`mailto:${str(c.contactEmail)}`} whileHover={{ scale: 1.05 }}
              className="group relative mt-4 inline-flex items-center gap-6 rounded-[2rem] glass px-12 py-6 text-3xl font-display font-bold border border-emerald/30 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-x-full top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-emerald to-transparent group-hover:animate-[shimmer_2s_infinite]" />
              <div className="size-16 rounded-full bg-emerald/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="size-8 text-emerald" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg text-emerald uppercase tracking-widest font-bold">Let's Connect</span>
                <span className="text-foreground tracking-tight">{str(c.contactEmail)}</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 17: TARGET CUSTOMERS ============ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  briefcase: Briefcase,
  calculator: Calculator,
  users: Users,
  rocket: Rocket,
};

function CustomerCard({
  icon,
  title,
  profile,
  profileLabel = "Profile",
  pains,
  benefits,
  highlight,
  badge,
  delay = 0,
  isRevealed = true,
  onReveal,
  theme,
}: {
  icon: string;
  title: string;
  profile: string[];
  profileLabel?: string;
  pains: string[];
  benefits: string[];
  highlight?: string;
  badge?: string;
  delay?: number;
  isRevealed?: boolean;
  onReveal?: () => void;
  theme?: "cyan" | "violet" | "emerald" | "amber" | "primary";
}) {
  const Icon = iconMap[icon] ?? Briefcase;
  const t = theme || "cyan";
  return (
    <motion.div
      variants={pop}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ delay }}
      className="glass rounded-[2rem] p-8 flex flex-col gap-6 relative overflow-hidden group h-full"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${t}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-background/60 backdrop-blur-xl"
            onClick={onReveal}
          >
            <Icon className={`size-14 text-${t} mb-4 opacity-40`} />
            <div className="font-display text-2xl font-semibold opacity-60 text-center px-4">{title}</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/10 px-5 py-2.5 rounded-full">
              <MousePointerClick className="size-4" /> Click to reveal
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-5 w-full">
        <div className={`size-20 rounded-3xl flex items-center justify-center bg-${t}/15 text-${t} shrink-0`}>
          <Icon className={`size-10`} />
        </div>
        <div className={`text-3xl font-display font-bold text-${t}`}>{title}</div>
      </div>

      {badge && (
        <motion.div variants={pop} className="relative inline-flex items-center gap-2 self-start rounded-full bg-violet/20 px-4 py-2 text-lg font-bold text-violet">
          <Sparkles className="size-5" /> {badge}
        </motion.div>
      )}

      <div className="flex flex-col gap-8 w-full mx-auto mt-8 flex-1">
        <div className="relative space-y-3">
          <div className="text-xl uppercase tracking-widest text-muted-foreground text-left font-bold">{profileLabel}</div>
          <ul className="space-y-3">
            {profile.map((p, i) => (
              <li key={i} className="flex items-start gap-4 text-2xl font-bold text-foreground/90 text-left">
                <span className="mt-3 size-2.5 rounded-full bg-primary/70 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {pains.length > 0 && (
          <div className="relative space-y-3">
            <div className="text-xl uppercase tracking-widest text-amber text-left font-bold">Pain Points</div>
            <ul className="space-y-3">
              {pains.map((p, i) => (
                <li key={i} className="flex items-start gap-4 text-2xl font-bold text-foreground/80 text-left">
                  <span className="mt-3 size-2.5 rounded-full bg-amber shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {benefits.length > 0 && (
          <div className="relative space-y-3">
            <div className="text-xl uppercase tracking-widest text-emerald text-left font-bold">Benefits</div>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-4 text-2xl font-bold text-foreground/80 text-left">
                  <CheckCircle2 className="mt-1 size-6 text-emerald shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {highlight && (
        <motion.div variants={pop} className={`relative mt-auto w-full text-center rounded-2xl bg-${t}/10 border border-${t}/20 px-6 py-4 text-2xl font-bold leading-snug`}>
          {highlight}
        </motion.div>
      )}
    </motion.div>
  );
}

export function S17_TargetCustomers() {
  const c = useSlideContent("s17");
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        if (revealStep < 3) {
          e.stopPropagation();
          e.stopImmediatePropagation();
          setRevealStep(s => s + 1);
        }
      }
    };
    window.addEventListener("keydown", handleKey, { capture: true });
    return () => window.removeEventListener("keydown", handleKey, { capture: true });
  }, [revealStep]);

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <motion.p variants={item} className="mt-6 max-w-4xl text-2xl font-bold text-muted-foreground">
        {str(c.subtitle)}
      </motion.p>

      <div className="mt-12 flex-1 grid grid-cols-3 gap-8 auto-rows-fr">
        <CustomerCard
          icon={str(c.c1Icon)}
          title={str(c.c1Title)}
          profile={arr(c.c1Profile)}
          pains={arr(c.c1Pains)}
          benefits={arr(c.c1Benefits)}
          highlight={str(c.c1Highlight)}
          isRevealed={revealStep >= 1}
          onReveal={() => setRevealStep(Math.max(revealStep, 1))}
          theme="cyan"
        />
        <CustomerCard
          icon={str(c.c2Icon)}
          title={str(c.c2Title)}
          profile={arr(c.c2Profile)}
          pains={arr(c.c2Pains)}
          benefits={arr(c.c2Benefits)}
          isRevealed={revealStep >= 2}
          onReveal={() => setRevealStep(Math.max(revealStep, 2))}
          theme="violet"
        />
        <CustomerCard
          icon={str(c.c3Icon)}
          title={str(c.c3Title)}
          profile={arr(c.c3Profile)}
          pains={arr(c.c3Pains)}
          benefits={arr(c.c3Benefits)}
          badge={str(c.c3Badge)}
          isRevealed={revealStep >= 3}
          onReveal={() => setRevealStep(Math.max(revealStep, 3))}
          theme="emerald"
        />
      </div>
    </SlideShell>
  );
}

export function TwoColumnFeature({ id }: { id: SlideId }) {
  const c = useSlideContent(id);

  let Icon1 = BarChart3;
  let Icon2 = Briefcase;
  if (id === "s19") {
    Icon1 = Database;
    Icon2 = Layers;
  } else if (id === "s20") {
    Icon1 = Briefcase;
    Icon2 = Users;
  }

  const titleClass = "text-3xl font-display font-bold mb-6 text-center";
  const textClass = "text-xl leading-relaxed";
  const iconContainer = "size-28 rounded-3xl mb-8 mx-auto";
  const iconSvg = "size-14";
  const gridClass = "grid md:grid-cols-2 gap-16 w-full max-w-6xl mx-auto mt-12";
  const cardClass = "glass rounded-[3rem] p-16 relative overflow-hidden group flex flex-col justify-center min-h-[480px]";

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown={id === "s18" || id === "s20"}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-8 flex flex-col flex-1">
        {str(c.intro) && (
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{str(c.intro)}</p>
        )}
        <div className={gridClass}>
          <motion.div variants={item} className={cardClass}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={`${iconContainer} flex items-center justify-center bg-cyan/15 text-cyan`}>
              <Icon1 className={iconSvg} />
            </div>
            <div className={`${titleClass} text-cyan`}>{str(c.c1Title)}</div>
            {str(c.c1Desc) && <div className="text-base text-muted-foreground mb-6 text-center">{str(c.c1Desc)}</div>}
            <ul className="space-y-4 mt-2 w-full max-w-[80%] mx-auto">
              {arr(c.c1List).map((li, i, a) => (
                <li key={i} className={`flex items-start gap-4 ${a.length === 1 ? 'justify-center text-center' : 'justify-start text-left'} ${textClass}`}>
                  {a.length > 1 && <CheckCircle2 className={`size-6 mt-0.5 text-cyan shrink-0`} />}
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={item} className={cardClass}>
            <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={`${iconContainer} flex items-center justify-center bg-violet/15 text-violet`}>
              <Icon2 className={iconSvg} />
            </div>
            <div className={`${titleClass} text-violet`}>{str(c.c2Title)}</div>
            {str(c.c2Desc) && <div className="text-base text-muted-foreground mb-6 text-center">{str(c.c2Desc)}</div>}
            <ul className="space-y-4 mt-2 w-full max-w-[80%] mx-auto">
              {arr(c.c2List).map((li, i, a) => (
                <li key={i} className={`flex items-start gap-4 ${a.length === 1 ? 'justify-center text-center' : 'justify-start text-left'} ${textClass}`}>
                  {a.length > 1 && <CheckCircle2 className={`size-6 mt-0.5 text-violet shrink-0`} />}
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

export const S18_FinancialRecords = () => <TwoColumnFeature id="s18" />;
export const S19_CSVImport = () => <TwoColumnFeature id="s19" />;
export const S20_Workspaces = () => <TwoColumnFeature id="s20" />;

export function S21_AdminDashboard() {
  const c = useSlideContent("s21");

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <div className="grid md:grid-cols-2 gap-16 items-center h-full pt-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-10">
          <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
          <motion.p variants={item} className="text-2xl text-muted-foreground leading-relaxed">
            {str(c.intro)}
          </motion.p>
          <motion.div variants={pop} className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mt-4">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald"></span>
            </span>
            <span className="text-xl font-bold">{str(c.statusLabel)}: {str(c.statusValue)}</span>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-5 justify-center h-full">
            <motion.div variants={fadeRight} className="glass p-5 rounded-3xl flex items-center gap-6">
              <div className="size-20 rounded-2xl flex items-center justify-center bg-cyan/15 shrink-0">
                 <Globe className="size-10 text-cyan" />
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan leading-tight mb-2">{str(c.f1Title)}</div>
                <div className="text-xl text-muted-foreground leading-snug">{str(c.f1Desc)}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="glass p-5 rounded-3xl flex items-center gap-6">
              <div className="size-20 rounded-2xl flex items-center justify-center bg-emerald/15 shrink-0">
                 <TrendingUp className="size-10 text-emerald" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald leading-tight mb-2">{str(c.f2Title)}</div>
                <div className="text-xl text-muted-foreground leading-snug">{str(c.f2Desc)}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="glass p-5 rounded-3xl flex items-center gap-6">
              <div className="size-20 rounded-2xl flex items-center justify-center bg-violet/15 shrink-0">
                 <Users className="size-10 text-violet" />
              </div>
              <div>
                <div className="text-2xl font-bold text-violet leading-tight mb-2">{str(c.f3Title)}</div>
                <div className="text-xl text-muted-foreground leading-snug">{str(c.f3Desc)}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="glass p-5 rounded-3xl flex items-center gap-6">
              <div className="size-20 rounded-2xl flex items-center justify-center bg-primary/15 shrink-0">
                 <Rocket className="size-10 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary leading-tight mb-2">{str(c.f4Title)}</div>
                <div className="text-xl text-muted-foreground leading-snug">{str(c.f4Desc)}</div>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="glass p-5 rounded-3xl flex items-center gap-6">
              <div className="size-20 rounded-2xl flex items-center justify-center bg-amber/15 shrink-0">
                 <Activity className="size-10 text-amber" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber leading-tight mb-2">{str(c.f5Title)}</div>
                <div className="text-xl text-muted-foreground leading-snug">{str(c.f5Desc)}</div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

export function S22_SupportTickets() {
  const c = useSlideContent("s22");

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <div className="grid md:grid-cols-2 gap-16 items-center h-full pt-8">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-12">
          <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
          <motion.p variants={item} className="text-2xl text-muted-foreground leading-relaxed">
            {str(c.intro)}
          </motion.p>
          
          <div className="flex flex-col gap-8">
            <motion.div variants={item} className="glass p-8 rounded-3xl border-l-8 border-cyan">
              <div className="flex items-center gap-4 mb-5">
                <Ticket className="size-10 text-cyan" />
                <h3 className="text-3xl font-bold">{str(c.c1Title)}</h3>
              </div>
              <ul className="space-y-4">
                {arr(c.c1List).map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl text-foreground/90 font-medium">
                    <CheckCircle2 className="size-6 text-cyan" /> {li}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={item} className="glass p-8 rounded-3xl border-l-8 border-violet">
              <div className="flex items-center gap-4 mb-5">
                <ShieldCheck className="size-10 text-violet" />
                <h3 className="text-3xl font-bold">{str(c.c2Title)}</h3>
              </div>
              <ul className="space-y-4">
                {arr(c.c2List).map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl text-foreground/90 font-medium">
                    <CheckCircle2 className="size-6 text-violet" /> {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="relative h-full flex flex-col justify-center">
          <div className="w-full glass rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-violet/5" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-3xl">Live Tickets</div>
                <div className="text-lg px-6 py-2 rounded-full bg-cyan/20 text-cyan font-bold tracking-wide uppercase">Admin View</div>
              </div>

              {/* Animated Tickets */}
              <motion.div 
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-background/90 p-6 rounded-3xl border border-white/10 shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-foreground">Bank connection error</div>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-emerald/20 text-emerald font-bold uppercase tracking-wider">Resolved</span>
                </div>
                <div className="text-lg text-muted-foreground flex items-center gap-3">
                  <MessageSquareText className="size-5" /> 4 messages
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="bg-background/90 p-6 rounded-3xl border border-white/10 relative overflow-hidden shadow-lg"
              >
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-2 bg-amber" 
                  initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ delay: 1.5, duration: 0.5 }}
                />
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-foreground">Billing discrepancy Q3</div>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-amber/20 text-amber font-bold uppercase tracking-wider">In Progress</span>
                </div>
                <div className="text-lg text-muted-foreground flex items-center gap-3">
                  <MessageSquareText className="size-5" /> 2 messages
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="bg-background/90 p-6 rounded-3xl border-2 border-cyan/40 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                 <div className="flex justify-between items-center mb-4">
                  <div className="text-xl font-bold text-foreground">Need help with Forecast</div>
                  <span className="text-sm px-4 py-1.5 rounded-full bg-cyan/20 text-cyan font-bold uppercase tracking-wider">New</span>
                </div>
                <div className="text-lg text-muted-foreground flex items-center gap-3">
                  <MessageSquareText className="size-5" /> Just now
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 23: BUSINESS MODEL CANVAS ============ */
export function S23_BMC() {
  const c = useSlideContent("s23");

  const BmcBlock = ({ title, icon, items, theme, isRow }: { title: string, icon: ReactNode, items: string[], theme: string, isRow?: boolean }) => (
    <motion.div variants={item} className={`glass rounded-3xl p-6 border-t-8 border-${theme} flex flex-col h-full bg-${theme}/5 shadow-lg`}>
      <div className={`flex items-center gap-4 text-${theme} font-bold text-2xl mb-6`}>
        {icon}
        {title}
      </div>
      <ul className={`flex-1 ${isRow ? 'flex flex-row justify-around items-center w-full' : 'space-y-4'}`}>
        {items.map((it, i) => (
          <li key={i} className={`flex items-start gap-3 text-xl font-bold text-foreground/90 ${isRow ? 'items-center text-center px-4 border-l-2 border-white/10 first:border-0' : ''}`}>
            {!isRow && <span className={`mt-2.5 size-2.5 rounded-full bg-${theme} shrink-0`} />}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-8 flex-1 grid grid-cols-5 grid-rows-[minmax(0,1fr)_auto] gap-6">
        {/* Top Half */}
        <div className="col-span-1 grid gap-6">
          <BmcBlock title="Key Partners" icon={<Briefcase className="size-8"/>} items={arr(c.partners)} theme="cyan" />
        </div>
        <div className="col-span-1 grid gap-6 grid-rows-2">
          <BmcBlock title="Key Activities" icon={<Activity className="size-8"/>} items={arr(c.activities)} theme="amber" />
          <BmcBlock title="Key Resources" icon={<Database className="size-8"/>} items={arr(c.resources)} theme="violet" />
        </div>
        <div className="col-span-1 grid gap-6">
          <BmcBlock title="Value Proposition" icon={<Sparkles className="size-8"/>} items={arr(c.valueProps)} theme="emerald" />
        </div>
        <div className="col-span-1 grid gap-6 grid-rows-2">
          <BmcBlock title="Relationships" icon={<Heart className="size-8"/>} items={arr(c.relationships)} theme="rose" />
          <BmcBlock title="Channels" icon={<Share2 className="size-8"/>} items={arr(c.channels)} theme="cyan" />
        </div>
        <div className="col-span-1 grid gap-6">
          <BmcBlock title="Cust. Segments" icon={<Users className="size-8"/>} items={arr(c.segments)} theme="amber" />
        </div>

        {/* Bottom Half */}
        <div className="col-span-2 col-start-1 h-40">
          <BmcBlock title="Cost Structure" icon={<AlertTriangle className="size-8"/>} items={arr(c.cost)} theme="rose" isRow />
        </div>
        <div className="col-span-3 col-start-3 h-40">
          <BmcBlock title="Revenue Streams" icon={<DollarSign className="size-8"/>} items={arr(c.revenue)} theme="emerald" isRow />
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 24: INVESTMENT ECOSYSTEM ============ */
export function S24_Ecosystem() {
  const c = useSlideContent("s24");
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <motion.p variants={item} className="mt-6 max-w-4xl text-2xl font-bold text-muted-foreground">
        {str(c.intro)}
      </motion.p>
      
      <div className="mt-12 grid grid-cols-5 gap-8 flex-1">
        {/* Left Column: Ecosystem (3 columns wide) */}
        <div className="col-span-3 grid grid-rows-2 gap-8">
          <motion.div variants={fadeRight} className="glass rounded-[2.5rem] p-8 border-l-[8px] border-cyan flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6 text-cyan">
              <Globe className="size-10" />
              <div className="text-2xl font-bold uppercase tracking-widest">Target Organizations</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {arr(c.orgs).map((org, i) => (
                <div key={i} className="flex items-center gap-3 text-xl font-bold text-foreground/90">
                  <span className="size-2.5 rounded-full bg-cyan shrink-0" />
                  {org}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeRight} className="glass rounded-[2.5rem] p-8 border-l-[8px] border-emerald flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6 text-emerald">
              <Briefcase className="size-10" />
              <div className="text-2xl font-bold uppercase tracking-widest">Strategic Partners</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {arr(c.partners).map((p, i) => (
                <div key={i} className="flex items-center gap-3 text-xl font-bold text-foreground/90">
                  <span className="size-2.5 rounded-full bg-emerald shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Scenario Simulator Use Case (2 columns wide) */}
        <motion.div variants={pop} className="col-span-2 glass rounded-[3rem] p-10 border-t-[10px] border-violet shadow-2xl relative overflow-hidden flex flex-col justify-center">
           <div className="absolute inset-0 bg-gradient-to-br from-violet/10 to-cyan/5" />
           <div className="relative z-10 flex flex-col items-center text-center">
             <div className="size-20 rounded-3xl bg-violet/20 text-violet flex items-center justify-center mb-6">
                <FlaskConical className="size-10" />
             </div>
             <h3 className="text-3xl font-display font-bold text-foreground mb-6">{str(c.scenarioTitle)}</h3>
             <p className="text-2xl leading-relaxed text-muted-foreground font-medium">
               {str(c.scenarioDesc)}
             </p>
             <div className="mt-8 px-6 py-3 rounded-full bg-violet/10 border border-violet/20 text-violet text-lg font-bold uppercase tracking-widest flex items-center gap-2">
               <Bot className="size-5" /> AI Optimal Match
             </div>
           </div>
        </motion.div>

      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 25: COMPETITORS ============ */
export function S25_Competitors() {
  const c = useSlideContent("s25");

  const CompCard = ({ name, desc, drawbacks, theme }: { name: string, desc: string, drawbacks: string[], theme: string }) => (
    <motion.div variants={item} className={`glass rounded-[2rem] p-8 border-t-8 border-${theme} flex flex-col h-full relative overflow-hidden group`}>
      <div className={`absolute inset-0 bg-${theme}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className={`text-3xl font-display font-bold text-${theme} mb-4`}>{name}</div>
      <p className="text-xl text-muted-foreground font-medium mb-6">{desc}</p>
      <div className="mt-auto space-y-4">
        {drawbacks.map((d, i) => (
          <div key={i} className="flex items-start gap-3 text-lg font-bold text-foreground/80">
            <AlertTriangle className={`size-6 text-${theme} shrink-0 mt-0.5`} />
            <span>{d}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>} scaleDown>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      
      <div className="mt-12 flex flex-col gap-8 flex-1">
        <div className="grid grid-cols-4 gap-6">
          <CompCard name={str(c.c1Name)} desc={str(c.c1Desc)} drawbacks={arr(c.c1Drawbacks)} theme="cyan" />
          <CompCard name={str(c.c2Name)} desc={str(c.c2Desc)} drawbacks={arr(c.c2Drawbacks)} theme="emerald" />
          <CompCard name={str(c.c3Name)} desc={str(c.c3Desc)} drawbacks={arr(c.c3Drawbacks)} theme="amber" />
          <CompCard name={str(c.c4Name)} desc={str(c.c4Desc)} drawbacks={arr(c.c4Drawbacks)} theme="rose" />
        </div>

        <motion.div variants={pop} className="mt-4 glass rounded-[3rem] p-10 border-[4px] border-primary shadow-[0_0_40px_rgba(139,92,246,0.3)] relative overflow-hidden flex flex-col justify-center items-center text-center">
           <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-violet/10 to-emerald/10" />
           <div className="relative z-10 flex items-center gap-6">
             <div className="size-20 rounded-3xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                <Sparkles className="size-10 text-primary-foreground" />
             </div>
             <div className="text-left">
               <div className="text-2xl uppercase tracking-widest text-primary font-bold mb-2">The FinSight Advantage</div>
               <h3 className="text-3xl font-display font-bold leading-relaxed text-foreground max-w-5xl">{str(c.finsightAdvantage)}</h3>
             </div>
           </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ============ SLIDE 26: THE TEAM ============ */
export function S26_Team() {
  const c = useSlideContent("s26");
  const names = arr(c.teamNames);
  const links = arr(c.teamLinks);
  const colors = ["cyan", "violet", "emerald", "amber", "rose", "primary"];
  
  return (
    <SlideShell kicker={<Kicker>{str(c.kicker)}</Kicker>}>
      <SectionTitle pre={str(c.titlePre)} accent={str(c.titleAccent)} />
      <div className="mt-4 text-3xl text-muted-foreground font-medium text-center max-w-4xl mx-auto">
        {str(c.intro)}
      </div>
      <div className="mt-12 grid grid-cols-3 gap-10 flex-1 content-center px-8">
        {names.map((name, i) => {
          const link = links[i] || "#";
          const col = colors[i % colors.length];
          return (
            <motion.a href={link} target="_blank" rel="noopener noreferrer" key={name} variants={pop} whileHover={{ y: -8, scale: 1.05 }}
              className={`glass rounded-[2rem] p-8 flex flex-col items-center text-center border-b-[8px] shadow-2xl relative overflow-hidden group cursor-pointer`}
              style={{ borderBottomColor: `var(--${col})` }}>
              <div className={`absolute inset-0 bg-${col}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`size-24 rounded-[2rem] bg-${col}/15 flex items-center justify-center text-${col} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <LinkedinIcon className="size-12" />
              </div>
              
              <h3 className="text-3xl font-display font-bold leading-tight tracking-wide mb-3">{name}</h3>
              <div className={`text-lg text-${col} font-bold uppercase tracking-widest flex items-center gap-2 mt-auto opacity-80 group-hover:opacity-100 transition-opacity`}>
                Connect <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </SlideShell>
  );
}

/* registry */
export const SLIDES: { id: SlideId; title: string; C: () => ReactNode }[] = [
  // Omar
  { id: "s1", title: "Title", C: S1_Title },
  { id: "s2", title: "Agenda", C: S2_Agenda },
  { id: "s3", title: "Introduction", C: S3_Intro },
  { id: "s4", title: "Problem Statement", C: S4_Problem },
  { id: "s5", title: "Objectives", C: S5_Objectives },
  // Gamal
  { id: "s23", title: "Business Model Canvas", C: S23_BMC },
  { id: "s24", title: "Investment Ecosystem", C: S24_Ecosystem },
  { id: "s25", title: "Competitors", C: S25_Competitors },
  { id: "s17", title: "Target Customers", C: S17_TargetCustomers },
  // Carol
  { id: "s7", title: "Dashboard", C: S7_Dashboard },
  { id: "s8", title: "AI Forecasting", C: S8_Forecast },
  { id: "s11", title: "Notifications", C: S11_Notifications },
  // Gamal
  { id: "s10", title: "Scenario Simulator", C: S10_Scenario },
  // Nancy
  { id: "s18", title: "Financial Records", C: S18_FinancialRecords },
  { id: "s19", title: "CSV Data Import", C: S19_CSVImport },
  { id: "s20", title: "Workspaces", C: S20_Workspaces },
  // Fatma
  { id: "s21", title: "Admin Dashboard", C: S21_AdminDashboard },
  { id: "s22", title: "Customer Support", C: S22_SupportTickets },
  // Mosad
  { id: "s9", title: "AI Assistant", C: S9_Assistant },
  { id: "s12", title: "Tech Stack", C: S12_Stack },
  { id: "s13", title: "Future Work", C: S13_Future },
  { id: "s14", title: "Conclusion", C: S14_Conclusion },
  // Gamal
  { id: "s15", title: "Demo", C: S15_Demo },
  { id: "s26", title: "Team", C: S26_Team },
  { id: "s16", title: "Thank You", C: S16_Thanks },
];

export { AnimatePresence };

