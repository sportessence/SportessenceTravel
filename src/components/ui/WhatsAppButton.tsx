"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/393420394661?text=Buongiorno%20Sportessence%20Travel!%20Sono%20un%20dirigente%20sportivo%20e%20vorrei%20informazioni%20sui%20vostri%20tornei%20di%20calcio%20sul%20Lago%20di%20Como.";

  return (
    <aside aria-label="Supporto rapido WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp per info tornei"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0 animate-bounce" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Parla con noi su WhatsApp
        </span>
      </a>
    </aside>
  );
}
