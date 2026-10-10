"use client";

import { useState, useEffect } from "react";
import {
  Tournament,
  Accommodation,
  LakeExperience,
  AgeCategory,
} from "@/types";
import { StoredLead } from "@/data/storage";
import {
  Lock,
  Trophy,
  Building2,
  Compass,
  Inbox,
  Sparkles,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Mail,
  Calendar,
  ExternalLink,
  Star,
  LogOut,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"tournaments" | "hotels" | "experiences" | "leads">("tournaments");

  // Data state
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [experiences, setExperiences] = useState<LakeExperience[]>([]);
  const [leads, setLeads] = useState<StoredLead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Edit states
  const [editingTournament, setEditingTournament] = useState<Tournament | null>(null);
  const [editingAccommodation, setEditingAccommodation] = useState<Accommodation | null>(null);
  const [editingExperience, setEditingExperience] = useState<LakeExperience | null>(null);

  useEffect(() => {
    // Check if session storage has auth
    if (sessionStorage.getItem("admin_authenticated") === "true") {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/data");
      if (res.ok) {
        const data = await res.json();
        setTournaments(data.tournaments || []);
        setAccommodations(data.accommodations || []);
        setExperiences(data.experiences || []);
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Errore fetch dati admin:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_authenticated", "true");
        fetchData();
      } else {
        setAuthError("Password non valida. Riprova.");
      }
    } catch (err) {
      setAuthError("Errore di connessione.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    setPassword("");
  };

  const showFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  // Actions
  const handleSetHero = async (id: string) => {
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "setHero", tournamentId: id }),
    });
    if (res.ok) {
      showFeedback("Torneo impostato come principale nell'Hero!");
      fetchData();
    }
  };

  const handleSaveTournament = async (t: Tournament) => {
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "saveTournament", tournament: t }),
    });
    if (res.ok) {
      showFeedback("Torneo salvato con successo!");
      setEditingTournament(null);
      fetchData();
    }
  };

  const handleDeleteTournament = async (id: string) => {
    if (!confirm("Sei sicuro di voler eliminare questo torneo?")) return;
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "deleteTournament", tournamentId: id }),
    });
    if (res.ok) {
      showFeedback("Torneo eliminato.");
      fetchData();
    }
  };

  const handleSaveAccommodation = async (acc: Accommodation) => {
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "saveAccommodation", accommodation: acc }),
    });
    if (res.ok) {
      showFeedback("Alloggio salvato con successo!");
      setEditingAccommodation(null);
      fetchData();
    }
  };

  const handleDeleteAccommodation = async (id: string) => {
    if (!confirm("Sei sicuro di voler eliminare questa struttura?")) return;
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "deleteAccommodation", accommodationId: id }),
    });
    if (res.ok) {
      showFeedback("Alloggio eliminato.");
      fetchData();
    }
  };

  const handleSaveExperience = async (exp: LakeExperience) => {
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "saveExperience", experience: exp }),
    });
    if (res.ok) {
      showFeedback("Attività Lago salvata con successo!");
      setEditingExperience(null);
      fetchData();
    }
  };

  const handleDeleteExperience = async (id: string) => {
    if (!confirm("Sei sicuro di voler eliminare questa esperienza?")) return;
    const res = await fetch("/api/admin/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "deleteExperience", experienceId: id }),
    });
    if (res.ok) {
      showFeedback("Esperienza eliminata.");
      fetchData();
    }
  };

  // SCHERMATA LOGIN SE NON AUTENTICATO
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen pt-36 pb-20 bg-slate-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full border border-gray-100 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-blue-light/10 text-blue-light flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h1 className="text-2xl font-black text-blue-deep">
              Area Riservata Admin
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Pannello di controllo tornei, hotel, attività e preventivi.
            </p>
          </div>

          {authError && (
            <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-200">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-left text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Password Amministratore
              </label>
              <input
                type="password"
                required
                placeholder="Inserisci password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm"
              />
              <span className="text-[11px] text-gray-400 block text-left mt-1">
                (Predefinita: <code>sportessence2026</code>)
              </span>
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-sm uppercase font-bold py-3.5 tracking-wider justify-center"
            >
              Accedi al Pannello
            </button>
          </form>

          <div className="pt-2">
            <Link href="/" className="text-xs font-bold text-gray-400 hover:text-blue-light">
              ← Torna al sito pubblico
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // DASHBOARD ADMIN COMPLETA
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Barra Superiore Admin */}
        <div className="bg-blue-deep text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="bg-fox text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Control Room
              </span>
              <span className="text-xs text-cyan-200">Sportessence Travel CMS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Pannello di Gestione Contenuti & Lead
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Ricarica Dati"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <Link
              href="/"
              target="_blank"
              className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-1.5"
            >
              <span>Vedi Sito Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white transition-colors"
              title="Disconnetti"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feedback Notifica se presente */}
        {feedbackMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg animate-fade-in">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Navigazione Tab */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
          <button
            onClick={() => setActiveTab("tournaments")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === "tournaments"
                ? "bg-blue-deep text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Tornei & Hero ({tournaments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("hotels")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === "hotels"
                ? "bg-blue-deep text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Alloggi & Hotel ({accommodations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("experiences")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === "experiences"
                ? "bg-blue-deep text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Esperienze Lago ({experiences.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === "leads"
                ? "bg-fox text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Preventivi Ricevuti ({leads.length})</span>
          </button>
        </div>

        {/* ================= TAB 1: TORNEI ================= */}
        {activeTab === "tournaments" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-200">
              <div>
                <h2 className="text-xl font-black text-blue-deep">
                  Gestione Tornei di Calcio
                </h2>
                <p className="text-xs text-gray-500">
                  Modifica date, categorie ammesse, status badge o imposta il torneo mostrato in primo piano nell&apos;Hero.
                </p>
              </div>
              <button
                onClick={() =>
                  setEditingTournament({
                    id: `torneo-${Date.now()}`,
                    slug: `nuovo-torneo-${Date.now()}`,
                    title: "Nuovo Torneo Lago di Como 2026",
                    subtitle: "Sottotitolo descrittivo del torneo",
                    dates: "12 - 14 Giugno 2026",
                    month: "Giugno",
                    location: "Como (CO)",
                    categories: ["Under 17 (Allievi)", "Under 15 (Giovanissimi)"],
                    minMatchesGuaranteed: 4,
                    pitchType: "Campi sintetici omologati FIGC",
                    heroImage: "/imgs/calcio.jpg",
                    statusBadge: "Iscrizioni Aperte",
                    overview: "Panoramica dettagliata del nuovo torneo...",
                    highlights: ["Minimo 4 partite garantite", "Hotel convenzionati a pensione completa"],
                    schedule: [],
                    facilities: [],
                    includedServices: ["Soggiorno hotel", "Iscrizione e arbitri federali"],
                  })
                }
                className="btn-primary text-xs py-2.5 px-4"
              >
                <Plus className="w-4 h-4" />
                <span>Aggiungi Torneo</span>
              </button>
            </div>

            {/* Form Modifica Torneo (se aperto) */}
            {editingTournament && (
              <div className="bg-white p-8 rounded-3xl border-2 border-fox shadow-xl space-y-6 animate-fade-in">
                <div className="flex justify-between items-center border-b pb-4">
                  <h3 className="text-xl font-bold text-blue-deep">
                    Modifica / Crea Torneo: {editingTournament.title}
                  </h3>
                  <button
                    onClick={() => setEditingTournament(null)}
                    className="text-xs font-bold text-gray-400 hover:text-gray-700"
                  >
                    Annulla
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Titolo Torneo *</label>
                    <input
                      type="text"
                      value={editingTournament.title}
                      onChange={(e) => setEditingTournament({ ...editingTournament, title: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Slug URL (univoco) *</label>
                    <input
                      type="text"
                      value={editingTournament.slug}
                      onChange={(e) => setEditingTournament({ ...editingTournament, slug: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Date Svolgimento *</label>
                    <input
                      type="text"
                      value={editingTournament.dates}
                      onChange={(e) => setEditingTournament({ ...editingTournament, dates: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Mese Filtro *</label>
                    <select
                      value={editingTournament.month}
                      onChange={(e) => setEditingTournament({ ...editingTournament, month: e.target.value as any })}
                      className="w-full p-2.5 border rounded-lg"
                    >
                      <option value="Aprile">Aprile</option>
                      <option value="Maggio">Maggio</option>
                      <option value="Giugno">Giugno</option>
                      <option value="Settembre">Settembre</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Stato Iscrizioni (Badge) *</label>
                    <select
                      value={editingTournament.statusBadge}
                      onChange={(e) => setEditingTournament({ ...editingTournament, statusBadge: e.target.value as any })}
                      className="w-full p-2.5 border rounded-lg"
                    >
                      <option value="Iscrizioni Aperte">Iscrizioni Aperte</option>
                      <option value="Ultimi Posti">Ultimi Posti</option>
                      <option value="Sold Out">Sold Out</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Minimo Partite Garantite *</label>
                    <input
                      type="number"
                      value={editingTournament.minMatchesGuaranteed}
                      onChange={(e) => setEditingTournament({ ...editingTournament, minMatchesGuaranteed: Number(e.target.value) })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 text-xs">Sottotitolo / Payoff</label>
                  <input
                    type="text"
                    value={editingTournament.subtitle}
                    onChange={(e) => setEditingTournament({ ...editingTournament, subtitle: e.target.value })}
                    className="w-full p-2.5 border rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 text-xs">Descrizione Completa</label>
                  <textarea
                    rows={4}
                    value={editingTournament.overview}
                    onChange={(e) => setEditingTournament({ ...editingTournament, overview: e.target.value })}
                    className="w-full p-2.5 border rounded-lg text-xs"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    onClick={() => setEditingTournament(null)}
                    className="px-4 py-2 border rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50"
                  >
                    Annulla
                  </button>
                  <button
                    onClick={() => handleSaveTournament(editingTournament)}
                    className="btn-primary text-xs py-2 px-5"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salva Modifiche</span>
                  </button>
                </div>
              </div>
            )}

            {/* Elenco Tornei */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tournaments.map((t) => (
                <div key={t.id} className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-deep">
                        {t.month} • {t.dates}
                      </span>
                      {t.isFeatured ? (
                        <span className="text-xs font-black bg-amber-100 text-amber-800 px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-current text-fox" />
                          In Evidenza nell&apos;Hero
                        </span>
                      ) : (
                        <button
                          onClick={() => handleSetHero(t.id)}
                          className="text-[11px] font-bold text-blue-light hover:underline"
                        >
                          ★ Mostra nell&apos;Hero
                        </button>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-blue-deep">{t.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{t.subtitle}</p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {t.categories.map((c) => (
                        <span key={c} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400">
                      Stato: <strong className="text-blue-deep">{t.statusBadge}</strong>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingTournament(t)}
                        className="p-2 text-blue-deep hover:bg-gray-100 rounded-lg text-xs font-bold flex items-center gap-1"
                        title="Modifica"
                      >
                        <Edit className="w-4 h-4 text-blue-light" />
                        <span>Modifica</span>
                      </button>

                      <button
                        onClick={() => handleDeleteTournament(t.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold"
                        title="Elimina"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 2: HOTEL ================= */}
        {activeTab === "hotels" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-200">
              <div>
                <h2 className="text-xl font-black text-blue-deep">
                  Strutture Alberghiere & Alloggi
                </h2>
                <p className="text-xs text-gray-500">
                  Gestisci gli hotel convenzionati presentati nelle schede tornei.
                </p>
              </div>
              <button
                onClick={() =>
                  setEditingAccommodation({
                    id: `hotel-${Date.now()}`,
                    name: "Nuovo Hotel Partner",
                    stars: 3,
                    zone: "Como Centro",
                    distanceFromPitches: "10 minuti dai campi",
                    treatment: "Pensione Completa Sportiva",
                    description: "Descrizione della struttura ricettiva...",
                    amenities: ["Wi-Fi gratuito", "Menù per atleti"],
                    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
                  })
                }
                className="btn-primary text-xs py-2.5 px-4"
              >
                <Plus className="w-4 h-4" />
                <span>Aggiungi Hotel</span>
              </button>
            </div>

            {/* Form Modifica Hotel */}
            {editingAccommodation && (
              <div className="bg-white p-8 rounded-3xl border-2 border-fox shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-blue-deep">Modifica Alloggio</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold block mb-1">Nome Struttura</label>
                    <input
                      type="text"
                      value={editingAccommodation.name}
                      onChange={(e) => setEditingAccommodation({ ...editingAccommodation, name: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">Stelle (1-5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={editingAccommodation.stars}
                      onChange={(e) => setEditingAccommodation({ ...editingAccommodation, stars: Number(e.target.value) })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">Zona</label>
                    <input
                      type="text"
                      value={editingAccommodation.zone}
                      onChange={(e) => setEditingAccommodation({ ...editingAccommodation, zone: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">Distanza dai Campi</label>
                    <input
                      type="text"
                      value={editingAccommodation.distanceFromPitches}
                      onChange={(e) => setEditingAccommodation({ ...editingAccommodation, distanceFromPitches: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-bold block mb-1 text-xs">Descrizione</label>
                  <textarea
                    rows={3}
                    value={editingAccommodation.description}
                    onChange={(e) => setEditingAccommodation({ ...editingAccommodation, description: e.target.value })}
                    className="w-full p-2.5 border rounded-lg text-xs"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button onClick={() => setEditingAccommodation(null)} className="px-4 py-2 border rounded-lg text-xs font-bold">
                    Annulla
                  </button>
                  <button onClick={() => handleSaveAccommodation(editingAccommodation)} className="btn-primary text-xs py-2 px-5">
                    Salva Hotel
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accommodations.map((acc) => (
                <div key={acc.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-black text-amber-500">{"★".repeat(acc.stars)}</span>
                      <span className="text-[11px] text-gray-500">{acc.zone}</span>
                    </div>
                    <h3 className="font-bold text-base text-blue-deep">{acc.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{acc.distanceFromPitches}</p>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-3">{acc.description}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t flex justify-end gap-2">
                    <button onClick={() => setEditingAccommodation(acc)} className="p-2 text-blue-light hover:bg-gray-100 rounded-lg text-xs font-bold">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDeleteAccommodation(acc.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: ESPERIENZE ================= */}
        {activeTab === "experiences" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-200">
              <div>
                <h2 className="text-xl font-black text-blue-deep">
                  Attività & Esperienze Lago di Como
                </h2>
                <p className="text-xs text-gray-500">
                  Modifica le attrazioni turistiche presentate alle famiglie e accompagnatori.
                </p>
              </div>
              <button
                onClick={() =>
                  setEditingExperience({
                    id: `exp-${Date.now()}`,
                    title: "Nuova Esperienza Lariana",
                    category: "Natura & Panorama",
                    duration: "2 ore",
                    shortDesc: "Breve sintesi dell'esperienza...",
                    fullDesc: "Descrizione approfondita dell'esperienza...",
                    idealFor: "Genitori e fratellini",
                    familyBenefit: "Sconti con braccialetto torneo",
                    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
                  })
                }
                className="btn-primary text-xs py-2.5 px-4"
              >
                <Plus className="w-4 h-4" />
                <span>Aggiungi Esperienza</span>
              </button>
            </div>

            {/* Form Modifica Esperienza */}
            {editingExperience && (
              <div className="bg-white p-8 rounded-3xl border-2 border-fox shadow-xl space-y-4">
                <h3 className="text-lg font-bold text-blue-deep">Modifica Attività</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="font-bold block mb-1">Titolo Attività</label>
                    <input
                      type="text"
                      value={editingExperience.title}
                      onChange={(e) => setEditingExperience({ ...editingExperience, title: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">Durata</label>
                    <input
                      type="text"
                      value={editingExperience.duration}
                      onChange={(e) => setEditingExperience({ ...editingExperience, duration: e.target.value })}
                      className="w-full p-2.5 border rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-bold block mb-1 text-xs">Descrizione Completa</label>
                  <textarea
                    rows={3}
                    value={editingExperience.fullDesc}
                    onChange={(e) => setEditingExperience({ ...editingExperience, fullDesc: e.target.value })}
                    className="w-full p-2.5 border rounded-lg text-xs"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button onClick={() => setEditingExperience(null)} className="px-4 py-2 border rounded-lg text-xs font-bold">
                    Annulla
                  </button>
                  <button onClick={() => handleSaveExperience(editingExperience)} className="btn-primary text-xs py-2 px-5">
                    Salva Esperienza
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-fox">{exp.category}</span>
                      <span className="text-xs text-gray-400">{exp.duration}</span>
                    </div>
                    <h3 className="font-bold text-base text-blue-deep">{exp.title}</h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-3">{exp.fullDesc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t flex justify-end gap-2">
                    <button onClick={() => setEditingExperience(exp)} className="p-2 text-blue-light hover:bg-gray-100 rounded-lg text-xs font-bold">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDeleteExperience(exp.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: PREVENTIVI / LEAD RICEVUTI ================= */}
        {activeTab === "leads" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-black text-blue-deep">
                  Richieste di Bando & Preventivi Ricevuti
                </h2>
                <p className="text-xs text-gray-500">
                  Tutti i contatti lasciati dai dirigenti societari dal modulo sul sito.
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full">
                {leads.length} Lead Totali
              </span>
            </div>

            {leads.length > 0 ? (
              <div className="space-y-4">
                {leads.map((lead) => {
                  const whatsappMessage = encodeURIComponent(
                    `Buongiorno ${lead.contactName}, la contatto da Sportessence Travel in merito alla richiesta per la società ${lead.clubName}. Abbiamo preparato la scheda informativa per il torneo!`
                  );
                  const whatsappUrl = `https://wa.me/39${lead.phone.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

                  return (
                    <div
                      key={lead.id}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-fox">{lead.id}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {new Date(lead.createdAt).toLocaleString("it-IT")}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-blue-deep mt-1">
                            {lead.clubName} ({lead.city}, {lead.province})
                          </h3>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs py-2 px-3.5 bg-green-600 hover:bg-green-700 flex items-center gap-1.5"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            <span>Apri WhatsApp con il Dirigente</span>
                          </a>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                        <div>
                          <span className="font-bold text-gray-400 uppercase tracking-wider block mb-1">
                            Referente
                          </span>
                          <p className="font-bold text-blue-deep text-sm">{lead.contactName}</p>
                          <p className="text-gray-500">{lead.contactRole}</p>
                          <div className="mt-2 space-y-1">
                            <a href={`tel:${lead.phone}`} className="text-blue-light font-bold flex items-center gap-1">
                              <PhoneCall className="w-3 h-3" /> {lead.phone}
                            </a>
                            <a href={`mailto:${lead.email}`} className="text-gray-600 flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {lead.email}
                            </a>
                          </div>
                        </div>

                        <div>
                          <span className="font-bold text-gray-400 uppercase tracking-wider block mb-1">
                            Dati Sportivi
                          </span>
                          <p>
                            <strong>Torneo:</strong> {lead.tournamentId || "Da concordare"}
                          </p>
                          <p>
                            <strong>Categorie:</strong> {lead.categories.join(", ")}
                          </p>
                          <p>
                            <strong>Atleti:</strong> ~{lead.estimatedPlayers || 0}
                          </p>
                          <p>
                            <strong>Accompagnatori:</strong> ~{lead.estimatedStaffAndParents || 0}
                          </p>
                        </div>

                        <div>
                          <span className="font-bold text-gray-400 uppercase tracking-wider block mb-1">
                            Formula & Note
                          </span>
                          <p>
                            <strong>Alloggio:</strong> {lead.accommodationType}
                          </p>
                          <div className="mt-2 p-2.5 rounded-xl bg-gray-50 text-gray-700 italic border border-gray-100">
                            {lead.notes || "Nessuna nota aggiuntiva specificata."}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-2xl border border-gray-200">
                <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="font-bold text-blue-deep">Nessun preventivo ricevuto al momento</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Non appena un dirigente invierà il form da <code>/preventivo</code>, apparirà qui all&apos;istante.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}
