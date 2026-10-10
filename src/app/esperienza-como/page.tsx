import Image from "next/image";
import Link from "next/link";
import { getAllExperiences } from "@/data/storage";
import { Compass, Ship, Mountain, MapPin, Sparkles, HeartHandshake, ArrowRight } from "lucide-react";

export default function EsperienzaComoPage() {
  const experiences = getAllExperiences();
  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO ESPERIENZA */}
        <div className="bg-blue-deep rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden mb-16 shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80"
              alt="Lago di Como panorama"
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-deep via-blue-deep/90 to-blue-deep/70" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-400/30 text-xs font-bold text-cyan-200">
              <Compass className="w-4 h-4 text-cyan-300" />
              La Leva Vincente per Convincere le Famiglie
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Il Lago di Como: La trasferta sportiva che diventa vacanza per tutti
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Sappiamo che per un dirigente e un allenatore il vero successo di una trasferta dipende dall&apos;entusiasmo dei genitori. Con Sportessence Travel, mentre i ragazzi giocano a calcio, le famiglie vivono una delle destinazioni più celebrate al mondo.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/preventivo" className="btn-primary text-sm py-3 px-6">
                Richiedi Bando e Scheda Famiglie
              </Link>
              <Link href="/tornei" className="btn-outline-white text-sm py-3 px-6">
                Vedi i Tornei 2026
              </Link>
            </div>
          </div>
        </div>

        {/* I 3 BENEFIT PER I GENITORI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-light/10 text-blue-light flex items-center justify-center">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Convenzioni Battelli Esclusive
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tariffe speciali di gruppo per salire sui battelli della Navigazione Laghi. Cernobbio, Torno e Moltrasio a portata di mano durante le pause di gioco del sabato.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-fox/10 text-fox flex items-center justify-center">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Funicolare Como-Brunate
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il &apos;Balcone sulle Alpi&apos;: salita panoramica mozzafiato con vista sull&apos;intero lago. Il momento ideale per la foto ufficiale di gruppo della società.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Cultura, Parchi & Shopping
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Villa Olmo con i suoi giardini secolari, il centro storico murato di Como con boutique ed enoteche. Nessun genitore passerà ore ad annoiarsi.
            </p>
          </div>
        </div>

        {/* GUIDA DETTAGLIATA ALLE ESPERIENZE */}
        <div className="space-y-12 mb-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-fox block mb-1">
              Cosa Fare nei Momenti di Pausa
            </span>
            <h2 className="text-3xl font-black text-blue-deep">
              Le Attrazioni Principali a Disposizione del Gruppo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-deep/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {exp.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-deep text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {exp.duration}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-deep mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {exp.fullDesc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-gray-100 text-xs">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-bold text-blue-light">Ideale per:</span>
                      <span>{exp.idealFor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-fox font-semibold">
                      <span>Vantaggio Sportessence:</span>
                      <span>{exp.familyBenefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA PER DIRIGENTI */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-amber-300 text-center max-w-4xl mx-auto space-y-6">
          <HeartHandshake className="w-12 h-12 text-fox mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-blue-deep">
            Rendi felici atleti e genitori in un colpo solo
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Ti inviamo la locandina grafica e il PDF informativo già predisposti da girare nel gruppo WhatsApp della squadra: vedrai quante adesioni entusiaste raccoglierai in meno di 24 ore!
          </p>
          <div className="pt-2">
            <Link href="/preventivo" className="btn-primary text-base py-3.5 px-8">
              Richiedi la Scheda da Inoltrare ai Genitori
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
