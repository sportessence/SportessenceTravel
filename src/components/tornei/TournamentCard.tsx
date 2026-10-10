import Link from "next/link";
import Image from "next/image";
import { Tournament } from "@/types";
import { Calendar, MapPin, Trophy, ShieldCheck, ArrowRight, FileSpreadsheet } from "lucide-react";

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const getBadgeColor = (status: Tournament["statusBadge"]) => {
    switch (status) {
      case "Iscrizioni Aperte":
        return "bg-emerald-600 text-white";
      case "Ultimi Posti":
        return "bg-fox text-white";
      case "Sold Out":
        return "bg-gray-600 text-white";
      default:
        return "bg-blue-deep text-white";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group">
      {/* Immagine con badge sovrapposti */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={tournament.heroImage}
          alt={tournament.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/90 via-blue-deep/30 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider ${getBadgeColor(
              tournament.statusBadge
            )}`}
          >
            {tournament.statusBadge}
          </span>
        </div>

        {/* Garanzia Partite Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-deep font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-fox" />
          <span>Min. {tournament.minMatchesGuaranteed} gare garantite</span>
        </div>

        {/* Dettagli veloci su foto */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-200 mb-1">
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>{tournament.dates}</span>
            <span>•</span>
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>{tournament.location}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
            {tournament.title}
          </h3>
        </div>
      </div>

      {/* Corpo Card */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
        <div>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4">
            {tournament.subtitle}
          </p>

          {/* Categorie ammesse */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
              Categorie Ammesse:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {tournament.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-cream text-blue-deep text-xs font-semibold px-2.5 py-1 rounded-md border border-amber-200"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Impianto & Formula */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-blue-light flex-shrink-0" />
            <span className="truncate">{tournament.pitchType}</span>
          </div>
        </div>

        {/* Bottoni d'azione */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <Link
            href={`/tornei/${tournament.slug}`}
            className="w-full text-center py-2.5 px-3 rounded-lg border-2 border-blue-light text-blue-light hover:bg-blue-light hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Programma & Campi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={`/preventivo?tournament=${tournament.id}`}
            className="w-full text-center py-2.5 px-3 rounded-lg bg-fox hover:bg-[#d15012] text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Richiedi Bando</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
