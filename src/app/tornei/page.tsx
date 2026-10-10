"use client";

import { useState } from "react";
import { TOURNAMENTS } from "@/data/tournaments";
import TournamentCard from "@/components/tornei/TournamentCard";
import TournamentFilter from "@/components/tornei/TournamentFilter";
import { AgeCategory } from "@/types";
import { Trophy, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function TorneiPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const months = ["Aprile", "Maggio", "Giugno", "Settembre"];
  const categories: AgeCategory[] = [
    "Under 17 (Allievi)",
    "Under 15 (Giovanissimi)",
    "Under 13 (Esordienti)",
    "Under 11 (Pulcini)",
    "Primi Calci / Piccoli Amici",
  ];

  const filteredTournaments = TOURNAMENTS.filter((t) => {
    const matchesMonth = selectedMonth === "all" || t.month === selectedMonth;
    const matchesCategory =
      selectedCategory === "all" ||
      t.categories.includes(selectedCategory as AgeCategory);
    return matchesMonth && matchesCategory;
  });

  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Pagina */}
        <div className="py-8 sm:py-12 border-b border-gray-200 mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-fox block mb-2">
              Calendario Ufficiale Stagione 2026
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-deep tracking-tight">
              Tornei di Calcio Giovanile sul Lago di Como
            </h1>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Consulta le schede dei nostri eventi primaverili ed estivi. Seleziona la categoria della tua squadra per visualizzare la formula di gara, i centri sportivi e richiedere la scheda bando riservata.
            </p>
          </div>
        </div>

        {/* Barra Filtri Interattiva */}
        <TournamentFilter
          selectedMonth={selectedMonth}
          selectedCategory={selectedCategory}
          onSelectMonth={setSelectedMonth}
          onSelectCategory={setSelectedCategory}
          months={months}
          categories={categories}
        />

        {/* Conteggio Risultati */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Mostrando <strong>{filteredTournaments.length}</strong> tornei in programma
          </p>
          {(selectedMonth !== "all" || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSelectedMonth("all");
                setSelectedCategory("all");
              }}
              className="text-xs font-bold text-fox hover:underline"
            >
              Azzera tutti i filtri
            </button>
          )}
        </div>

        {/* Griglia Tornei */}
        {filteredTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map((t) => (
              <TournamentCard key={t.id} tournament={t} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto border border-gray-200 shadow-sm space-y-4">
            <Trophy className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="text-xl font-bold text-blue-deep">
              Nessun torneo trovato con questi filtri
            </h3>
            <p className="text-sm text-gray-500">
              Prova a selezionare un altro mese o categoria, oppure contattaci per verificare la possibilità di organizzare un test match su misura.
            </p>
            <button
              onClick={() => {
                setSelectedMonth("all");
                setSelectedCategory("all");
              }}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Reimposta Filtri
            </button>
          </div>
        )}

        {/* Box Rassicurazione B2B Dirigenti */}
        <div className="mt-16 bg-cream rounded-3xl p-8 sm:p-10 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-fox uppercase tracking-widest">
              <HelpCircle className="w-4 h-4" />
              Politica Riservata B2B
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-deep">
              Vuoi il bando ufficiale con il prospetto quote per la tua società?
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl">
              Non pubblichiamo listini pubblici per tutelare i dirigenti che coordinano le comitive. Compila il modulo rapido o scrivici su WhatsApp per ricevere il file PDF ufficiale.
            </p>
          </div>

          <Link
            href="/preventivo"
            className="btn-primary flex-shrink-0 text-sm py-3 px-6 whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            Richiedi Scheda Bando PDF
          </Link>
        </div>

      </div>
    </main>
  );
}
