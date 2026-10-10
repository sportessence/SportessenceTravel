import Link from "next/link";
import { ShieldCheck, CheckCircle2, Gift, FileText, PhoneCall, Users, Calculator } from "lucide-react";

export default function FormulaSocietaPage() {
  return (
    <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER HERO */}
        <div className="bg-blue-deep rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden mb-16 shadow-xl">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-blue-light/40 text-xs font-bold text-cyan-200">
              <ShieldCheck className="w-4 h-4 text-blue-light" />
              Formula B2B Riservata per Società Dilettantistiche & Giovanili
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Organizza la trasferta di fine anno a <span className="text-fox">Rischio Zero</span> per la società
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Eliminiamo lo stress economico e amministrativo dalla segreteria del tuo club: nessun anticipo gravoso, quote trasparenti per famiglia e la totale libertà di gestire la comitiva secondo le tue regole interne.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/preventivo" className="btn-primary text-sm py-3.5 px-6">
                Richiedi Convenzione Societaria
              </Link>
              <a
                href="https://wa.me/393420394661"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-sm py-3.5 px-6"
              >
                Parla con il Responsabile Tornei
              </a>
            </div>
          </div>
        </div>

        {/* I 4 PUNTI CARDINE DELLA FORMULA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-deep">
              1. Nessun Costo a Carico della Cassa Sociale
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Il club non deve anticipare migliaia di euro. La formula si basa interamente su quota individuale per atleta e accompagnatore. Raccogli le adesioni tramite il nostro kit informativo ed effettui i versamenti solo all&apos;effettivo raggiungimento del numero minimo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-fox/10 text-fox flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-deep">
              2. 1 Gratuità Ogni 20 Paganti per lo Staff Tecnico
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ogni venti persone confermate (tra ragazzi e genitori), una quota soggiorno completa in hotel è totalmente a carico di Sportessence Travel. In questo modo il mister o il dirigente accompagnatore non grava sulle spese societarie.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-light/10 text-blue-light flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-deep">
              3. Segreteria Operativa Dedicata
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ti affianchiamo un tutor unico dal primo contatto fino alle premiazioni della domenica. Ci occupiamo noi di abbinamento camere, diete per celiaci o allergie, coordinamento orari pasti e trasporto sui campi.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-blue-deep">
              4. Riservatezza & Politica No-Prezzi Online
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Non pubblichiamo tariffe sul web per salvaguardare il rapporto di fiducia tra la società sportiva e le famiglie. Ogni comitiva riceve una quotazione dedicata che consente ai dirigenti di gestire autonomamente la quota di trasferta.
            </p>
          </div>

        </div>

        {/* COME FUNZIONA IN 4 PASSI */}
        <div className="bg-cream rounded-3xl p-8 sm:p-12 border border-amber-200 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-fox block mb-1">
              Iter Semplificato
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-blue-deep">
              Come avviare l&apos;iscrizione in 4 semplici passaggi
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-deep text-white font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="font-bold text-blue-deep text-base">Richiesta Bando</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Compili il form indicando categorie ed estimated number di atleti.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-deep text-white font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="font-bold text-blue-deep text-base">Invio Kit Famiglie</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ricevi la locandina grafica personalizzabile e il testo per la chat dei genitori.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-deep text-white font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="font-bold text-blue-deep text-base">Blocco Posto</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Raggiunto il numero di adesioni, blocchi l&apos;hotel e i gironi di gara con un acconto simbolico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 space-y-2">
              <span className="w-8 h-8 rounded-full bg-fox text-white font-black text-sm flex items-center justify-center">
                4
              </span>
              <h4 className="font-bold text-blue-deep text-base">Si Scende in Campo!</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Venerdì vi accogliamo in hotel con i pass gara pronti. Voi pensate solo a giocare!
              </p>
            </div>
          </div>
        </div>

        {/* BOX DIRETTO DI CONTATTO */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 text-center max-w-3xl mx-auto shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-blue-deep">
            Hai domande specifiche per la tua società?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            I nostri referenti sono disponibili telefonicamente anche la sera per chiarire ogni dettaglio organizzativo e formulare una proposta su misura.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/preventivo" className="btn-primary text-sm py-3 px-6">
              Richiedi Preventivo Riservato
            </Link>
            <a
              href="tel:3420394661"
              className="flex items-center gap-2 text-sm font-bold text-blue-deep border border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-fox" />
              Chiama il Responsabile: 342 039 4661
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
