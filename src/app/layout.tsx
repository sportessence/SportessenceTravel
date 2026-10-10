import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sportessence Travel | Tornei di Calcio Giovanile Lago di Como",
  description:
    "Organizzazione tornei di calcio giovanile Under 17, Under 15, Esordienti e Pulcini sul Lago di Como. Pacchetti all-inclusive con hotel selezionati, formula pensione completa e convenzioni per famiglie.",
  keywords: [
    "tornei calcio giovanile",
    "tornei lago di como",
    "torneo under 17 como",
    "torneo esordienti como",
    "sportessence travel",
    "tornei calcio primavera 2026",
    "soggiorni sportivi lago di como",
    "torneo calcio chiavi in mano",
  ],
  openGraph: {
    title: "Sportessence Travel | Tornei di Calcio Giovanile sul Lago di Como",
    description:
      "Porta la tua squadra sul Lago di Como: pacchetti chiavi in mano con hotel selezionati, campi sintetici FIGC e convenzioni battello per le famiglie.",
    url: "https://sportessencetravel.it",
    siteName: "Sportessence Travel",
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="antialiased bg-white text-blue-deep flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
