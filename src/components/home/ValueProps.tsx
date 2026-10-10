import { Trophy, Hotel, Compass, ShieldCheck } from "lucide-react";

export default function ValueProps() {
  const pillars = [
    {
      icon: Trophy,
      title: "Campi Sintetici Omologati",
      desc: "Impianti sportivi moderni, manti in erba sintetica di ultima generazione omologati FIGC/LND, arbitri federali e presidio sanitario dedicato su ogni centro.",
      tag: "Sport di Livello",
    },
    {
      icon: Hotel,
      title: "Hotel Convenzionati & Menù Atleti",
      desc: "Alberghi a 3 e 4 stelle selezionati a Como e cintura lariana. Camere spaziose, sale ristorante riservate alla squadra e menù ad hoc concordati con i tecnici.",
      tag: "Ospitalità Curata",
    },
    {
      icon: Compass,
      title: "L'Esperienza per Genitori e Famiglie",
      desc: "La trasferta diventa vacanza: convenzioni speciali per battelli a lago, funicolare Como-Brunate e guide dedicate per i genitori al seguito.",
      tag: "Valore Aggiunto",
    },
    {
      icon: ShieldCheck,
      title: "Formula Zero Rischi per il Dirigente",
      desc: "Nessun anticipo gravoso a carico della cassa sociale. Gestione agevolata per quote individuali, 1 gratuità ogni 20 paganti e tutor dedicato 24/7.",
      tag: "Garanzia B2B",
    },
  ];

  return (
    <section className="py-20 bg-cream border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Sezione */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-fox block mb-2">
            I 4 Pilastri Sportessence Travel
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-deep tracking-tight">
            Tutto ciò di cui la tua squadra ha bisogno. In un unico pacchetto.
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Dall&apos;arrivo del venerdì al rientro della domenica: il mister pensa solo alla formazione, a tutta la logistica pensiamo noi.
          </p>
        </div>

        {/* Griglia Pilastri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-light/10 text-blue-light flex items-center justify-center group-hover:bg-blue-light group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-blue-deep mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-blue-light">
                  <span>Standard Qualità Garantito</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
