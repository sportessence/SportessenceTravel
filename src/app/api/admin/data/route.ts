import { NextResponse } from "next/server";
import {
  readDatabase,
  setHeroFeaturedTournament,
  saveTournament,
  deleteTournament,
  saveAccommodation,
  deleteAccommodation,
  saveExperience,
  deleteExperience,
} from "@/data/storage";

export async function GET() {
  try {
    const data = readDatabase();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Errore durante il recupero dei dati di amministrazione." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    switch (action) {
      case "setHero":
        if (!body.tournamentId) return NextResponse.json({ error: "tournamentId mancante" }, { status: 400 });
        setHeroFeaturedTournament(body.tournamentId);
        break;

      case "saveTournament":
        if (!body.tournament) return NextResponse.json({ error: "tournament mancante" }, { status: 400 });
        saveTournament(body.tournament);
        break;

      case "deleteTournament":
        if (!body.tournamentId) return NextResponse.json({ error: "tournamentId mancante" }, { status: 400 });
        deleteTournament(body.tournamentId);
        break;

      case "saveAccommodation":
        if (!body.accommodation) return NextResponse.json({ error: "accommodation mancante" }, { status: 400 });
        saveAccommodation(body.accommodation);
        break;

      case "deleteAccommodation":
        if (!body.accommodationId) return NextResponse.json({ error: "accommodationId mancante" }, { status: 400 });
        deleteAccommodation(body.accommodationId);
        break;

      case "saveExperience":
        if (!body.experience) return NextResponse.json({ error: "experience mancante" }, { status: 400 });
        saveExperience(body.experience);
        break;

      case "deleteExperience":
        if (!body.experienceId) return NextResponse.json({ error: "experienceId mancante" }, { status: 400 });
        deleteExperience(body.experienceId);
        break;

      default:
        return NextResponse.json({ error: "Azione non riconosciuta." }, { status: 400 });
    }

    const updated = readDatabase();
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("Errore API Admin Data:", error);
    return NextResponse.json(
      { error: "Errore durante il salvataggio dei dati admin." },
      { status: 500 }
    );
  }
}
