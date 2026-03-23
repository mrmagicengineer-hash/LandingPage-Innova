import React from 'react';

function Stat({label, value}: {label: string; value: string}) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-3">Tu Nombre Aquí</h1>
        <p className="text-lg text-slate-600">Conóceme a nivel global — quién soy, qué hago y cómo conectar</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Sobre mí</h2>
          <p className="text-slate-700">Breve descripción — introduce aquí tu misión, experiencia y lo que te define globalmente. Ej: trabajo con equipos internacionales, hablo varios idiomas y me apasiona resolver problemas con impacto.</p>
        </div>

        <aside className="bg-slate-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-slate-600 mb-4">Resumen</h3>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Países" value="12" />
            <Stat label="Idiomas" value="4" />
            <Stat label="Años" value="8" />
          </div>
        </aside>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Impacto global</h2>
        <p className="text-slate-700 mb-4">Aquí puedes mostrar hitos, proyectos internacionales, colaboraciones y métricas que muestren alcance global.</p>
        <div className="w-full h-44 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-lg flex items-center justify-center text-slate-600">Mapa / Visual (sustituir por mapa SVG o embed)</div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Habilidades y enfoque</h2>
        <ul className="list-disc pl-5 text-slate-700">
          <li>Diseño centrado en el usuario para audiencias internacionales</li>
          <li>Comunicación multilingüe y trabajo remoto</li>
          <li>Estrategia de producto con impacto global</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-slate-700 mb-4">¿Quieres conectar o colaborar? Envíame un correo o usa el enlace a LinkedIn.</p>
        <div className="flex gap-3">
          <a href="#" className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md">Enviar mensaje</a>
          <a href="#" className="inline-block px-4 py-2 border border-slate-200 rounded-md">Ver LinkedIn</a>
        </div>
      </section>

      <footer className="text-center text-slate-500 text-sm">© {new Date().getFullYear()} Tu Nombre — Hecho con Tailwind + Vite</footer>
    </main>
  );
}
