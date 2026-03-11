"use client";
import { useState } from "react";
import Link from "next/link";
import { Nav, Footer, ClientCarousel, VideoSection, WhatsAppIcon, WA_URL, GLOBAL_STYLES } from "../../components/eugenia";

export default function Residente() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Accesos QR", icon: "🔑", title: "Control de accesos con QR", desc: "Controla quién entra a tu hogar con códigos QR personalizados. Genera pases para invitados, familia y empleados — con fecha y hora definida. Recibe notificaciones de cada entrada y salida." },
    { label: "Tickets", icon: "🎫", title: "Tickets de ayuda", desc: "Reporta cualquier problema o sugerencia directamente desde la app. Da seguimiento a tus solicitudes y mantén comunicación directa con tu administrador sin llamadas." },
    { label: "Paquetería", icon: "📦", title: "Paquetería inteligente", desc: "Recibe una notificación al instante cuando llega un paquete a la recepción. Consulta el historial completo de entradas y salidas desde tu celular." },
    { label: "Reservaciones", icon: "📅", title: "Reservación de áreas comunes", desc: "Reserva el salón, la alberca o el gimnasio en menos de 30 segundos. Consulta disponibilidad en tiempo real, cancela o modifica cuando quieras." },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <style>{GLOBAL_STYLES}</style>
      <Nav activePage="residente" />

      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg,#EFF6FF 0%,#ffffff 100%)" }}
        className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ Para residentes de condominio
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Tu condominio<br />
            <span className="gradient-text">armonizado</span><br />
            desde tu celular
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Controla accesos, reserva amenidades, paga cuotas y recibe notificaciones — todo desde la palma de tu mano. Gratis para residentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl text-base">
              <WhatsAppIcon />Quiero Eugenia en mi condominio
            </a>
          </div>
          <div className="flex gap-3 justify-center">
            <a href="https://apps.apple.com/mx/app/bait/id1445227484" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 text-white text-xs font-semibold px-5 py-3 rounded-xl flex items-center gap-2">🍎 App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.bait.nextiati.bait&hl=es" target="_blank" rel="noopener noreferrer"
              className="bg-gray-900 text-white text-xs font-semibold px-5 py-3 rounded-xl flex items-center gap-2">🤖 Google Play</a>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <ClientCarousel />

      {/* VIDEO */}
      <VideoSection />

      {/* TABS FUNCIONALIDADES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Funcionalidades</p>
            <h2 className="text-4xl font-black mb-4">Experiencia de residente única</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Todo lo que necesitas para vivir en tu condominio sin complicaciones.</p>
          </div>
          <div className="flex gap-2 justify-center mb-10 flex-wrap">
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === i ? "text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                style={activeTab === i ? { background: "linear-gradient(135deg,#2563EB,#7C3AED)" } : {}}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 rounded-3xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-4">{tabs[activeTab].title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{tabs[activeTab].desc}</p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-xl text-sm">
                  <WhatsAppIcon />Agenda un demo
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                  <span className="text-7xl">{tabs[activeTab].icon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESOS QR */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Procesos QR</p>
            <h2 className="text-4xl font-black mb-4">Creación y seguimiento<br />de accesos con QR</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Genera credenciales digitales para tu personal y pases de acceso para tus invitados — con fecha, hora y vigencia definida.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🪪", title: "Credenciales digitales", desc: "Crea credenciales para empleados domésticos, guardias y personal de mantenimiento." },
              { icon: "👥", title: "Pases de invitados", desc: "Define nombre, fecha y hora — el código llega directo al celular de tu visita." },
              { icon: "📋", title: "Historial de accesos", desc: "Consulta quién entró, cuándo y durante cuánto tiempo en cualquier momento." },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-xl text-sm">
              <WhatsAppIcon />Agenda un demo
            </a>
          </div>
        </div>
      </section>

      {/* RESERVACIONES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">Reservaciones</p>
          <h2 className="text-4xl font-black mb-4">Reserva espacios en<br />menos de 30 segundos</h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Sin llamadas, sin WhatsApps al administrador. El calendario de tu condominio siempre disponible desde la app.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            {["Consulta horarios disponibles al instante", "Agenda en el calendario desde la app", "Cancela o modifica en cualquier momento", "Recibe notificaciones de confirmación", "Consulta tu historial de reservaciones", "Recibe avisos de cancelaciones"].map(i => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-xl px-4 py-3">
                <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs shrink-0">✓</span>
                {i}
              </div>
            ))}
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="btn-primary px-8 py-4 rounded-xl text-base">
            <WhatsAppIcon />Quiero Eugenia en mi condominio
          </a>
        </div>
      </section>

      {/* PLATAFORMAS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-3">Plataformas</p>
          <h2 className="text-4xl font-black mb-4">Disponible en todas partes</h2>
          <p className="text-gray-500 mb-10">Interfaz intuitiva y pensada para todos. Mismas funcionalidades en móvil y web.</p>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {[
              { icon: "📱", title: "App móvil", desc: "Notificaciones, códigos QR, reservaciones, estados de cuenta y más — todo en tu celular.", badge: "iOS & Android" },
              { icon: "💻", title: "App web", desc: "Mismas funcionalidades que la app móvil, más creación masiva de códigos QR para eventos.", badge: "Todos los navegadores" },
            ].map(p => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 text-left">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{p.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL 2 */}
      <ClientCarousel />

      {/* APP DOWNLOAD */}
      <section className="py-20 px-6 text-white"
        style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Descarga la app de Eugenia</h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto">Disponible para iOS, Android y Huawei. Completamente gratuita para los residentes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://apps.apple.com/mx/app/bait/id1445227484" target="_blank" rel="noopener noreferrer"
              className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 justify-center">
              🍎 Descargar en App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bait.nextiati.bait&hl=es" target="_blank" rel="noopener noreferrer"
              className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition flex items-center gap-2 justify-center">
              🤖 Descargar en Google Play
            </a>
          </div>
          <p className="text-blue-200 text-sm mb-3">¿Tu condominio aún no tiene Eugenia?</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm transition">
            <WhatsAppIcon />Pídele a tu administrador que la adopte
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}