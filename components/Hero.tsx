import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#F87171] text-[#1C1917] overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT: Text + CTAs */}
          <div data-aos="fade-up">
            <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-sm font-semibold shadow">
              Full-Stack Developer
            </span>

            <h1 className="mt-4 text-5xl font-heading font-bold leading-tight sm:text-6xl lg:text-7xl">
              Hi, I’m <span className="text-[#ffffff]">Zach Sewell</span>.<br />
              I build full-stack apps & AI tools.
            </h1>

            <p className="mt-4 max-w-xl text-2xl font-body leading-relaxed">
              JavaScript, React, Node.js, PostgreSQL, and LLM integrations. I
              love clean UI, pragmatic architecture, and shipping polished
              products.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-[#F87171] shadow hover:bg-[#e86262] transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-[#F87171] ring-1 ring-[#F87171]/30 hover:bg-[#FBBF24] hover:text-[#1C1917] transition"
              >
                Contact Me
              </a>
            </div>

            {/* Tech strip */}
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-wide text-[#1C1917]/70">
                Tech I work with
              </p>
              <div className="flex flex-wrap items-center gap-5 opacity-90">
                <Image
                  src="/logos/react.svg"
                  alt="React"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <Image
                  src="/logos/nodedotjs.svg"
                  alt="Node.JS"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <Image
                  src="/logos/postgresql.svg"
                  alt="PostgreSQL"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <Image
                  src="/logos/tailwindcss.svg"
                  alt="Tailwind CSS"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <Image
                  src="/logos/openai.svg"
                  alt="OpenAI"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
                <Image
                  src="/logos/python.svg"
                  alt="Python"
                  width={28}
                  height={28}
                  className="opacity-80"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Project mockup image */}
          <div
            className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[500px]"
            data-aos="zoom-in"
          >
            <Image
              src="/images/hero-project.jpg"
              alt="Featured project preview"
              fill
              className="object-cover"
              priority
            />
            {/* subtle frame line */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
