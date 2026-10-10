import Link from "next/link";
import { ShieldCheck, FileCheck2, Gift, PhoneForwarded } from "lucide-react";

export default function B2BBanner() {
  const perks = [
    {
      icon: ShieldCheck,
      title: "Zero Prezzi Pubblici",
      desc: "Proteggiamo il tuo ruolo: inviamo il bando societario riservato, lasciando al dirigente la piena libertà di gestione verso le famiglie.",
    },
    {
      icon: Gift,
      title: "1 Gratuità ogni 20 Paganti",
      desc: "Riconosciamo l'impegno di mister e accompagnatori: ogni 20 quote squadra, una quota staff tecnico è completamente gratuita.",
    },
    {
      icon: FileCheck2,
      title: "Kit Grafico & WhatsApp Pronto",
      desc: "Ti forniamo locandine e messaggi già impaginati da inoltrare direttamente nella chat dei genitori per raccogliere le adesioni senza fatica.",
    },
  ];

  return (
    <section className="py-16 bg-cream border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-amber-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sinistra: Spiegazione (7 col) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-light" />
                Dedicato a Presidenti, DS e Allenatori
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-blue-deep leading-tight">
                Sappiamo cosa serve a un dirigente per portare la squadra in trasferta.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Nessuna burocrazia inutile, niente sorprese all&apos;arrivo. Ti affianchiamo con una segreteria operativa che si fa carico di schede alloggi, diete speciali e logistica campi, lasciandoti solo la gioia di guidare i tuoi ragazzi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {perks.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-gray-100 space-y-2">
                      <Icon className="w-5 h-5 text-fox" />
                      <h4 className="text-xs font-bold text-blue-deep uppercase tracking-wider">
                        {p.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Destra: Azione Immediata (5 col) */}
            <div className="lg:col-span-5 bg-blue-deep text-white p-8 rounded-2xl flex flex-col justify-center text-center space-y-5 shadow-xl">
              <span className="text-xs font-black text-fox uppercase tracking-widest">
                Parla subito con noi
              </span>
              <h3 className="text-xl font-bold text-white">
                Richiedi la Scheda Tecnica e il Bando Ufficiale del Torneo
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Compila in 60 secondi il modulo dedicato: ti invieremo via email e WhatsApp la proposta completa e la disponibilità posti.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/preventivo"
                  className="btn-primary w-full text-center justify-center text-sm"
                >
                  Richiedi Preventivo Riservato
                </Link>

                <a
                  href="tel:3420394661"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                >
                  <PhoneForwarded className="w-4 h-4 text-cyan-300" />
                  Oppure chiama subito il Referente: 342 039 4661
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
