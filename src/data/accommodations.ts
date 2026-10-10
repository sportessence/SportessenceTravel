import { Accommodation } from "@/types";

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "hotel-lario-park",
    name: "Grand Hotel Lario Park Resort",
    stars: 4,
    zone: "Como Lago / Cernobbio",
    distanceFromPitches: "10 minuti dai campi principali",
    treatment: "Pensione Completa Sportiva con bevande ai pasti",
    description:
      "Struttura a 4 stelle di prestigio posizionata a pochi passi dalla passeggiata a lago. Dispone di ampie sale dedicate per i pasti di gruppo delle squadre, parcheggio per autobus gran turismo e camere dotate di ogni comfort.",
    amenities: [
      "Parcheggio riservato pullman",
      "Sale ristoro esclusive per squadre",
      "Menù sportivo ad alto apporto energetico",
      "Wi-Fi veloce gratuito",
      "Parco privato per defaticamento",
    ],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hotel-como-nord",
    name: "Hotel Como Nord Active & Business",
    stars: 3,
    zone: "Como Centro / Stazione San Giovanni",
    distanceFromPitches: "8 minuti dai campi di gioco",
    treatment: "Pensione Completa o Mezza Pensione",
    description:
      "Hotel moderno e accogliente, specializzato nell'ospitalità di società sportive e comitive giovanili. Collocato vicino alle principali arterie stradali e alla stazione ferroviaria, consente spostamenti rapidi e comodi.",
    amenities: [
      "Accesso rapido autostrada A9",
      "Camere multiple ampie per ragazzi",
      "Orari pasti flessibili calibrati sulle gare",
      "Reception aperta 24 ore su 24",
      "Deposito bagagli sicuro",
    ],
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "residence-verde-brianza",
    name: "Sport & Relax Green Resort",
    stars: 3,
    zone: "Cantù / Cintura Comasca",
    distanceFromPitches: "5 minuti dal Centro Polisportivo",
    treatment: "Pensione Completa Sportiva",
    description:
      "Immerso nel verde della collina comasca, rappresenta la soluzione preferita dalle formazioni che cercano massima concentrazione e spazi all'aperto durante i momenti di riposo tra una partita e l'altra.",
    amenities: [
      "Grandi spazi verdi per attività all'aperto",
      "Ampie sale meeting per briefing tattici",
      "Colazione continentale ricca",
      "Convenzioni speciali per comitive genitori",
    ],
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
];
