export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-primary text-white text-center px-4 sm:px-8"
    >
      <div className="max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
          data-aos="fade-up"
        >
          Hi, I’m Zach Sewell.
          <br />I build full-stack apps & AI solutions.
        </h1>
        <p className="text-lg sm:text-xl font-body mb-8">
          Full-stack developer with a passion for clean code and creative
          problem-solving.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
