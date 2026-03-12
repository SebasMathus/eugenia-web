"use client";
import { useState } from "react";
import { Nav, Footer, ClientCarousel, VideoSection, WhatsAppIcon, WA_URL, trackWA, GLOBAL_STYLES } from "../../components/eugenia";

export default function Administrador() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Propietarios", icon: "👥", title: "Gestión de propietarios y residentes", desc: "Centraliza toda la información de tu condominio. Administra perfiles, roles y permisos de propietarios y residentes desde un solo panel. Historial completo y acceso rápido." },
    { label: "Áreas comunes", icon: "🏊", title: "Control de áreas comunes", desc: "Visualiza reservaciones por área, establece restricciones de horario y capacidad. El calendario centralizado elimina conflictos y doble reservaciones automáticamente." },
    { label: "Documentos", icon: "📄", title: "Gestión de documentos y comunicados", desc: "Mantén comunicación directa con los residentes. Publica anuncios, consulta registros de accesos, gestiona el directorio y comparte documentos importantes del condominio." },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <style>{GLOBAL_STYLES}</style>
      <Nav activePage="administrador" />

      {/* HERO */}
      <section style={{ background: "linear-gradient(180deg,#F5F3FF 0%,#ffffff 100%)" }}
        className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            ✦ Para administradores de condominio
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Facilita la vida<br />
            <span className="gradient-text">de tus residentes</span><br />
            con Eugenia
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            El sistema más completo para gestionar tu condominio — accesos, cuotas, comunicación y documentos en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => trackWA("admin_hero")}
              className="btn-primary px-8 py-4 rounded-xl text-base">
              <WhatsAppIcon />Adquiere tu demo
            </a>
            <a href="https://app.eugenia.ai/users/login" target="_blank" rel="noopener noreferrer"
              className="btn-outline px-8 py-4 rounded-xl text-base">
              Iniciar sesión →
            </a>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <ClientCarousel />

      {/* VIDEO */}
      <VideoSection />

      {/* TABS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Módulos principales</p>
            <h2 className="text-4xl font-black mb-4">Potentes herramientas para<br />administrar tu condominio</h2>
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
          <div className="bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-4">{tabs[activeTab].title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{tabs[activeTab].desc}</p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWA("admin_modulos")}
                  className="btn-primary px-6 py-3 rounded-xl text-sm">
                  <WhatsAppIcon />Agenda un demo
                </a>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-gray-100">
                  <span className="text-7xl">{tabs[activeTab].icon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Funcionalidades completas</p>
            <h2 className="text-4xl font-black mb-4">Todo lo que necesitas para<br />administrar tu condominio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "💰", title: "Ingresos y egresos", desc: "Registro detallado de pagos, mantenimiento y gastos. Control financiero completo del condominio." },
              { icon: "📋", title: "Centraliza tu información", desc: "Directorio completo de residentes con información detallada y acceso rápido a cada perfil." },
              { icon: "🪪", title: "Credenciales de acceso", desc: "Genera credenciales para personal de seguridad, mantenimiento y proveedores del condominio." },
              { icon: "📢", title: "Comunicación directa", desc: "Publica anuncios y documentos importantes sin llamadas ni grupos de WhatsApp desordenados." },
              { icon: "🎫", title: "Tickets de ayuda", desc: "Gestiona solicitudes de residentes y asegura que cada incidencia se atienda en tiempo y forma." },
              { icon: "💳", title: "Cobro de cuotas", desc: "Los residentes pagan desde la app. Lleva control preciso de cuotas, adeudos y estados de cuenta." },
            ].map(f => (
              <div key={f.title} className="feature-card rounded-2xl p-6">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => trackWA("admin_funcionalidades")}
              className="btn-primary px-8 py-4 rounded-xl text-sm">
              <WhatsAppIcon />Quiero una demo
            </a>
          </div>
        </div>
      </section>

      {/* TIPOS DE USUARIO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Plataformas y usuarios</p>
            <h2 className="text-4xl font-black mb-4">Eugenia para todo tu equipo</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Cada rol tiene su propia interfaz optimizada para su función en el condominio.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { role: "Residente", desc: "App móvil iOS, Android y web", icon: "🏠", color: "bg-blue-50 border-blue-100" },
              { role: "Guardia / Accesos", desc: "App web y app móvil Android", icon: "🛡️", color: "bg-green-50 border-green-100" },
              { role: "Conserje", desc: "App web", icon: "🔧", color: "bg-orange-50 border-orange-100" },
              { role: "Administrador", desc: "Sistema administrativo web completo", icon: "⚙️", color: "bg-violet-50 border-violet-100" },
            ].map(u => (
              <div key={u.role} className={`${u.color} border rounded-2xl p-6 text-center`}>
                <div className="text-3xl mb-3">{u.icon}</div>
                <p className="font-bold text-gray-900 mb-1">{u.role}</p>
                <p className="text-gray-500 text-xs">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL 2 */}
      <ClientCarousel />

      {/* CTA FINAL */}
      <section className="py-28 px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg,#2563EB 0%,#7C3AED 100%)" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">¿Listo para modernizar<br />tu condominio?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Agenda un demo gratuito y te mostramos cómo Eugenia puede transformar la administración de tu condominio en menos de una semana.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => trackWA("admin_cta_final")}
            className="bg-white text-blue-700 font-bold px-10 py-4 rounded-xl text-base inline-flex items-center gap-2 hover:bg-blue-50 transition">
            <WhatsAppIcon />Agenda un demo gratis
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}