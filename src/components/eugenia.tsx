"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const WA_URL = "https://wa.me/message/PGDWRLH5HQTQI1";

export function trackWA(location: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: location,
    });
  }
}

export const CAROUSEL_LOGOS = [
  "/BosquesLomasVerdas.png",
  "/Boudica.png",
  "/Citadel.png",
  "/ClubCampestre.png",
  "/CVLP.png",
  "/Habitat.png",
  "/LDR.png",
  "/MarinaSur.png",
  "/NewCity.png",
  "/P14.png",
  "/Privee.png",
  "/Retama.png",
  "/SEI.png",
  "/Sora.png",
  "/TDP.png",
  "/Toscana.png",
  "/UVP.png",
];

export function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ClientCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.5;
    const animate = () => {
      if (!pausedRef.current && track) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const logos = [...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS];

  return (
    <section className="py-12 px-6 border-y border-gray-100 bg-white overflow-hidden">
      <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">
        Residenciales que han confiado en nosotros
      </p>
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div ref={trackRef} className="flex items-center gap-16 w-max">
          {logos.map((src, i) => (
            <div key={i} className="flex items-center justify-center h-14 w-40 shrink-0">
              <img
                src={src}
                alt="Residencial cliente Eugenia"
                className="max-h-12 max-w-36 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Nav({ activePage }: { activePage?: "residente" | "administrador" | "home" }) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/eugenia_logo.png" alt="Eugenia" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className={`transition-colors ${activePage === "home" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>
            Acerca de Eugenia
          </Link>
          <Link href="/residente" className={`transition-colors ${activePage === "residente" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>
            Residente
          </Link>
          <Link href="/administrador" className={`transition-colors ${activePage === "administrador" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}>
            Administrador
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.eugenia.ai/users/login" target="_blank" rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Iniciar sesión
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-4 py-2 rounded-lg text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
            onClick={() => trackWA("nav")}>
            <WhatsAppIcon />Agenda un demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-3 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-1">
          <Link href="/" onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "home" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>
            Acerca de Eugenia
          </Link>
          <Link href="/residente" onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "residente" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>
            Residente
          </Link>
          <Link href="/administrador" onClick={() => setOpen(false)}
            className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activePage === "administrador" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-gray-50"}`}>
            Administrador
          </Link>
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
            <a href="https://app.eugenia.ai/users/login" target="_blank" rel="noopener noreferrer"
              className="text-center border border-blue-600 text-blue-600 font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
              Iniciar sesión
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="text-center inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-lg text-white"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
              onClick={() => trackWA("nav_mobile")}>
              <WhatsAppIcon />Agenda un demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <img
            src="/eugenia_logo.png"
            alt="Eugenia"
            className="h-8 w-auto mb-4"
            style={{ filter: "invert(1) brightness(2)" }}
          />
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            La app de condominios más completa de América Latina.
          </p>
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            C. Montes Urales 424<br />
            Lomas - Virreyes, Lomas de Chapultepec V Secc.<br />
            Miguel Hidalgo, 11000<br />
            Ciudad de México, CDMX
          </p>
          <a
            href="mailto:sebastian@eugenia.ai"
            className="text-gray-500 text-sm hover:text-white transition-colors block mt-2"
          >
            sebastian@eugenia.ai
          </a>
        </div>
        <div className="flex gap-16 text-sm">
          <div>
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4 font-semibold">Producto</p>
            <div className="flex flex-col gap-2.5 text-gray-400">
              <Link href="/residente" className="hover:text-white transition-colors">Soy residente</Link>
              <Link href="/administrador" className="hover:text-white transition-colors">Soy administrador</Link>
              <a href="https://app.eugenia.ai/users/login" className="hover:text-white transition-colors">Iniciar sesión</a>
            </div>
          </div>
          <div>
            <p className="text-gray-500 uppercase text-xs tracking-widest mb-4 font-semibold">Descargar</p>
            <div className="flex flex-col gap-2.5 text-gray-400">
              <a href="https://apps.apple.com/mx/app/bait/id1445227484" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">iOS</a>
              <a href="https://play.google.com/store/apps/details?id=com.bait.nextiati.bait&hl=es" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Android</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-gray-600 text-xs">© 2026 Eugenia. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4">
          <a href="https://nextia.mx" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 text-xs hover:text-white transition-colors">
            A product by <span className="font-semibold text-gray-400">Nextia</span>
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors"
            onClick={() => trackWA("footer")}>
            <WhatsAppIcon />Contactar por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export function VideoSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Eugenia en acción</p>
          <h2 className="text-3xl md:text-4xl font-black mb-3">Mira cómo funciona</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Conoce todo lo que Eugenia puede hacer por tu condominio en menos de 1 minuto.
          </p>
        </div>
        <div
          className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/nbSVgnVTsgI"
            title="Eugenia - App de condominios"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  * { font-family: 'Inter', sans-serif; }
  .gradient-text { background: linear-gradient(135deg,#2563EB 0%,#7C3AED 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .btn-primary { background: linear-gradient(135deg,#2563EB,#7C3AED); color:white; display:inline-flex; align-items:center; gap:8px; font-weight:600; transition:all 0.2s; }
  .btn-primary:hover { opacity:0.9; transform:translateY(-1px); box-shadow:0 8px 24px rgba(37,99,235,0.3); }
  .btn-outline { border:1.5px solid #2563EB; color:#2563EB; display:inline-flex; align-items:center; gap:8px; font-weight:600; transition:all 0.2s; background:white; }
  .btn-outline:hover { background:#EFF6FF; }
  .section-label { font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#2563EB; }
  .feature-card { border:1px solid #E5E7EB; transition:all 0.2s; background:white; }
  .feature-card:hover { border-color:#2563EB; box-shadow:0 4px 24px rgba(37,99,235,0.08); transform:translateY(-2px); }
`;