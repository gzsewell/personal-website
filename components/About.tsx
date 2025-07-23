export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#FFF7ED] text-[#1C1917]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2
          className="text-4xl font-heading mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h2>

        <p className="text-lg font-body leading-relaxed">
          I’m a passionate{" "}
          <span className="font-semibold">full-stack developer</span> with a
          strong foundation in building modern web applications using
          technologies like <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Node.js</span>,
          <span className="font-semibold">PostgreSQL</span>, and AI APIs like{" "}
          <span className="font-semibold">OpenAI</span>.
        </p>

        <p className="text-lg font-body leading-relaxed">
          I earned my Software Development certificate from{" "}
          <span className="font-semibold">Fullstack Academy</span>, where I
          built full-stack projects from the ground up and developed a real
          passion for solving complex problems.
        </p>

        <p className="text-lg font-body leading-relaxed">
          My capstone project,{" "}
          <span className="font-semibold">Food Celebrator</span>, is a
          full-stack social app inspired by Instagram built using{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Node</span>, and{" "}
          <span className="font-semibold">PostgreSQL</span>, and deployed on{" "}
          <span className="font-semibold">Render</span>.
        </p>

        <p className="text-lg font-body leading-relaxed">
          I love to learn, build, and collaborate. My current interests include
          <span className="font-semibold"> LLM integration</span>,{" "}
          <span className="font-semibold">clean UI/UX</span>, and building tools
          that make people more productive. I’m actively looking for new
          opportunities to grow and contribute.
        </p>
      </div>
    </section>
  );
}
