import Link from "next/link";
import Image from "next/image";
import { Tournament } from "@/types";
import { Trophy, Calendar, CheckCircle2, FileText, ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  tournament?: Tournament;
}

export default function Hero({ tournament }: HeroProps) {
  const currentTournament = tournament || {
    id: "como-lake-spring-cup",
    slug: "como-lake-spring-cup",
    title: "Como Lake Spring Cup 2026",
    subtitle: "Il format perfetto per il ponte primaverile: 3 giorni di gare con sfilata inaugurale serale e navette sui campi.",
    dates: "24 - 26 Aprile 2026",
    location: "Como & Cintura Urbana (CO)",
    minMatchesGuaranteed: 4,
    categories: ["Under 17 (Allievi)", "Under 15 (Giovanissimi)", "Under 13 (Esordienti)", "Under 11 (Pulcini)"],
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-blue-deep text-white">
      {/* Sfondo Immagine con Overlay Gradiente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/calcio.jpg"
          alt="Torneo giovanile di calcio Lago di Como"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep via-blue-deep/90 to-blue-deep/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-light/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Testo Principale (7 col) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill B2B */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-fox animate-pulse"></span>
              <span>Stagione 2026: Iscrizioni Tornei Calcio Giovanile Aperte</span>
            </div>

            {/* Headline Principale */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Porta la tua squadra sul <span className="text-cyan-300">Lago di Como</span>.
              <span className="block mt-2 text-fox">Al resto pensiamo noi.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Organizziamo tornei giovanili per società calcistiche con formula <strong className="text-white">chiavi in mano</strong>: hotel convenzionati selezionati, campi sintetici d&apos;eccellenza, sfilata inaugurale e convenzioni esclusive per le famiglie.
            </p>

            {/* Punti di forza immediati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Minimo 4 partite garantite a squadra</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Hotel 3* e 4* a pensione completa</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>1 Gratuità ogni 20 paganti per mister/DS</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Zero burocrazia per la cassa societaria</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/preventivo"
                className="btn-primary text-base py-3.5 px-6"
              >
                <FileText className="w-5 h-5" />
                <span>Richiedi Bando e Preventivo</span>
              </Link>

              <Link
                href="/tornei"
                className="btn-outline-white text-base py-3.5 px-6"
              >
                <span>Vedi Calendario Tornei</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Trust */}
            <div className="pt-4 flex items-center gap-4 text-xs text-gray-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-cyan-700 border-2 border-white flex items-center justify-center font-bold text-[10px]">CO</div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center font-bold text-[10px]">MI</div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center font-bold text-[10px]">BG</div>
                <div className="w-8 h-8 rounded-full bg-amber-600 border-2 border-white flex items-center justify-center font-bold text-[10px]">TO</div>
              </div>
              <span>
                Oltre <strong>50+ formazioni giovanili</strong> già ospitate nei nostri eventi lariani.
              </span>
            </div>
          </div>

          {/* Card Evidenza Torneo (5 col) */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center justify-between mb-4">
                <span className="bg-fox text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Evento Principale
                </span>
                <span className="text-xs font-bold text-cyan-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Como Lake
                </span>
              </div>

              <h2 className="text-2xl font-black text-white mb-2">
                {currentTournament.title}
              </h2>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                {currentTournament.subtitle}
              </p>

              <div className="space-y-3 mb-6 bg-blue-deep/60 p-4 rounded-xl border border-white/10 text-xs">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Date dell&apos;evento:</span>
                  <strong className="text-white">{currentTournament.dates}</strong>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Categorie:</span>
                  <strong className="text-white">{currentTournament.categories.map((c) => c.split(" ")[0]).join(", ")}</strong>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Partite minime:</span>
                  <strong className="text-cyan-300">{currentTournament.minMatchesGuaranteed} partite garantite</strong>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Trattamento:</span>
                  <strong className="text-white">Pensione Completa Hotel</strong>
                </div>
              </div>

              <Link
                href={`/tornei/${currentTournament.slug}`}
                className="w-full btn-secondary text-sm py-3 justify-center"
              >
                <Trophy className="w-4 h-4" />
                <span>Consulta Scheda Torneo e Bando</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
