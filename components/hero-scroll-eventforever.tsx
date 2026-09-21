"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Sparkles, Calendar, ShieldCheck, ArrowRight } from "lucide-react";

export function HeroScrollEventForever() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] text-[#141414] pt-8">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B08D57]/10 text-[#B08D57] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#B08D57]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zirakpur, Chandigarh Tricity & Surrounding Regions</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#141414] leading-[1.1] max-w-4xl">
              Weddings and celebrations, <br className="hidden md:block" />
              <span className="text-[#B08D57]">planned beautifully.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] max-w-2xl leading-relaxed">
              Bespoke wedding planning, mandap decor, and intimate gatherings crafted with calm precision across Punjab and Chandigarh Tricity.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141414] text-white font-medium text-sm hover:bg-[#2A2A2A] transition-colors shadow-lg"
              >
                <span>Plan your event</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#141414] font-medium text-sm border border-[#E8E6E1] hover:border-[#141414] transition-colors shadow-sm"
              >
                View our work
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-[#6B6B6B]">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B08D57]" /> Complete On-Ground Support
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#B08D57]" /> Punctual Execution
              </span>
            </div>
          </div>
        }
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
            alt="Event Forever Luxury Celebration"
            height={720}
            width={1400}
            className="w-full h-full object-cover rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B08D57] font-semibold">Signature Event</p>
              <h3 className="text-lg md:text-xl font-medium">Bespoke Glasshouse Wedding & Mandap</h3>
            </div>
            <span className="px-3 py-1 text-xs rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              100% Curated Decor
            </span>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
