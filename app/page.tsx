"use client";

import React, { useState, useCallback, useEffect, memo } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    MessageSquare,
    CalendarCheck,
    Zap,
    Target,
    Bot,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Clock,
    Shield,
    Send,
    Mail,
    MapPin,
    Star,
    Plus,
    Minus,
    Users,
    Headphones,
    TrendingUp,
    XCircle,
    RefreshCw,
} from "lucide-react";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { SiteLogo } from "@/components/site-logo";
import { SocialProofBanner } from "@/components/social-proof-banner";

export default function HomePage() {
    return (
          <main className="min-h-screen bg-[#0A0A0F] text-[#F0F0F5]">
                <Navigation />
                <SocialProofBanner />
                <section className="py-16 md:py-24 px-4">
                        <div className="max-w-4xl mx-auto">
                                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                              On remplit votre agenda de{" "}
                                              <span className="text-[#3B82F6]">clients qualifies</span>span>
                                  </h1>h1>
                                  <p className="text-lg text-[#94A3B8] mb-8 max-w-2xl">
                                              Purlead genere des leads en automatique pour les entreprises locales grace aux Facebook Ads et a un systeme de qualification IA.
                                  </p>p>
                                  <LiquidGlassButton size="lg">
                                              Obtenir des leads maintenant
                                  </LiquidGlassButton>LiquidGlassButton>
                        </div>div>
                </section>section>
          </main>main>
        );
}

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
      { label: "Notre approche", id: "about" },
      { label: "Comment ca marche", id: "process" },
      { label: "Comparatif", id: "comparatif" },
      { label: "Garantie", id: "garantie" },
      { label: "FAQ", id: "faq" },
        ];
  
    return (
          <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
                <div className="max-w-4xl mx-auto">
                        <div className="bg-[#0A0A0F]/20 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg border border-white/[0.08] h-12 sm:h-14 md:h-16 flex items-center justify-between px-4 md:px-6">
                                  <button className="cursor-pointer">
                                              <SiteLogo size="sm" />
                                  </button>button>
                        
                                  <div className="hidden md:flex items-center gap-6">
                                    {links.map((link) => (
                          <button
                                            key={link.id}
                                            className="relative text-sm text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-300 cursor-pointer"
                                          >
                            {link.label}
                          </button>button>
                        ))}
                                  </div>div>
                        
                                  <div className="hidden md:block">
                                              <LiquidGlassButton size="sm">
                                                            Reserver un appel gratuit
                                              </LiquidGlassButton>LiquidGlassButton>
                                  </div>div>
                        
                                  <button
                                                className="md:hidden text-[#F0F0F5] cursor-pointer"
                                                onClick={() => setIsOpen(!isOpen)}
                                              >
                                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                                  </button>button>
                        </div>div>
                
                  {isOpen && (
                      <div className="md:hidden mt-2 bg-[#0A0A0F]/95 backdrop-blur-xl rounded-xl border border-white/[0.08] p-4 shadow-lg">
                        {links.map((link) => (
                                      <button
                                                        key={link.id}
                                                        className="block w-full text-left py-3 text-[#94A3B8] hover:text-[#3B82F6] transition-colors text-sm cursor-pointer"
                                                      >
                                        {link.label}
                                      </button>button>
                                    ))}
                                  <LiquidGlassButton className="w-full mt-3" size="sm">
                                                Reserver un appel gratuit
                                  </LiquidGlassButton>LiquidGlassButton>
                      </div>div>
                        )}
                </div>div>
          </nav>nav>
        );
}</main>
