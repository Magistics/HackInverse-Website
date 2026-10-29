import React, { useState, useRef, useEffect } from "react";
import { Radio, Volume2, VolumeX } from "lucide-react";

export default function EditorialTicker() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Instantiate real Stranger Things audio player
    const audio = new Audio("/audio/stranger-things-theme.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (soundEnabled) {
      audioRef.current.pause();
      setSoundEnabled(false);
    } else {
      audioRef.current.play().then(() => {
        setSoundEnabled(true);
      }).catch((err) => {
        console.warn("Audio autoplay policy prevented playback:", err);
      });
    }
  };

  const tickerItems = [
    "HACKINVERSE 1.0: SINGLE DAY OFFLINE HACKDAY",
    "ORGANIZED BY: MAGISTICS",
    "DATE: 11 OCTOBER 2026 // JIS UNIVERSITY, AGARPARA",
    "STATUS: COMPLETED // 2,703 APPLICATIONS RECEIVED",
    "146 CHECKED-IN OPERATIVES // 45 PROJECTS SUBMITTED",
    "PRIZE POOL: RS 15,000 // 1ST: TROPICAL CRUSH (RS 5,000)",
    "2ND: CHATMASALA (RS 4,000) // 3RD: DRAFT (RS 3,000)",
    "HARDWARE WINNER: CODE BREAKERZ (RS 2,000)",
    "JUDGES' SPECIAL MENTION: LOGIC FORGE (RS 1,000)",
    "OFFICIAL PLATFORM: DEVFOLIO",
    "COMMUNITY STRENGTH: 1,000+ MEMBERS",
  ];

  return (
    <div className="w-full bg-[#0a0508] border-b border-[#ff003c]/30 text-[#ede8df] text-xs font-space-mono select-none overflow-hidden relative z-40">
      <div className="flex items-center justify-between px-2 sm:px-3 md:px-6 py-1 sm:py-1.5 border-b border-white/5 bg-[#12070c]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 bg-[#ff003c]/20 border border-[#ff003c] text-[#ff003c] text-[9px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest uppercase animate-pulse">
            <Radio className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> OFFICIAL BULLETIN
          </span>
          <span className="hidden sm:inline text-zinc-400 text-[11px] tracking-wider">
            MAGISTICS ARCHIVE // HACKINVERSE 1.0 DECLASSIFIED
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-[11px]">
          <span className="hidden md:inline text-zinc-400">
            EVENT STATUS: <span className="text-emerald-400 font-bold">CONCLUDED (11 OCT 2026)</span>
          </span>
          <button
            onClick={toggleSound}
            className={`flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 border rounded-xs transition-all cursor-pointer ${
              soundEnabled
                ? "border-[#ff003c] bg-[#ff003c]/15 text-[#ff003c] shadow-[0_0_10px_rgba(255,0,60,0.4)]"
                : "border-zinc-700 bg-zinc-900/60 text-zinc-400 hover:text-white"
            }`}
            title="Toggle Stranger Things Ambient Audio Synthesizer"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ff003c] animate-pulse" />
                <span className="font-bold text-[9px] sm:text-[10px] tracking-wider text-[#ff003c]">SYNTH: ACTIVE</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] tracking-wider">SYNTH: MUTED</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="flex overflow-hidden py-1.5 bg-[#08070b]">
        <div className="flex gap-8 animate-marquee whitespace-nowrap text-[11px] tracking-widest uppercase">
          {tickerItems.concat(tickerItems).map((text, idx) => (
            <span key={idx} className="flex items-center gap-4 text-zinc-300">
              <span className="text-[#ff003c]">♦</span>
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
