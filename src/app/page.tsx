"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, ClientCarousel, VideoSection, WhatsAppIcon, WA_URL, GLOBAL_STYLES } from "../components/eugenia";

const TEAM = [
  { name: "Sebastián", role: "Account Manager", img: "/Sebastian.png" },
  { name: "Lorena", role: "Growth Manager", img: "/Lore.webp" },
  { name: "Gerardo", role: "Growth Manager", img: "/Gerardo.webp" },
  { name: "Luis", role: "Dev Team", img: "/Luis.png" },
  { name: "David", role: "Tech Lead", img: "/Davi.webp" },
];

const FAQS = [
  { q: "¿Cómo puedo adquirir Eugenia para mi condominio?", a: "Escríbenos por WhatsApp y te enviamos una cotización personalizada en menos de 24 horas. Nos adaptamos al tamaño y tipo de tu condominio." },
  { q: "¿Qué tipos de condominios son compatibles?", a: "Eugenia funciona en condominios residenciales, edificios de departamentos, conjuntos habitacionales, clubes deportivos, estacionamientos y oficinas." },
  { q: "¿Mis datos están seguros?", a: "Sí. Usamos encriptación avanzada en todos los datos. Los códigos QR de acceso son únicos por condominio y no pueden reutilizarse fuera de él." },
  { q: "¿En qué dispositivos funciona?", a: "En todos. Eugenia tiene app móvil para iOS y Android, app web para computadoras y laptops, y se integra con hardware de control de acceso físico." },
  { q: "¿Qué incluye el soporte técnico?", a: "Soporte por WhatsApp, correo y teléfono. Nuestro equipo está disponible en horario de oficina y para urgencias 24/7." },
  { q: "¿Los códigos QR son seguros?", a: "Los códigos QR generados por los residentes cuentan con encriptación y son válidos únicamente para el condominio al que pertenecen." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <span className="text-xl text-blue-500 shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </div>
      {open && <p className="mt-3 text-gray-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <style>{GLOBAL_STYLES}</style>
      <Nav activePage="home" />

      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg,#EFF6FF 0%,#ffffff 100%)" }}
        className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ La app de condominios todo-en-uno
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Administra tu<br />
            <span className="gradient-text">condominio</span><br />
            sin complicaciones
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Control de accesos, cuotas, áreas comunes, paquetería y comunicación — todo en una sola app para residentes y administradores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl text-base">
              <WhatsAppIcon />Agenda un demo gratis
            </a>
            <Link href="/residente" className="btn-outline px-8 py-4 rounded-xl text-base">
              Ver funcionalidades →
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 text-xs text-gray-400 font-medium">
            <span>✓ Implementación en 48h</span>
            <span>✓ Soporte incluido</span>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <ClientCarousel />

      {/* VIDEO */}
      <VideoSection />

      {/* STATS */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { n: "+4.5 ⭐", label: "Estrellas en tiendas" },
            { n: "+10,000", label: "Usuarios en la plataforma" },
            { n: "+7 años", label: "En el mercado" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-4xl font-black text-gray-900 mb-1">{s.n}</div>
              <p className="text-gray-500 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOS PERFILES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Para todos en tu condominio</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Una app, dos experiencias</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Eugenia está diseñada para que residentes y administradores tengan exactamente lo que necesitan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-5">Para residentes</div>
              <h3 className="text-2xl font-black mb-3">Tu condominio en la palma de tu mano</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Crea pases QR para invitados, reserva áreas comunes, paga cuotas, recibe notificaciones de paquetes y reporta incidencias — sin salir de la app.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {["Accesos con código QR", "Reservación de amenidades", "Pago de cuotas", "Paquetería y notificaciones"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-500">✓</span>{i}</li>
                ))}
              </ul>
              <Link href="/residente" className="btn-outline px-6 py-3 rounded-xl text-sm">
                Ver funcionalidades →
              </Link>
            </div>
            <div className="rounded-3xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full mb-5">Para administradores</div>
              <h3 className="text-2xl font-black mb-3">Gestiona todo tu condominio desde un panel</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Controla accesos, cobra cuotas, administra áreas comunes, gestiona documentos y mantén comunicación directa con todos tus residentes.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {["Panel web completo", "Control de ingresos y egresos", "Gestión de propietarios", "Tickets y comunicados"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-violet-500">✓</span>{i}</li>
                ))}
              </ul>
              <Link href="/administrador"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-colors hover:bg-violet-50"
                style={{ border: "1.5px solid #7C3AED", color: "#7C3AED" }}>
                Ver funcionalidades →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Funcionalidades</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Todo lo que necesita<br />tu condominio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔑", title: "Control de accesos", desc: "Accesos inteligentes con códigos QR encriptados. Cada residente genera sus propios pases para visitantes — válidos por tiempo limitado." },
              { icon: "📅", title: "Áreas comunes", desc: "Reservaciones de amenidades en segundos. El calendario centralizado evita conflictos y el administrador tiene visibilidad total." },
              { icon: "💳", title: "Pago de cuotas", desc: "Cobros automáticos, recordatorios inteligentes y estados de cuenta al día. Reduce la morosidad sin perseguir a los residentes." },
              { icon: "📦", title: "Paquetería", desc: "Notificación inmediata cuando llega un paquete. Registro completo de entradas y salidas." },
              { icon: "🎫", title: "Tickets de ayuda", desc: "Los residentes reportan incidencias directamente desde la app. El administrador da seguimiento y cierra tickets." },
              { icon: "📢", title: "Comunidad", desc: "Comunicados, avisos y foros en un solo lugar. Sin grupos de WhatsApp caóticos." },
            ].map(f => (
              <div key={f.title} className="feature-card rounded-2xl p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl text-base">
              <WhatsAppIcon />Agenda un demo
            </a>
          </div>
        </div>
      </section>

      {/* CAROUSEL 2 */}
      <ClientCarousel />

      {/* PLATAFORMAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Plataformas</p>
            <h2 className="text-4xl font-black mb-4">Funciona en todos tus dispositivos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: "📱", title: "App móvil", desc: "iOS y Android. Para residentes, guardias y personal de seguridad.", badge: "iOS & Android", bg: "bg-blue-50" },
              { icon: "💻", title: "App web", desc: "Panel completo para administradores desde cualquier navegador.", badge: "Todos los navegadores", bg: "bg-violet-50" },
              { icon: "🔌", title: "Hardware", desc: "Integración con lectores QR, torniquetes y sistemas físicos de acceso.", badge: "Integración física", bg: "bg-gray-50" },
            ].map(p => (
              <div key={p.title} className={`${p.bg} rounded-2xl p-7 text-center border border-gray-100`}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-block bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">{p.badge}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl p-10 text-white text-center"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-black mb-2">Descarga la app gratis</h3>
                <p className="text-blue-100 text-sm max-w-sm">Completamente gratuita para todos los residentes del condominio.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a href="https://apps.apple.com/mx/app/bait/id1445227484" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 justify-center text-sm">
                  🍎 App Store
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.bait.nextiati.bait&hl=es" target="_blank" rel="noopener noreferrer"
                  className="bg-white text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 justify-center text-sm">
                  🤖 Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA MID */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">¿Tu condominio sigue usando grupos de WhatsApp y Excel?</h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            En menos de 48 horas tu condominio puede estar corriendo en Eugenia.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary px-10 py-4 rounded-xl text-base">
            <WhatsAppIcon />Escríbenos ahora
          </a>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">El equipo</p>
            <h2 className="text-4xl font-black mb-4">Las personas detrás de Eugenia</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Un equipo pequeño y enfocado, construyendo la mejor app de condominios de América Latina.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {TEAM.map(m => (
              <div key={m.name} className="text-center w-40">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-gray-100">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Preguntas frecuentes</p>
            <h2 className="text-4xl font-black">Resolvemos tus dudas</h2>
          </div>
          {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">¿Tienes otra pregunta?</p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-7 py-3 rounded-xl text-sm">
              <WhatsAppIcon />Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CAROUSEL 3 */}
      <ClientCarousel />

      {/* CTA FINAL */}
      <section className="py-28 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg,#2563EB 0%,#7C3AED 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Tu condominio merece<br />una mejor herramienta.</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Únete a los cientos de condominios que ya administran todo con Eugenia. Demo gratis, sin compromiso.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl text-base inline-flex items-center gap-2 hover:bg-blue-50 transition">
            <WhatsAppIcon />Agenda un demo gratis
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}