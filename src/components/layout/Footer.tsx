import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Trophy, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-deep text-white pt-16 pb-12 border-t-4 border-fox">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Colonna 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image
                  src="/imgs/logo.png"
                  alt="Sportessence Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">SPORTESSENCE</span>
                <span className="block text-xs font-bold text-fox tracking-widest uppercase">TRAVEL</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Il dipartimento di Sportessence dedicato all'organizzazione di tornei giovanili d'eccellenza e soggiorni sportivi chiavi in mano sul Lago di Como.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-blue-light/40 text-xs font-semibold text-cyan-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-light" />
                Partner Ufficiale Società
              </span>
            </div>
          </div>

          {/* Colonna 2: Navigazione Rapida */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Tornei & Esperienze
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/tornei" className="hover:text-fox transition-colors flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-blue-light" />
                  Catalogo Tornei 2026
                </Link>
              </li>
              <li>
                <Link href="/tornei/como-lake-spring-cup" className="hover:text-fox transition-colors">
                  • Como Lake Spring Cup (Aprile)
                </Link>
              </li>
              <li>
                <Link href="/tornei/lario-youth-trophy" className="hover:text-fox transition-colors">
                  • Lario Youth Trophy (Maggio)
                </Link>
              </li>
              <li>
                <Link href="/tornei/summer-lake-festival" className="hover:text-fox transition-colors">
                  • Summer Lake Festival (Giugno)
                </Link>
              </li>
              <li>
                <Link href="/esperienza-como" className="hover:text-fox transition-colors">
                  • Convenzioni Battello & Famiglie
                </Link>
              </li>
              <li>
                <Link href="/formula-societa" className="hover:text-fox transition-colors">
                  • Modello B2B per Dirigenti
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Dati Istituzionali */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Sportessence ASD APS
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-light mt-0.5 flex-shrink-0" />
                <span>Via L. Mascherpa 4, 22100 Como (CO)</span>
              </li>
              <li>
                <span className="text-gray-400">P.IVA:</span> 04231980139
              </li>
              <li>
                <span className="text-gray-400">Codice Fiscale:</span> 95150810133
              </li>
              <li>
                <span className="text-gray-400">Codice SDI:</span> KRRH6B9
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/sportessence_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-fox transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-fox fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @sportessence_official
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Contatto B2B Diretto */}
          <div>
            <h4 className="text-white font-bold text-base uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Segreteria Tornei B2B
            </h4>
            <p className="text-xs text-gray-300 mb-3">
              Sei un dirigente o allenatore? Chiedi disponibilità date e bando informativo riservato:
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:sportessence.asd.aps@gmail.com"
                className="flex items-center gap-2 text-sm text-cyan-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-light flex-shrink-0" />
                sportessence.asd.aps@gmail.com
              </a>
              <a
                href="tel:3420394661"
                className="flex items-center gap-2 text-sm text-cyan-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-light flex-shrink-0" />
                +39 342 039 4661
              </a>
            </div>
            <div className="mt-4 pt-3">
              <Link
                href="/preventivo"
                className="inline-block w-full text-center bg-fox hover:bg-[#d15012] text-white text-xs font-bold py-2.5 px-4 rounded-md uppercase tracking-wider transition-all"
              >
                Richiedi Preventivo Rapido
              </Link>
            </div>
          </div>
        </div>

        {/* Barra di Copyright & Privacy */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Sportessence Travel — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <Link href="/chi-siamo" className="hover:text-white transition-colors">
              Chi Siamo
            </Link>
            <Link href="/formula-societa" className="hover:text-white transition-colors">
              Trasparenza Societaria
            </Link>
            <Link href="/preventivo" className="hover:text-white transition-colors">
              Richiesta Preventivo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
