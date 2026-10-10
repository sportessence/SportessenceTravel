"use client";

import { AgeCategory } from "@/types";

interface TournamentFilterProps {
  selectedMonth: string;
  selectedCategory: string;
  onSelectMonth: (month: string) => void;
  onSelectCategory: (category: string) => void;
  months: string[];
  categories: AgeCategory[];
}

export default function TournamentFilter({
  selectedMonth,
  selectedCategory,
  onSelectMonth,
  onSelectCategory,
  months,
  categories,
}: TournamentFilterProps) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Filtro Mese */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
            Filtra per Mese:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectMonth("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedMonth === "all"
                  ? "bg-blue-deep text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tutti i Mesi
            </button>
            {months.map((m) => (
              <button
                key={m}
                onClick={() => onSelectMonth(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedMonth === m
                    ? "bg-blue-light text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro Categoria */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
            Filtra per Categoria:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSelectCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-deep text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tutte le Categorie
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => onSelectCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === c
                    ? "bg-fox text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.split(" ")[0]} {c.split(" ")[1] || ""}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
