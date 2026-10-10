"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Perché non trovo i prezzi pubblicati sul sito?",
      a: "Applichiamo una rigorosa politica B2B a tutela delle società sportive. Ogni dirigente deve poter gestire le quote delle famiglie e degli atleti con la massima trasparenza interna e senza vincoli. Riceverai un bando dettagliato con tariffe riservate via email o WhatsApp subito dopo la richiesta.",
    },
    {
      q: "Cosa comprende la quota del pacchetto torneo?",
      a: "Tutti i nostri pacchetti standard includono: soggiorno in hotel 3* o 4* con formula pensione completa (dalla cena del venerdì al pranzo della domenica), iscrizione formale di tutte le squadre, assicurazione di manifestazione, kit atleta, terna/arbitri ufficiali, medaglie e trofei per tutti i partecipanti e assistenza tutor 24/7.",
    },
    {
      q: "Quante partite sono garantite per ogni squadra?",
      a: "Garantiamo un minimo di 4 partite (fino a 5 per l'Attività di Base come Pulcini ed Esordienti) distribuite su sabato e domenica. Nessuna squadra viene eliminata dopo poche ore: tutti continuano a giocare fino alle fasi conclusive grazie ai tabelloni Gold e Silver.",
    },
    {
      q: "I genitori e i fratelli possono alloggiare nello stesso albergo dei ragazzi?",
      a: "Certamente! Riserviamo contingenti camere sia per gli atleti che per le famiglie al seguito, applicando le medesime tariffe agevolate in pensione completa o mezza pensione e fornendo convenzioni speciali per i battelli del Lago di Como.",
    },
    {
      q: "Come funzionano le gratuità per staff e allenatori?",
      a: "Per ogni 20 persone paganti (tra atleti e accompagnatori), offriamo 1 quota completamente gratuita in camera doppia a beneficio dell'allenatore o del dirigente responsabile.",
    },
    {
      q: "Entro quando è necessario confermare l'iscrizione?",
      a: "I tornei sono a numero chiuso (massimo 12-16 squadre per categoria) per garantire orari di gara ottimali e disponibilità nelle migliori strutture alberghiere. Consigliamo di bloccare le date con un acconto simbolico appena formalizzato l'interesse della squadra.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Sezione */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-deep text-xs font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-blue-light" />
            Risposte Chiare per la tua Società
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-deep tracking-tight">
            Domande Frequenti dei Dirigenti
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Tutto quello che c&apos;è da sapere su iscrizioni, alloggi, garanzie sportive e logistica.
          </p>
        </div>

        {/* Lista FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-gray-50/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-light"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-blue-deep">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-light flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
