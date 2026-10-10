"use client";

import { useState } from "react";
import { Sparkles, Calendar, Clock, Trophy } from "lucide-react";

export default function WeekendTimeline() {
  const [activeDay, setActiveDay] = useState<0 | 1 | 2>(0);

  const days = [
    {
      day: "Venerdì",
      badge: "Giorno 1",
      title: "Arrivo, Accrediti Tecnici & Sfilata Inaugurale",
      lead: "L'emozione della partenza e l'impatto con il Lago di Como.",
      steps: [
        {
          time: "14:00 - 17:00",
          title: "Check-in Strutture & Assegnazione Camere",
          desc: "Accoglienza personalizzata negli hotel convenzionati, distribuzione delle chiavi e sistemazione comitiva.",
        },
        {
          time: "17:30 - 19:00",
          title: "Accredito Società & Briefing Allenatori",
          desc: "Ritiro del kit torneo, verifica liste gara, consegna programma orari definitivi e briefing con la direzione tecnica.",
        },
        {
          time: "20:30 - 22:00",
          title: "Sfilata Ufficiale delle Delegazioni",
          desc: "La spettacolare cerimonia d'apertura con tutte le squadre in divisa sociale, presentazione ufficiale, musica e giuramento dell'atleta.",
        },
      ],
    },
    {
      day: "Sabato",
      badge: "Giorno 2",
      title: "Fase a Gironi Non-Stop & Pomeriggio sul Lago",
      lead: "Calcio giocato ad alta intensità e relax per genitori e famiglie.",
      steps: [
        {
          time: "09:00 - 13:00",
          title: "Fase a Gironi Mattutina",
          desc: "Gare di qualificazione disputate sui migliori centri sportivi comaschi con arbitri federali e acqua a bordo campo.",
        },
        {
          time: "13:00 - 15:00",
          title: "Pranzo Sportivo Bilanciato",
          desc: "Pasti energetici a orari concordati in struttura o nei punti ristoro convenzionati sui campi.",
        },
        {
          time: "15:30 - 19:30",
          title: "Seconda Fase di Qualificazione & Tour Lago",
          desc: "Le squadre completano i gironi di qualificazione, mentre genitori e accompagnatori usufruiscono delle convenzioni per il battello o la funicolare.",
        },
      ],
    },
    {
      day: "Domenica",
      badge: "Giorno 3",
      title: "Fasi Finali, Premiazioni & Saluto Istituzionale",
      lead: "L'apice della competizione e la festa sportiva per tutti.",
      steps: [
        {
          time: "09:30 - 13:00",
          title: "Quarti e Semifinali di Categoria",
          desc: "Incontri ad eliminazione diretta tra tabellone Gold Cup e tabellone Silver Cup per garantire partite a tutti.",
        },
        {
          time: "14:30 - 16:30",
          title: "Finalissime di Categoria",
          desc: "I match decisivi sul campo centrale con speaker, musica d'ingresso e pubblico delle grandi occasioni.",
        },
        {
          time: "17:00",
          title: "Premiazione Trionfale sul Campo",
          desc: "Coppe per tutte le formazioni, medaglia celebrativa a ogni singolo ragazzo partecipante e premi speciali fair-play.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-light block mb-2">
            Il Format Collaudato
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-deep tracking-tight">
            Come si svolge il weekend tipo della tua squadra
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Un programma calibrato minuto per minuto per garantire massimo divertimento agli atleti, ordine per gli staff e relax per i genitori.
          </p>
        </div>

        {/* Tab Selettore Giorni */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl max-w-lg w-full">
            {days.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDay(idx as 0 | 1 | 2)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeDay === idx
                    ? "bg-blue-deep text-white shadow-md"
                    : "text-gray-600 hover:text-blue-deep"
                }`}
              >
                <Calendar className="w-4 h-4 hidden sm:inline" />
                <span>{item.day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contenuto Giorno Selezionato */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-amber-200/80 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-200">
            <div>
              <span className="text-xs font-black text-fox uppercase tracking-widest">
                {days[activeDay].badge} — {days[activeDay].day}
              </span>
              <h3 className="text-2xl font-black text-blue-deep mt-1">
                {days[activeDay].title}
              </h3>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200 self-start sm:self-auto">
              {days[activeDay].lead}
            </span>
          </div>

          {/* Timeline Verticale */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-blue-light/30">
            {days[activeDay].steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-6 group">
                <div className="w-7 h-7 rounded-full bg-blue-deep border-4 border-white text-white flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-fox"></span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex-grow hover:border-blue-light/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-light mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{step.time}</span>
                  </div>
                  <h4 className="text-base font-bold text-blue-deep mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
