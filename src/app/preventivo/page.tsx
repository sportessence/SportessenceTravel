"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TOURNAMENTS } from "@/data/tournaments";
import { AgeCategory, QuoteRequestPayload } from "@/types";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  Trophy,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
} from "lucide-react";

function PreventivoFormContent() {
  const searchParams = useSearchParams();
  const initialTournamentId = searchParams.get("tournament") || "";

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [clubName, setClubName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactRole, setContactRole] = useState("Direttore Sportivo");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [tournamentId, setTournamentId] = useState(initialTournamentId);
  const [selectedCategories, setSelectedCategories] = useState<AgeCategory[]>([]);
  const [estimatedPlayers, setEstimatedPlayers] = useState(18);
  const [estimatedStaffAndParents, setEstimatedStaffAndParents] = useState(15);
  const [accommodationType, setAccommodationType] = useState<QuoteRequestPayload["accommodationType"]>("Hotel 3 Stelle");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Bot spam protection

  useEffect(() => {
    if (initialTournamentId) {
      setTournamentId(initialTournamentId);
      const matched = TOURNAMENTS.find((t) => t.id === initialTournamentId);
      if (matched && matched.categories.length > 0) {
        setSelectedCategories([matched.categories[0]]);
      }
    }
  }, [initialTournamentId]);

  const allCategories: AgeCategory[] = [
    "Under 17 (Allievi)",
    "Under 15 (Giovanissimi)",
    "Under 13 (Esordienti)",
    "Under 11 (Pulcini)",
    "Primi Calci / Piccoli Amici",
  ];

  const handleToggleCategory = (cat: AgeCategory) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const validateStep1 = () => {
    if (!clubName.trim()) {
      setErrorMessage("Inserisci la denominazione ufficiale della società sportiva.");
      return false;
    }
    if (!city.trim() || !province.trim()) {
      setErrorMessage("Inserisci comune e provincia della società.");
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const validateStep2 = () => {
    if (selectedCategories.length === 0) {
      setErrorMessage("Seleziona almeno una categoria giovanile interessata al torneo.");
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const validateStep3 = () => {
    setErrorMessage(null);
    return true;
  };

  const validateStep4 = () => {
    if (!contactName.trim()) {
      setErrorMessage("Inserisci il nome e cognome del dirigente o referente.");
      return false;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Inserisci un indirizzo email valido.");
      return false;
    }
    if (!phone.trim()) {
      setErrorMessage("Inserisci un numero di cellulare per l'invio del riepilogo su WhatsApp.");
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) setCurrentStep(2);
    else if (currentStep === 2 && validateStep2()) setCurrentStep(3);
    else if (currentStep === 3 && validateStep3()) setCurrentStep(4);
  };

  const handleBack = () => {
    setErrorMessage(null);
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent discard for bots

    if (!validateStep4()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload: QuoteRequestPayload = {
      clubName,
      city,
      province: province.toUpperCase(),
      contactName,
      contactRole,
      email,
      phone,
      tournamentId,
      categories: selectedCategories,
      estimatedPlayers,
      estimatedStaffAndParents,
      accommodationType,
      notes,
    };

    try {
      const res = await fetch("/api/preventivo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Errore durante l'invio.");
      }

      setSubmitSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setErrorMessage(error.message || "Errore imprevisto. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-100 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-black uppercase tracking-widest text-emerald-700 block">
              Richiesta Ricevuta con Successo
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-blue-deep">
              Grazie, {contactName}! La tua richiesta per la {clubName} è stata registrata.
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
              Il nostro responsabile tornei sta elaborando il bando ufficiale con il prospetto quote atleti/accompagnatori e la disponibilità negli hotel convenzionati. Riceverai la documentazione completa via email all&apos;indirizzo <strong className="text-blue-deep">{email}</strong> e via WhatsApp al numero <strong className="text-blue-deep">{phone}</strong>.
            </p>

            <div className="bg-cream p-5 rounded-2xl border border-amber-200 text-left space-y-2 text-xs text-gray-700">
              <div className="font-bold text-blue-deep text-sm mb-1">Riepilogo Dati Inviati:</div>
              <p>• <strong>Società:</strong> {clubName} ({city}, {province})</p>
              <p>• <strong>Categorie:</strong> {selectedCategories.join(", ")}</p>
              <p>• <strong>Comitiva stimata:</strong> ~{estimatedPlayers} atleti + ~{estimatedStaffAndParents} accompagnatori</p>
              <p>• <strong>Formula alloggio:</strong> {accommodationType}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/393420394661?text=Buongiorno,%20sono%20${encodeURIComponent(
                  contactName
                )}%20della%20società%20${encodeURIComponent(
                  clubName
                )}.%20Ho%20appena%20compilato%20la%20richiesta%20di%20preventivo%20sul%20sito!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Scrivici subito su WhatsApp per priorità</span>
              </a>

              <button
                onClick={() => {
                  setSubmitSuccess(false);
                  setCurrentStep(1);
                  setClubName("");
                }}
                className="text-xs font-bold text-gray-500 hover:text-blue-deep underline"
              >
                Invia una richiesta per un&apos;altra squadra
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Configurazione */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-light" />
            Bando e Preventivo Riservato B2B
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-blue-deep tracking-tight">
            Richiedi la Scheda Informativa & Quote
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Nessun impegno: riceverai la documentazione ufficiale, il programma delle gare e la bozza quote da condividere con lo staff societario.
          </p>
        </div>

        {/* Progress Tracker (Accessibile secondo modern-web-guidance) */}
        <nav aria-label="Avanzamento modulo" className="mb-10">
          <ol className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
            <li
              className={`p-3 rounded-xl border transition-all ${
                currentStep === 1
                  ? "bg-blue-deep text-white border-blue-deep shadow-sm"
                  : currentStep > 1
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                  : "bg-white text-gray-400 border-gray-200"
              }`}
            >
              <span className="block text-[10px] uppercase text-fox font-black">1. Società</span>
              <span className="hidden sm:inline">Dati Club</span>
            </li>
            <li
              className={`p-3 rounded-xl border transition-all ${
                currentStep === 2
                  ? "bg-blue-deep text-white border-blue-deep shadow-sm"
                  : currentStep > 2
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                  : "bg-white text-gray-400 border-gray-200"
              }`}
            >
              <span className="block text-[10px] uppercase text-fox font-black">2. Categorie</span>
              <span className="hidden sm:inline">Squadre</span>
            </li>
            <li
              className={`p-3 rounded-xl border transition-all ${
                currentStep === 3
                  ? "bg-blue-deep text-white border-blue-deep shadow-sm"
                  : currentStep > 3
                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                  : "bg-white text-gray-400 border-gray-200"
              }`}
            >
              <span className="block text-[10px] uppercase text-fox font-black">3. Soggiorno</span>
              <span className="hidden sm:inline">Hotel & Date</span>
            </li>
            <li
              className={`p-3 rounded-xl border transition-all ${
                currentStep === 4
                  ? "bg-blue-deep text-white border-blue-deep shadow-sm"
                  : "bg-white text-gray-400 border-gray-200"
              }`}
            >
              <span className="block text-[10px] uppercase text-fox font-black">4. Contatto</span>
              <span className="hidden sm:inline">Referente</span>
            </li>
          </ol>
        </nav>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-200">
          
          {/* Box Messaggio di Errore se presente */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            
            {/* Honeypot field (hidden from accessibility tree & humans) */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="hp_field">Lascia vuoto</label>
              <input
                id="hp_field"
                type="text"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* STEP 1: DATI SOCIETÀ */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <Building2 className="w-6 h-6 text-blue-light" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-deep">
                      Dati della Società Sportiva
                    </h2>
                    <p className="text-xs text-gray-500">
                      Indicaci il nome del club e la provincia di provenienza.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="clubName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Denominazione Società (ASD / SSD / Club) *
                    </label>
                    <input
                      id="clubName"
                      type="text"
                      required
                      placeholder="es. Calcio Como Giovanile / ASD Brianza Calcio"
                      value={clubName}
                      onChange={(e) => setClubName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Città / Comune di provenienza *
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        placeholder="es. Milano"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="province" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Provincia (Sigla) *
                      </label>
                      <input
                        id="province"
                        type="text"
                        maxLength={2}
                        required
                        placeholder="es. MI"
                        value={province}
                        onChange={(e) => setProvince(e.target.value.toUpperCase())}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px] uppercase"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: CATEGORIE E NUMERI */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <Users className="w-6 h-6 text-fox" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-deep">
                      Categorie & Dimensioni Comitiva
                    </h2>
                    <p className="text-xs text-gray-500">
                      Seleziona le annate interessate e una stima indicativa dei partecipanti.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Categorie da Iscrivere (anche più di una) *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {allCategories.map((cat) => {
                        const isChecked = selectedCategories.includes(cat);
                        return (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => handleToggleCategory(cat)}
                            className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                              isChecked
                                ? "bg-fox/10 border-fox text-blue-deep shadow-sm"
                                : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span>{cat}</span>
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] ${
                                isChecked ? "bg-fox text-white border-fox" : "border-gray-400 bg-white"
                              }`}
                            >
                              {isChecked ? "✓" : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                    <div>
                      <label htmlFor="estimatedPlayers" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Numero Indicativo Atleti (Totale)
                      </label>
                      <input
                        id="estimatedPlayers"
                        type="number"
                        min={10}
                        max={200}
                        value={estimatedPlayers}
                        onChange={(e) => setEstimatedPlayers(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="estimatedStaff" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Genitori / Accompagnatori Stimati
                      </label>
                      <input
                        id="estimatedStaff"
                        type="number"
                        min={0}
                        max={300}
                        value={estimatedStaffAndParents}
                        onChange={(e) => setEstimatedStaffAndParents(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: TORNEO & ALLOGGIO */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <Trophy className="w-6 h-6 text-amber-500" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-deep">
                      Evento Preferito & Tipologia Alloggio
                    </h2>
                    <p className="text-xs text-gray-500">
                      Scegli il torneo di preferenza o chiedi una disponibilità generale.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="tournamentSelect" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Torneo di Riferimento
                    </label>
                    <select
                      id="tournamentSelect"
                      value={tournamentId}
                      onChange={(e) => setTournamentId(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                    >
                      <option value="">-- Valuta per me il torneo più adatto --</option>
                      {TOURNAMENTS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.title} ({t.dates})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Formula di Soggiorno Preferita
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(
                        [
                          "Hotel 3 Stelle",
                          "Hotel 4 Stelle",
                          "Solo Iscrizione Torneo (Senza Hotel)",
                        ] as QuoteRequestPayload["accommodationType"][]
                      ).map((acc) => (
                        <button
                          type="button"
                          key={acc}
                          onClick={() => setAccommodationType(acc)}
                          className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all ${
                            accommodationType === acc
                              ? "bg-blue-light text-white border-blue-light shadow-sm"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {acc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Eventuali Note o Richieste Speciali
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="es. Arriveremo con pullman privato; abbiamo bisogno di menù per atleti celiaci..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CONTATTO REFERENTE */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <PhoneCall className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h2 className="text-xl font-bold text-blue-deep">
                      Referente della Società
                    </h2>
                    <p className="text-xs text-gray-500">
                      I recapiti dove invieremo il bando in PDF e il contatto del tutor.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Nome e Cognome Referente *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        required
                        placeholder="es. Marco Rossi"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactRole" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Ruolo Societario *
                      </label>
                      <select
                        id="contactRole"
                        value={contactRole}
                        onChange={(e) => setContactRole(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      >
                        <option value="Direttore Sportivo">Direttore Sportivo (DS)</option>
                        <option value="Presidente / Vice Presidente">Presidente / Vice Presidente</option>
                        <option value="Responsabile Settore Giovanile">Responsabile Settore Giovanile</option>
                        <option value="Allenatore / Mister">Allenatore / Mister</option>
                        <option value="Dirigente Accompagnatore">Dirigente Accompagnatore</option>
                        <option value="Segretario Generale">Segretario Generale</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Email Ufficiale (per invio Bando PDF) *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="mister@societa.it"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Cellulare / WhatsApp (per contatto rapido) *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="es. 340 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-light text-sm text-gray-800 min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-gray-100 text-xs text-gray-500 leading-relaxed">
                  Trattiamo i tuoi dati nel rispetto del GDPR e della normativa sportiva. I recapiti saranno utilizzati esclusivamente per l&apos;invio del bando e la gestione della richiesta di partecipazione.
                </div>
              </div>
            )}

            {/* BOTTONI DI NAVIGAZIONE STEP */}
            <div className="pt-8 mt-8 border-t border-gray-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 text-xs font-bold flex items-center gap-2 transition-colors min-h-[48px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Indietro</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary text-xs uppercase tracking-wider py-3 px-6 min-h-[48px]"
                >
                  <span>Prosegui al Passo {currentStep + 1}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8 min-h-[48px] bg-fox hover:bg-[#d15012] shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Invio in corso...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Invia Richiesta Bando & Quote</span>
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        </div>

        {/* CONTATTO TELEFONICO DIRETTO IN FONDO */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Preferisci parlare direttamente con noi? Chiamaci al{" "}
          <a href="tel:3420394661" className="font-bold text-blue-deep underline">
            +39 342 039 4661
          </a>{" "}
          o scrivici a{" "}
          <a href="mailto:sportessence.asd.aps@gmail.com" className="font-bold text-blue-deep underline">
            sportessence.asd.aps@gmail.com
          </a>
        </div>

      </div>
    </main>
  );
}

export default function PreventivoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-40 pb-20 text-center text-blue-deep font-bold">
          Caricamento configuratore bando e preventivo...
        </div>
      }
    >
      <PreventivoFormContent />
    </Suspense>
  );
}
