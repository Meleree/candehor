"use client";

import Image from "next/image";
import { useState } from "react";
import { Orbitron, Space_Grotesk, Sora } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const data = {
  meta: "BUENOS AIRES · PRESS KIT 2026",
  nameTop: "CANDELA",
  nameBottom: "HORACEK",
  tagline: "Techno selector · de lo hipnótico al groove más crudo",

  bio: `Candela Horacek es DJ de Buenos Aires.
Activa en escena desde 2023, ha tocado en venues como Niceto Club, TCQ, Vox y Ruda Bar, y en circuitos de Mar del Plata y La Plata junto a productoras como Latin Gateo, Cultura Expansión y Club Remix.

También colaboró con Una Cada Tanto, Vandal Arts, Vecinos Fiesta y Akelarre Producciones — donde ejerció como curadora y coordinadora de eventos.

Su sonido recorre el techno hipnótico, el groove, el hard groove y el detroit, adaptándose al horario y al piso sin perder identidad. Ha grabado sesiones para Minau Radio, Tucca Premiere, EXIT y Arzaffel.`,

  phrase:
    "Lo que busco son espacios donde ser y compartir a través de la música la experiencia colectiva del arte.",
};

const gallery = [
  "/presskit/photo7.jpg",
  "/presskit/photo2.jpg",
  "/presskit/photo5.jpg",
  "/presskit/photo4.jpg",
  "/presskit/photo3.jpg",
  "/presskit/photo1.jpg",
];

const youtube = {
  profile: "https://www.youtube.com/@CandelaHor",
  profileImage: "/presskit/photo2.jpg",
  videos: [
    "https://www.youtube.com/watch?v=YPVDg3Z_7Cc",
    "https://www.youtube.com/watch?v=yUsTVahzzX4",
    "https://www.youtube.com/watch?v=JjiIPnXqyxc",
  ],
};

const soundcloud = {
  profile: "https://soundcloud.com/candelahoracek",
  profileImage: "/presskit/photo8.jpg",
  tracks: [
    "https://soundcloud.com/candelahoracek/warmup-groove-break?si=e94e9a5b32a84f1b8c81e4be3f8d9b56&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "https://soundcloud.com/candelahoracek/candela-h-r-set-minau-radio?si=6389b5f523a04a9f9f67572c459f132a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "https://soundcloud.com/candelahoracek/candela-hor-videoset-thanks-2025?si=ab138a8bb1bb48d986445b2c3ef13fe3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "https://soundcloud.com/candelahoracek/dj-set-psychedelic-game-iv-2025?si=8cf849975ca34227b9939ae29d9f8ce4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "https://soundcloud.com/candelahoracek/dancing-mood-candela-hor?si=a19f682ccdf946e38892e190705325bd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  ],
};

const mixcloud = {
  profile: "https://www.mixcloud.com/horacek/",
  profileImage: "/presskit/photo9.jpg",
  setUrl:
    "https://www.mixcloud.com/horacek/dj-set-bounce-hipnotico-candela-h%C3%B8r/",
};

const contact = {
  instagram: "https://www.instagram.com/candelahoracek",
  profileImage: "/presskit/photo7.jpg",
};

function getYouTubeId(url: string) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }

    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }

    return null;
  } catch {
    return null;
  }
}

function soundcloudEmbed(trackUrl: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
}

function mixcloudEmbed(url: string) {
  return `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=0&light=0&feed=${encodeURIComponent(
    url
  )}`;
}

/* =========================
   PROFILE CARD
========================= */

function ProfileCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <article className="space-y-3">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block w-[200px] max-w-full overflow-hidden border border-white/10"
        aria-label={`Ir al perfil de ${title}`}
      >
        <div className="relative h-[200px] w-[200px] max-w-full">
          <Image
            src={image}
            alt={`Perfil ${title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </a>

      <p className={`${spaceGrotesk.className} text-xs uppercase tracking-[0.22em] text-zinc-500`}>
        {title}
      </p>
    </article>
  );
}

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const prev = () =>
    setActiveIndex((p) =>
      p === null ? null : p === 0 ? gallery.length - 1 : p - 1
    );

  const next = () =>
    setActiveIndex((p) =>
      p === null ? null : p === gallery.length - 1 ? 0 : p + 1
    );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main
      className={`${sora.className} min-h-screen bg-[#0b0c0e] text-[#e8e8e8]`}
    >
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0e]/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
          {/* LOGO */}
          <a
            href="#inicio"
            className={`${orbitron.className} text-xs font-bold tracking-[0.3em] text-white`}
          >
            C.H
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-5 xl:flex">
            <a href="#inicio" className={`${spaceGrotesk.className} nav-link`}>
              Inicio
            </a>

            <a href="#biografia" className={`${spaceGrotesk.className} nav-link`}>
              Biografía
            </a>

            <a href="#galeria" className={`${spaceGrotesk.className} nav-link`}>
              Galería
            </a>

            <a href="#presentaciones" className={`${spaceGrotesk.className} nav-link`}>
              Presentaciones
            </a>

            <a href="#youtube" className={`${spaceGrotesk.className} nav-link`}>
              YouTube
            </a>

            <a href="#soundcloud" className={`${spaceGrotesk.className} nav-link`}>
              SoundCloud
            </a>

            <a href="#mixcloud" className={`${spaceGrotesk.className} nav-link`}>
              Mixcloud
            </a>

            <a href="#rider-tecnico" className={`${spaceGrotesk.className} nav-link`}>
              Rider Técnico
            </a>

            <a href="#contacto" className={`${spaceGrotesk.className} nav-link`}>
              Contacto
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 xl:hidden"
            aria-label="Abrir menú"
          >
            <span
              className={`block h-px w-6 bg-white transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-6 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-6 bg-white transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0c0e] px-6 py-6 xl:hidden">
            <div className="grid gap-5 text-center">
              <a
                onClick={closeMenu}
                href="#inicio"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Inicio
              </a>

              <a
                onClick={closeMenu}
                href="#biografia"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Biografía
              </a>

              <a
                onClick={closeMenu}
                href="#galeria"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Galería
              </a>

              <a
                onClick={closeMenu}
                href="#presentaciones"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Presentaciones
              </a>

              <a
                onClick={closeMenu}
                href="#youtube"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                YouTube
              </a>

              <a
                onClick={closeMenu}
                href="#soundcloud"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                SoundCloud
              </a>

              <a
                onClick={closeMenu}
                href="#mixcloud"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Mixcloud
              </a>

              <a
                onClick={closeMenu}
                href="#rider-tecnico"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Rider Técnico
              </a>

              <a
                onClick={closeMenu}
                href="#contacto"
                className={`${spaceGrotesk.className} mobile-nav-link`}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* =========================
          CONTENEDOR PRINCIPAL
      ========================= */}

      <div className="mx-auto w-full max-w-[920px] px-5 md:px-8 lg:px-0">
        {/* =========================
            HERO
        ========================= */}

        <section id="inicio" className="scroll-mt-24 pt-8 md:pt-14">
          <p className={`${spaceGrotesk.className} text-[9px] uppercase tracking-[0.32em] text-zinc-500 md:text-[10px]`}>
            {data.meta}
          </p>

          <div className="pt-6 md:pt-10">
            <h1
              className={`${orbitron.className} text-[58px] font-black leading-[0.85] tracking-[-0.06em] sm:text-[80px] md:text-[110px] lg:text-[140px]`}
            >
              <span className="block text-[#eeeeee]">
                {data.nameTop}
              </span>

              <span className="block text-zinc-600">
                {data.nameBottom}
              </span>
            </h1>
          </div>
        </section>

        {/* =========================
            TAGLINE
        ========================= */}

        <section className="mt-10 border-b border-white/10 pb-10 md:pb-12">
          <p className={`${spaceGrotesk.className} border-l border-white/20 pl-4 text-[10px] tracking-[0.08em] text-zinc-500 md:text-sm`}>
            {data.tagline}
          </p>
        </section>

        {/* =========================
            BIOGRAFÍA
        ========================= */}

        <section
          id="biografia"
          className="scroll-mt-24 py-12 md:py-16"
        >
          <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* TEXTO */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <h2
                  className={`${spaceGrotesk.className} whitespace-nowrap text-[9px] uppercase tracking-[0.28em] text-zinc-500`}
                >
                  Biografía
                </h2>

                <span className="h-px w-full bg-white/10" />
              </div>

              <div className="text-[12px] leading-[2.05] text-zinc-300 md:text-[13px]">
                <p className="whitespace-pre-line">{data.bio}</p>
              </div>
            </div>

            {/* FOTO */}
            <div className="relative min-h-[480px] w-full overflow-hidden border border-white/5 sm:min-h-[600px] md:min-h-[680px]">
              <Image
                src="/presskit/photo6.jpg"
                alt="Candela Horacek"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-xs backdrop-blur">
                ◉
              </div>
            </div>
          </div>

          {/* FRASE */}
          <blockquote className="mt-12 max-w-3xl border-l border-white/25 pl-5 md:pl-7">
            <p className={`${spaceGrotesk.className} text-base leading-relaxed text-zinc-200 md:text-xl`}>
              {data.phrase}
            </p>
          </blockquote>
        </section>

        {/* =========================
            GALERÍA
        ========================= */}

        <section
          id="galeria"
          className="scroll-mt-24 border-y border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            Galería
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((src, i) => (
              <button
                key={`${src}-${i}`}
                onClick={() => setActiveIndex(i)}
                className="group relative aspect-square overflow-hidden border border-white/10 bg-black"
                aria-label={`Abrir imagen ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`Galería ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </section>

        {/* =========================
            PRESENTACIONES
        ========================= */}

        <section
          id="presentaciones"
          className="scroll-mt-24 border-b border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            Presentaciones
          </h2>

          <div className="grid gap-x-12 gap-y-6 text-sm text-zinc-400 md:grid-cols-2">
            <p>
              <span className={`${spaceGrotesk.className} text-white`}>Niceto Club</span>
              <br />
              Club · Buenos Aires
            </p>

            <p>
              <span className={`${spaceGrotesk.className} text-white`}>TCQ</span>
              <br />
              Club · Buenos Aires
            </p>

            <p>
              <span className={`${spaceGrotesk.className} text-white`}>Vox · Ruda Bar</span>
              <br />
              Club · Buenos Aires
            </p>

            <p>
              <span className={`${spaceGrotesk.className} text-white`}>Latin Gateo</span>
              <br />
              Mar del Plata
            </p>

            <p>
              <span className={`${spaceGrotesk.className} text-white`}>
                Cultura Expansión × Club Remix
              </span>
              <br />
              La Plata
            </p>

            <p>
              <span className={`${spaceGrotesk.className} text-white`}>
                Minau · EXIT · Tucca · Arzaffel
              </span>
              <br />
              Radio / Podcast
            </p>
          </div>
        </section>

        {/* =========================
            FOTO GRANDE
        ========================= */}

        <section className="border-b border-white/10 py-10 md:py-14">
          <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden border border-white/10 md:h-[65vh]">
            <Image
              src="/presskit/photo5.jpg"
              alt="Candela Horacek"
              fill
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* =========================
            YOUTUBE
        ========================= */}

        <section
          id="youtube"
          className="scroll-mt-24 border-b border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            YouTube
          </h2>

          <ProfileCard
            title="YouTube"
            image="/presskit/photo2.jpg"
            href={youtube.profile}
          />

          <div className="mt-10 grid gap-8">
            {youtube.videos.map((url) => {
              const id = getYouTubeId(url);

              if (!id) return null;

              return (
                <div
                  key={url}
                  className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube ${id}`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================
            SOUNDCLOUD
        ========================= */}

        <section
          id="soundcloud"
          className="scroll-mt-24 border-b border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            SoundCloud
          </h2>

          <ProfileCard
            title="SoundCloud"
            image="/presskit/photo8.jpg"
            href={soundcloud.profile}
          />

          <div className="mt-10 grid gap-6">
            {soundcloud.tracks.map((track) => (
              <div
                key={track}
                className="overflow-hidden border border-white/10"
              >
                <iframe
                  title={track}
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={soundcloudEmbed(track)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            MIXCLOUD
        ========================= */}

        <section
          id="mixcloud"
          className="scroll-mt-24 border-b border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            Mixcloud
          </h2>

          <ProfileCard
            title="Mixcloud"
            image="/presskit/photo9.jpg"
            href={mixcloud.profile}
          />

          <div className="mt-10 overflow-hidden border border-white/10">
            <iframe
              title="Mixcloud set Candela Horacek"
              width="100%"
              height="180"
              frameBorder="0"
              src={mixcloudEmbed(mixcloud.setUrl)}
            />
          </div>
        </section>

        {/* =========================
            RIDER TÉCNICO
        ========================= */}

        <section
          id="rider-tecnico"
          className="scroll-mt-24 border-b border-white/10 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            Rider Técnico
          </h2>

          <div className="border border-white/10">
            {/* FORMATO */}
            <div className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Formato
              </p>

              <p className="text-sm text-zinc-200">
                USB / Rekordbox
              </p>
            </div>

            {/* REPRODUCTORES */}
            <div className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Reproductores
              </p>

              <p className="text-sm text-zinc-200">
                Pioneer CDJ-2000NXS2, CDJ-3000 o superior
              </p>
            </div>

            {/* CANTIDAD */}
            <div className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Cantidad
              </p>

              <p className="text-sm text-zinc-200">
                Mínimo 2 reproductores
              </p>
            </div>

            {/* MIXER */}
            <div className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Mixer
              </p>

              <p className="text-sm text-zinc-200">
                Pioneer DJM-900NXS2, DJM-A9 o equivalente
              </p>
            </div>

            {/* MONITOREO */}
            <div className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Monitoreo
              </p>

              <p className="text-sm text-zinc-200">
                Monitor de cabina independiente
              </p>
            </div>

            {/* CONDICIONES */}
            <div className="grid gap-3 p-5 md:grid-cols-[180px_1fr] md:p-7">
              <p className={`${spaceGrotesk.className} text-[10px] uppercase tracking-[0.15em] text-zinc-600`}>
                Condiciones
              </p>

              <p className="text-sm leading-relaxed text-zinc-200">
                El equipamiento deberá encontrarse correctamente instalado y
                funcionando antes del inicio del set.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            CONTACTO
        ========================= */}

        <section
          id="contacto"
          className="scroll-mt-24 py-10 md:py-14"
        >
          <h2
            className={`${spaceGrotesk.className} mb-7 text-[10px] uppercase tracking-[0.28em] text-zinc-500`}
          >
            Contacto
          </h2>

          <ProfileCard
            title="Instagram"
            image={contact.profileImage}
            href={contact.instagram}
          />
        </section>
      </div>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-white/10 py-8 text-center text-[9px] uppercase tracking-[0.25em] text-zinc-600">
        Candela Horacek · Press Kit 2026
      </footer>

      {/* =========================
          MODAL GALERÍA
      ========================= */}

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* CERRAR */}
          <button
            className="absolute right-4 top-4 z-10 border border-white/20 bg-black/70 px-4 py-2 text-lg"
            onClick={() => setActiveIndex(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* ANTERIOR */}
          <button
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-black/70 px-4 py-2 text-2xl md:left-8"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* IMAGEN */}
          <div className="relative h-[80vh] w-[85vw] max-w-6xl">
            <Image
              src={gallery[activeIndex]}
              alt={`Imagen ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* SIGUIENTE */}
          <button
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-black/70 px-4 py-2 text-2xl md:right-8"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      )}

      {/* =========================
          ESTILOS
      ========================= */}

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .nav-link {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #71717a;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .mobile-nav-link {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #a1a1aa;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover {
          color: #ffffff;
        }
      `}</style>
    </main>
  );
}

