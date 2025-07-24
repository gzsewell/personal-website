import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string; // optional
  image?: string; // optional
};

const projects = [
  {
    title: "AI Email Agent",
    description:
      "AI-powered email assistant that crafts personalized job applications.",
    tech: ["Next.js", "React.js", "Node.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/gzsewell/prorespond-agent",
    demo: "https://prorespond.live", // if deployed
    image: "/images/prorespond.png", // optional
  },
  {
    title: "Food Celebrator Social App",
    description:
      "Full stack application Instagram clone with more creative touch.",
    tech: ["React.js", "Vite", "Node.js", "Express.js", "PostgraSQL"],
    github: "https://github.com/gzsewell/prorespond-agent",
    demo: "https://foodcelebrator.onrender.com/", // if deployed
    image: "/images/foodcelebrator.PNG",
  },
  {
    title: "Cinetrails Movie Database",
    description: "Netflix clone showcasing my ability to manipulate APIs",
    tech: ["React.js", "Vite", "Node.js", "Express.js"],
    image: "",
  },
  {
    title: "Book Buddies Library App",
    description:
      "A library app that pull information from an API and leverages authentication to manage users ability to read checked out books.",
    tech: ["React.js", "Vite", "Node.js", "Express.js"],
    image: "",
  },

  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-[#1C1917]">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-heading text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#FFF7ED] rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="mb-4 relative w-full h-56 rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white text-primary text-xs px-2 py-1 rounded border border-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
