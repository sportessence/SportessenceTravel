import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Password admin predefinita
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "sportessence2026";

    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true, message: "Accesso autorizzato" });
      // Set secure cookie for session
      response.cookies.set("travel_admin_auth", "true", {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 giorni
      });
      return response;
    }

    return NextResponse.json(
      { error: "Password errata. Riprova." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Errore durante la verifica credenziali." },
      { status: 500 }
    );
  }
}
