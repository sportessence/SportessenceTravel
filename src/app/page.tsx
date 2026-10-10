import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import WeekendTimeline from "@/components/home/WeekendTimeline";
import B2BBanner from "@/components/home/B2BBanner";
import FaqSection from "@/components/home/FaqSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Sparkles, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <Hero />

      {/* 4 PILASTRI B2B */}
      <ValueProps />

      {/* VETRINA TORNEI */}
      <FeaturedTournaments />

      {/* IL WEEKEND TIPO */}
      <WeekendTimeline />

      {/* BANNER SPECIFICO PER DIRIGENTI */}
      <B2BBanner />

      {/* SEZIONE FOTOGRAFICA LAGO DI COMO ANTEPRIMA */}
      <section className="py-20 bg-blue-deep text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-fox">
                La Magia del Territorio Lariano
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Non solo una partita di calcio. <br />
                Un&apos;esperienza indimenticabile per ragazzi e famiglie.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Il Lago di Como è celebre nel mondo per la sua bellezza senza tempo. Portare la tua squadra qui significa regalare ai ragazzi l&apos;emozione di un grande torneo e alle loro famiglie un weekend di relax tra battelli, ville storiche e borghi incantati.
              </p>
              <div className="pt-2">
                <Link
                  href="/esperienza-como"
                  className="btn-secondary text-sm"
                >
                  <span>Scopri le Convenzioni per Famiglie</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
                    alt="Battello Lago di Como"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-300" /> Battelli Lago
                    </span>
                  </div>
                </div>
                <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/imgs/calciatore.jpeg"
                    alt="Calciatore sul campo"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-fox" /> Gare Intense
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/imgs/squadra.jpg"
                    alt="Squadra felice"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" /> Spirito di Gruppo
                    </span>
                  </div>
                </div>
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Vista panoramica Como Brunate"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-300" /> Panorama Brunate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ B2B */}
      <FaqSection />

      {/* BANNER FINALE DI CONVERSIONE */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-fox">
            Posti Limitati per Categoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-deep">
            Pronto a pianificare la prossima trasferta della tua squadra?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Richiedi subito il bando informativo della categoria che ti interessa. Ti rispondiamo entro poche ore con disponibilità e prospetto quote.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/preventivo"
              className="btn-primary text-base py-3.5 px-8"
            >
              Richiedi il Bando Ufficiale
            </Link>
            <a
              href="https://wa.me/393420394661"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base py-3.5 px-8"
            >
              Chat Rapida su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
