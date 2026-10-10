"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Trophy, Compass, ShieldCheck, HelpCircle, PhoneCall, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/imgs/logo.png"
                alt="Sportessence Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-blue-deep leading-none">
                SPORTESSENCE
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-fox uppercase">
                  TRAVEL
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-light"></span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                  Tornei Lago di Como
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-blue-light border-blue-light"
                      : "text-blue-deep hover:text-blue-light border-transparent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/393420394661?text=Buongiorno%20Sportessence%20Travel,%20vorrei%20informazioni%20sui%20tornei%20di%20calcio%20sul%20Lago%20di%20Como"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-gray-200 text-gray-700 hover:text-green-600 hover:border-green-500 transition-colors"
              title="Contattaci su WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <Link
              href="/preventivo"
              className="btn-primary text-xs uppercase tracking-wider py-2.5 px-4"
            >
              <FileText className="w-4 h-4" />
              Richiedi Preventivo B2B
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/preventivo"
              className="bg-fox text-white text-xs font-bold px-3 py-2 rounded-md shadow-sm"
            >
              Preventivo
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-deep hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-light"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-cyan-50 text-blue-light font-bold"
                      : "text-blue-deep hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 text-blue-light" />}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/preventivo"
              className="btn-primary w-full text-center justify-center text-sm"
            >
              <FileText className="w-4 h-4" />
              Richiedi Preventivo / Bando Torneo
            </Link>
            <a
              href="https://wa.me/393420394661?text=Buongiorno%20Sportessence%20Travel,%20vorrei%20informazioni%20sui%20tornei%20di%20calcio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-50 text-green-700 font-bold text-sm border border-green-200"
            >
              <PhoneCall className="w-4 h-4" />
              Parla con il Referente su WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
