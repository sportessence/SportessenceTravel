import { getAllTournaments } from "@/data/storage";
import TorneiListClient from "@/components/tornei/TorneiListClient";

export default function TorneiPage() {
  const tournaments = getAllTournaments();

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

        {/* Lista Tornei con Filtri Dinamici */}
        <TorneiListClient initialTournaments={tournaments} />

      </div>
    </main>
  );
}
