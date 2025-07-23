import { Github, Linkedin } from "lucide-react";

type FooterProps = {
  githubUrl?: string;
  linkedinUrl?: string;
};

export default function Footer() {
  return (
    <footer className="bg-[#FFF7ED] text-[#1C1917] py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1C1917] hover:text-primary transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1C1917] hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="#hero"
            className="bg-primary text-white px-3 py-1 rounded hover:bg-accent transition text-sm"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
