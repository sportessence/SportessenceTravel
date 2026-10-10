import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Trophy, Heart, Users, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import LogoTravel from "@/components/ui/LogoTravel";

export default function ChiSiamoPage() {
  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO CHI SIAMO */}
        <div className="bg-blue-deep rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden mb-16 shadow-xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-400/30 text-xs font-bold text-cyan-200">
              <ShieldCheck className="w-4 h-4 text-cyan-300" />
              Associazione Sportiva Dilettantistica & Promozione Sociale
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Chi Siamo: La Passione per lo Sport nel Cuore di Como
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Fondata nel 2023 a Como, <strong className="text-white">SPORTESSENCE ASD APS</strong> nasce con l&apos;obiettivo di diffondere i valori sani dello sport, dell&apos;inclusione e dell&apos;aggregazione giovanile. Con la divisione <em>Sportessence Travel</em> mettiamo a disposizione delle società di tutta Italia la nostra profonda conoscenza del territorio lariano.
            </p>

            <div className="pt-2">
              <Link href="/tornei" className="btn-primary text-sm py-3 px-6">
                Scopri i Nostri Tornei
              </Link>
            </div>
          </div>
        </div>

        {/* STORIA & IDENTITÀ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-fox">
              La Nostra Identità
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-deep leading-tight">
              Dall&apos;Attività di Base ai Grandi Tornei Giovanili
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Sportessence opera attivamente tutto l&apos;anno sul territorio comasco attraverso camp estivi multisport che coinvolgono centinaia di ragazzi, percorsi educativi di psicomotricità e lezioni tecniche individuali con istruttori qualificati UEFA e laureati in Scienze Motorie.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Il progetto <strong>Sportessence Travel</strong> è la naturale evoluzione di questa vocazione: un dipartimento interamente focalizzato sul turismo sportivo B2B per club di calcio giovanile, capace di garantire strutture all&apos;avanguardia, hotel collaudati e accoglienza calorosa.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-3xl font-black text-blue-light block">50+</span>
                <span className="text-xs font-semibold text-gray-500">Istruttori ed Educatori</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <span className="text-3xl font-black text-fox block">5.000+</span>
                <span className="text-xs font-semibold text-gray-500">Bambini & Atleti Coinvolti</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 text-center space-y-6">
              <div className="py-4 flex justify-center">
                <LogoTravel variant="dark" size="lg" />
              </div>

              <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                <p><strong>SportEssence Asd APS</strong></p>
                <p>Sede Legale: Via L. Mascherpa 4, 22100 Como (CO)</p>
                <p>C.F. 95150810133 — P.IVA 04231980139</p>
                <p className="text-blue-light font-bold">Iscritta al Registro Nazionale Attività Sportive (RASD)</p>
              </div>
            </div>
          </div>

        </div>

        {/* MASCOTTE FIRO */}
        <div className="bg-blue-light rounded-3xl p-8 sm:p-12 text-white mb-20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-56 h-56">
                <Image
                  src="/imgs/mascotte.png"
                  alt="Mascotte Firo"
                  fill
                  className="object-contain hover:scale-105 transition-transform"
                />
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-amber-200">
                La Nostra Mascotte Ufficiale
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Ciao, sono FIRO! 🦊
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Sono la mascotte ufficiale di Sportessence! Accompagno i ragazzi durante le nostre attività, porto allegria nelle sfilate di apertura dei tornei e presiedo le premiazioni finali. Perché prima del risultato sul tabellone, lo sport deve essere gioia, rispetto e amicizia tra compagni e avversari.
              </p>
            </div>
          </div>
        </div>

        {/* I NOSTRI VALORI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-blue-light flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Fair Play & Crescita
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nei nostri tornei premiamo l&apos;impegno e il comportamento leale. Ogni atleta riceve un riconoscimento e l&apos;opportunità di confrontarsi con pari età di altre regioni.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-fox flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Cura dell&apos;Ospite
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trattiamo ogni società ospite come un amico di vecchia data. Dal pullman che arriva al check-in fino all&apos;ultimo fischio di gara, il nostro staff è fisicamente presente sul campo.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-deep flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-blue-deep">
              Radicamento Lariano
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Non siamo un&apos;agenzia viaggi remota. Viviamo e lavoriamo a Como ogni giorno. Conosciamo i custodi dei campi, i proprietari degli hotel e gli orari migliori dei battelli.
            </p>
          </div>
        </div>

        {/* CTA FINALE */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-amber-300 text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-deep">
            Vuoi organizzare una trasferta con noi?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Siamo a tua completa disposizione per rispondere a qualsiasi curiosità su alloggi, impianti e regolamento sportivo.
          </p>
          <div className="pt-2">
            <Link href="/preventivo" className="btn-primary text-base py-3 px-8">
              Richiedi Preventivo e Bando
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
