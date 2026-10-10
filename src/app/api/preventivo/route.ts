import { NextResponse } from "next/server";
import { QuoteRequestPayload } from "@/types";

export async function POST(request: Request) {
  try {
    const body: QuoteRequestPayload = await request.json();

    // Validazione campi obbligatori di base
    if (!body.clubName || !body.contactName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti: Denominazione società, Referente, Email o Telefono." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Indirizzo email non valido." },
        { status: 400 }
      );
    }

    // Log del lead registrato (pronto per integrazione con Resend o Supabase DB)
    console.log("[B2B LEAD RICEVUTO - Sportessence Travel]:", {
      timestamp: new Date().toISOString(),
      societa: body.clubName,
      citta: `${body.city} (${body.province})`,
      referente: `${body.contactName} (${body.contactRole})`,
      email: body.email,
      telefono: body.phone,
      torneoSelezionato: body.tournamentId || "Generico / Da Concordare",
      categorie: body.categories,
      atletiStimati: body.estimatedPlayers,
      accompagnatoriStimati: body.estimatedStaffAndParents,
      alloggio: body.accommodationType,
      note: body.notes || "Nessuna nota",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Richiesta di preventivo e bando registrata con successo.",
        leadId: `LEAD-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Errore elaborazione richiesta preventivo:", error);
    return NextResponse.json(
      { error: "Errore interno del server durante l'elaborazione del preventivo." },
      { status: 500 }
    );
  }
}
