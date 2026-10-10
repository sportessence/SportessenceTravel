import Link from "next/link";
import { getAllTournaments } from "@/data/storage";
import TournamentCard from "@/components/tornei/TournamentCard";
import { Trophy, ArrowRight } from "lucide-react";

export default function FeaturedTournaments() {
  const tournaments = getAllTournaments();
  const featured = tournaments.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-fox block mb-2">
              Edizioni 2026 Ufficiali
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-deep tracking-tight">
              I Nostri Tornei sul Lago di Como
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-2xl">
              Date confermate, centri sportivi prenotati e posti limitati a numero chiuso per garantire la massima qualità organizzativa.
            </p>
          </div>

          <Link
            href="/tornei"
            className="inline-flex items-center gap-2 font-bold text-sm text-blue-light hover:text-blue-deep transition-colors group"
          >
            <span>Consulta l&apos;intero calendario</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Griglia Tornei */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>

        {/* Banner fondo sezione */}
        <div className="mt-14 p-6 sm:p-8 bg-blue-deep rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-fox text-white flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Hai esigenze di date o categorie personalizzate per la tua società?
              </h3>
              <p className="text-sm text-gray-300">
                Possiamo organizzare amichevoli pre-campionato o ritiri su misura per la tua rosa.
              </p>
            </div>
          </div>

          <Link
            href="/preventivo"
            className="btn-primary flex-shrink-0 text-sm whitespace-nowrap"
          >
            Contatta la Segreteria Tecnica
          </Link>
        </div>

      </div>
    </section>
  );
}
