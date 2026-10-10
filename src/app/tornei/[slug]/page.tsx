import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TOURNAMENTS } from "@/data/tournaments";
import { ACCOMMODATIONS } from "@/data/accommodations";
import {
  Calendar,
  MapPin,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building,
  FileSpreadsheet,
  PhoneCall,
  ArrowLeft,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURNAMENTS.map((t) => ({
    slug: t.slug,
  }));
}

export default async function TournamentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tournament = TOURNAMENTS.find((t) => t.slug === slug);

  if (!tournament) {
    notFound();
  }

  const whatsappHref = `https://wa.me/393420394661?text=Buongiorno%20Sportessence%20Travel,%20vorrei%20richiedere%20il%20bando%20e%20le%20quote%20per%20il%20torneo%20"${encodeURIComponent(
    tournament.title
  )}"`;

  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      
      {/* HERO TORNEO */}
      <section className="relative bg-blue-deep text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tournament.heroImage}
            alt={tournament.title}
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-deep via-blue-deep/90 to-blue-deep/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/tornei"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna a tutti i tornei
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-fox text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                {tournament.statusBadge}
              </span>
              <span className="bg-white/10 backdrop-blur-md text-cyan-200 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                Minimo {tournament.minMatchesGuaranteed} partite garantite
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {tournament.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {tournament.subtitle}
            </p>

            {/* Dati veloci */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-gray-200 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-300" />
                <span className="font-semibold">{tournament.dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-300" />
                <span className="font-semibold">{tournament.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-300" />
                <span>{tournament.pitchType}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENUTO PRINCIPALE A 2 COLONNE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Colonna Sinistra Dettagli (8 col) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Box Panoramica & Categorie */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-blue-deep mb-3">
                  Panoramica del Torneo
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {tournament.overview}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Categorie Partecipanti Ufficiali:
                </span>
                <div className="flex flex-wrap gap-2">
                  {tournament.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-cream text-blue-deep text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Punti Salienti */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h3 className="text-base font-bold text-blue-deep">
                  Punti Salienti & Vantaggi Esclusivi:
                </h3>
                <ul className="space-y-2.5">
                  {tournament.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cronoprogramma del Weekend */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-fox block mb-1">
                  Timeline Completa
                </span>
                <h2 className="text-2xl font-black text-blue-deep">
                  Programma del Weekend (Ven - Sab - Dom)
                </h2>
              </div>

              <div className="space-y-6">
                {tournament.schedule.map((dayPlan, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200">
                      <h3 className="text-lg font-black text-blue-deep">
                        {dayPlan.day} — {dayPlan.title}
                      </h3>
                      <span className="text-xs font-semibold text-gray-500">
                        {dayPlan.description}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {dayPlan.timeSlots.map((slot, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                          <span className="font-bold text-blue-light min-w-[100px] flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {slot.time}
                          </span>
                          <span className="text-gray-700">{slot.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centri Sportivi & Impianti */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-light block mb-1">
                  Dove si Gioca
                </span>
                <h2 className="text-2xl font-black text-blue-deep">
                  Centri Sportivi & Strutture di Gara
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tournament.facilities.map((fac, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-fox" />
                          {fac.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-blue-deep mb-2">
                        {fac.name}
                      </h3>
                      <p className="text-xs font-semibold text-blue-light mb-3">
                        {fac.surface}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4">
                        {fac.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-200 flex flex-wrap gap-1.5">
                      {fac.features.map((f, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-white text-gray-700 text-[11px] font-semibold px-2 py-1 rounded border border-gray-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Servizi Inclusi */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-xl font-black text-blue-deep">
                Cosa Include la Quota Squadra:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tournament.includedServices.map((srv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Colonna Destra CTA & Bando (4 col - Sticky) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Box Conversione Prioritaria B2B */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-fox/30 space-y-6 sticky top-28">
              <div className="text-center pb-4 border-b border-gray-100">
                <span className="text-xs font-black uppercase tracking-widest text-fox block mb-1">
                  Iscrizione Riservata Società
                </span>
                <h3 className="text-xl font-black text-blue-deep">
                  Richiedi il Bando Ufficiale
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Ricevi subito il prospetto quote atleti, accompagnatori e disponibilità camere.
                </p>
              </div>

              <div className="space-y-3 bg-cream p-4 rounded-xl border border-amber-200 text-xs">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Prezzi Pubblici:</span>
                  <strong className="text-blue-deep">Nessun prezzo online</strong>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Trattamento Hotel:</span>
                  <strong className="text-blue-deep">Pensione Completa</strong>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Gratuità Staff:</span>
                  <strong className="text-fox">1 ogni 20 paganti</strong>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href={`/preventivo?tournament=${tournament.id}`}
                  className="btn-primary w-full text-center justify-center text-sm py-3.5 shadow-md"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  Compila Richiesta Bando
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs border border-green-200 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  Chiedi Info su WhatsApp
                </a>
              </div>

              <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-400 text-center leading-relaxed">
                Rispondiamo entro poche ore lavorative. Posti limitati per categoria.
              </div>
            </div>

            {/* Box Hotel Tipici */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 space-y-4">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-light" />
                <h3 className="text-base font-bold text-blue-deep">
                  Alloggi Convenzionati
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Le squadre alloggiano in hotel 3* o 4* attentamente verificati dal nostro staff per spazi comuni, orari pasti flessibili e accoglienza pullman.
              </p>
              <div className="space-y-3 pt-1">
                {ACCOMMODATIONS.slice(0, 2).map((acc) => (
                  <div key={acc.id} className="text-xs p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold text-blue-deep block">{acc.name} ({acc.stars}★)</span>
                    <span className="text-gray-500 text-[11px]">{acc.distanceFromPitches} • {acc.zone}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
