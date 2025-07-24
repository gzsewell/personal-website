import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaHotjar,
  FaPeopleArrows,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiOpenai,
  SiTypescript,
  SiPython,
  SiGit,
  SiHuggingface,
  SiSqlite,
  SiAmazonwebservices,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <FaNodeJs /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
  },
  {
    category: "AI / NLP",
    items: [
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Amazon Web Services", icon: <SiAmazonwebservices /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Passion to Learn", icon: <FaHotjar /> },
      { name: "Team Player", icon: <FaPeopleArrows /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#FFF7ED] text-[#1C1917]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-heading mb-12">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-bold mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center space-x-3 p-2 rounded-lg bg-white hover:bg-[#EDE9FE] transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-lg">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
