"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Trophy, Compass, ShieldCheck, HelpCircle, PhoneCall, FileText, Lock } from "lucide-react";
import LogoTravel from "@/components/ui/LogoTravel";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: null },
    { name: "I Tornei", href: "/tornei", icon: Trophy },
    { name: "L'Esperienza Como", href: "/esperienza-como", icon: Compass },
    { name: "Formula per Società", href: "/formula-societa", icon: ShieldCheck },
    { name: "Chi Siamo", href: "/chi-siamo", icon: HelpCircle },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-light shadow-md transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Ufficiale Sportessence Travel */}
          <Link href="/" className="flex items-center py-2 group hover:opacity-95 transition-opacity" title="Sportessence Travel">
            <LogoTravel variant="light" size="md" />
          </Link>

          {/* Navigazione Desktop - Stile Sportessence (testo bianco, uppercase, hover evidenziato) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wider transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? "text-white border-white scale-105"
                      : "text-white/90 hover:text-white border-transparent hover:border-white/60 hover:scale-105"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Azioni */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/393420394661?text=Buongiorno%20Sportessence%20Travel,%20vorrei%20informazioni%20sui%20tornei%20di%20calcio%20sul%20Lago%20di%20Como"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-colors"
              title="Contattaci su WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <Link
              href="/preventivo"
              className="bg-fox hover:bg-[#d15012] text-white text-xs uppercase font-extrabold tracking-wider py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>Richiedi Bando</span>
            </Link>

            <Link
              href="/admin"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              title="Area Riservata Admin"
            >
              <Lock className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/preventivo"
              className="bg-fox text-white text-xs font-bold px-3 py-2 rounded-md shadow-sm"
            >
              Bando
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/15 transition-colors focus:outline-none"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-blue-deep border-t border-cyan-800 shadow-2xl px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-blue-light text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 text-cyan-300" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/preventivo"
              className="btn-primary w-full text-center justify-center text-sm py-3"
            >
              <FileText className="w-4 h-4" />
              Richiedi Preventivo B2B
            </Link>
            <a
              href="https://wa.me/393420394661"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Chat Rapida su WhatsApp
            </a>
            <Link
              href="/admin"
              className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/10 text-white/80 text-xs font-semibold hover:bg-white/20 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              Accesso Area Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
