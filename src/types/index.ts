export type AgeCategory = 
  | "Under 17 (Allievi)" 
  | "Under 15 (Giovanissimi)" 
  | "Under 13 (Esordienti)" 
  | "Under 11 (Pulcini)" 
  | "Primi Calci / Piccoli Amici";

export interface Tournament {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  dates: string;
  month: "Aprile" | "Maggio" | "Giugno" | "Settembre";
  location: string;
  categories: AgeCategory[];
  minMatchesGuaranteed: number;
  pitchType: string;
  heroImage: string;
  isFeatured?: boolean;
  statusBadge: "Iscrizioni Aperte" | "Ultimi Posti" | "Sold Out";
  overview: string;
  highlights: string[];
  schedule: {
    day: string;
    title: string;
    description: string;
    timeSlots: { time: string; activity: string }[];
  }[];
  facilities: {
    name: string;
    location: string;
    surface: string;
    description: string;
    features: string[];
  }[];
  includedServices: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  stars: number;
  zone: string;
  distanceFromPitches: string;
  treatment: string;
  description: string;
  amenities: string[];
  imageUrl: string;
}

export interface LakeExperience {
  id: string;
  title: string;
  category: "Natura & Panorama" | "Cultura & Ville" | "Relax & Famiglie" | "Gusto Lariano";
  duration: string;
  shortDesc: string;
  fullDesc: string;
  idealFor: string;
  familyBenefit: string;
  imageUrl: string;
}

export interface QuoteRequestPayload {
  clubName: string;
  city: string;
  province: string;
  contactName: string;
  contactRole: string;
  email: string;
  phone: string;
  tournamentId?: string;
  categories: AgeCategory[];
  estimatedPlayers: number;
  estimatedStaffAndParents: number;
  accommodationType: "Hotel 3 Stelle" | "Hotel 4 Stelle" | "Solo Iscrizione Torneo (Senza Hotel)";
  notes?: string;
}
