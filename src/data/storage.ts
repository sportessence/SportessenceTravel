import fs from "fs";
import path from "path";
import { Tournament, Accommodation, LakeExperience, QuoteRequestPayload } from "@/types";
import { TOURNAMENTS as INITIAL_TOURNAMENTS } from "./tournaments";
import { ACCOMMODATIONS as INITIAL_ACCOMMODATIONS } from "./accommodations";
import { EXPERIENCES as INITIAL_EXPERIENCES } from "./experiences";

export interface StoredLead extends QuoteRequestPayload {
  id: string;
  createdAt: string;
}

export interface TravelDatabase {
  tournaments: Tournament[];
  accommodations: Accommodation[];
  experiences: LakeExperience[];
  leads: StoredLead[];
}

const DB_FILE_PATH = path.join(process.cwd(), "src", "data", "travel_db.json");

function getInitialDb(): TravelDatabase {
  return {
    tournaments: INITIAL_TOURNAMENTS,
    accommodations: INITIAL_ACCOMMODATIONS,
    experiences: INITIAL_EXPERIENCES,
    leads: [
      {
        id: "LEAD-SAMPLE-01",
        createdAt: new Date().toISOString(),
        clubName: "ASD Accademia Calcio Lariana",
        city: "Lecco",
        province: "LC",
        contactName: "Marco Fontana",
        contactRole: "Responsabile Settore Giovanile",
        email: "settoregiovanile@accademialariana.it",
        phone: "3391234567",
        tournamentId: "como-lake-spring-cup",
        categories: ["Under 17 (Allievi)", "Under 15 (Giovanissimi)"],
        estimatedPlayers: 36,
        estimatedStaffAndParents: 28,
        accommodationType: "Hotel 3 Stelle",
        notes: "Richiesta disponibilità per 2 pulmini e 1 pullman gran turismo.",
      },
    ],
  };
}

export function readDatabase(): TravelDatabase {
  try {
    if (!fs.existsSync(DB_FILE_PATH)) {
      const initial = getInitialDb();
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const data = fs.readFileSync(DB_FILE_PATH, "utf-8");
    return JSON.parse(data) as TravelDatabase;
  } catch (error) {
    console.error("Errore lettura database travel_db.json:", error);
    return getInitialDb();
  }
}

export function writeDatabase(db: TravelDatabase): void {
  try {
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(db, null, 2), "utf-8");
  } catch (error) {
    console.error("Errore scrittura database travel_db.json:", error);
  }
}

// Helper Tornei
export function getAllTournaments(): Tournament[] {
  return readDatabase().tournaments;
}

export function getFeaturedTournament(): Tournament {
  const all = getAllTournaments();
  return all.find((t) => t.isFeatured) || all[0];
}

export function getTournamentBySlug(slug: string): Tournament | undefined {
  return getAllTournaments().find((t) => t.slug === slug);
}

export function saveTournament(tournament: Tournament): void {
  const db = readDatabase();
  const index = db.tournaments.findIndex((t) => t.id === tournament.id);
  if (index >= 0) {
    db.tournaments[index] = tournament;
  } else {
    db.tournaments.push(tournament);
  }
  writeDatabase(db);
}

export function deleteTournament(id: string): void {
  const db = readDatabase();
  db.tournaments = db.tournaments.filter((t) => t.id !== id);
  writeDatabase(db);
}

export function setHeroFeaturedTournament(id: string): void {
  const db = readDatabase();
  db.tournaments = db.tournaments.map((t) => ({
    ...t,
    isFeatured: t.id === id,
  }));
  writeDatabase(db);
}

// Helper Accommodations
export function getAllAccommodations(): Accommodation[] {
  return readDatabase().accommodations;
}

export function saveAccommodation(acc: Accommodation): void {
  const db = readDatabase();
  const index = db.accommodations.findIndex((a) => a.id === acc.id);
  if (index >= 0) {
    db.accommodations[index] = acc;
  } else {
    db.accommodations.push(acc);
  }
  writeDatabase(db);
}

export function deleteAccommodation(id: string): void {
  const db = readDatabase();
  db.accommodations = db.accommodations.filter((a) => a.id !== id);
  writeDatabase(db);
}

// Helper Experiences
export function getAllExperiences(): LakeExperience[] {
  return readDatabase().experiences;
}

export function saveExperience(exp: LakeExperience): void {
  const db = readDatabase();
  const index = db.experiences.findIndex((e) => e.id === exp.id);
  if (index >= 0) {
    db.experiences[index] = exp;
  } else {
    db.experiences.push(exp);
  }
  writeDatabase(db);
}

export function deleteExperience(id: string): void {
  const db = readDatabase();
  db.experiences = db.experiences.filter((e) => e.id !== id);
  writeDatabase(db);
}

// Helper Leads
export function getAllLeads(): StoredLead[] {
  return readDatabase().leads;
}

export function addLead(payload: QuoteRequestPayload): StoredLead {
  const db = readDatabase();
  const newLead: StoredLead = {
    ...payload,
    id: `LEAD-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
  };
  db.leads.unshift(newLead);
  writeDatabase(db);
  return newLead;
}
