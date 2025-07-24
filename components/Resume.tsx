type Props = {
  resumeUrl?: string;
};

export default function Resume({ resumeUrl = "/resume.pdf" }: Props) {
  return (
    <section
      id="resume"
      className="py-20 px-6 bg-white text-[#1C1917] min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-heading text-center mb-8">My Resume</h2>

        {/* Download Button */}
        <div className="text-center mb-12">
          <a
            href="/2025 GZS Resume.pdf"
            download
            className="inline-block bg-[#1C1917] text-white px-6 py-3 rounded-lg shadow hover:bg-[#292524] transition"
          >
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Experience</h3>
            <ul className="space-y-4">
              <li>
                <strong>Full-Stack Developer</strong> – *AI Email Agent Agent*
                <br />
                <span className="text-sm text-gray-600">
                  React, Node.js, OpenAI, PostgreSQL
                </span>
                <p className="mt-1">
                  Built an AI-powered job application assistant that generates
                  personalized emails. Includes full-stack auth, OpenAI API
                  integration, and chat history storage.
                </p>
              </li>
              <li>
                <strong>Full-Stack Developer</strong> – *Food Celebrator* -
                <strong>Capstone</strong>
                <br />
                <span className="text-sm text-gray-600">
                  React, Vite, Express, PostgreSQL
                </span>
                <p className="mt-1">
                  Instagram-style app showcasing celebrations through images and
                  comments. Hosted backend on Render with Imgur-based image
                  uploads. Working on a dynamic team that
                </p>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Education</h3>
            <ul>
              <li>
                <strong>Fullstack Academy</strong> – Certificate in Software
                Development
                <br />
                <span className="text-sm text-gray-600">Completed: 2025</span>
              </li>
              <li>
                <strong>Mid America Christian University</strong> – Business
                Administration and Ethics, Managment Information Systems
                <br />
                <span className="text-sm text-gray-600">Completed: 2024</span>
              </li>
              <li>
                <strong>MNTC</strong> – Certificate in Digital Marketing UX/UI
                Design Development
                <br />
                <span className="text-sm text-gray-600">Completed: 2020</span>
              </li>
            </ul>
          </div>

          {/* Skills Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
            <p>
              Node, Javascript, React, Typescript, Next.js / Redux, Git,
              Express, PostgreSQL / HTML5, CSS3, TailWind / Python / AWS, Google
              Cloud Services (GCS) / Hugging Face, Agentic A.I. / Full-Stack
              Developer / Curious, Ever Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
