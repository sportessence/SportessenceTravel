import { NextResponse } from "next/server";
import { QuoteRequestPayload } from "@/types";
import { addLead } from "@/data/storage";

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

    // Salvataggio effettivo nel database persistente dei lead
    const savedLead = addLead(body);

    console.log("[B2B LEAD SALVATO IN DASHBOARD]:", {
      id: savedLead.id,
      societa: savedLead.clubName,
      referente: savedLead.contactName,
      telefono: savedLead.phone,
      email: savedLead.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Richiesta di preventivo e bando registrata con successo nel pannello societario.",
        leadId: savedLead.id,
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
