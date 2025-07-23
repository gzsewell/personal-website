type Props = {
  email?: string;
  github?: string;
  linkedin?: string;
};

export default function Contact({
  email = "zach.softwaredev@gmail.com",
  github = "https://github.com/gzsewell",
  linkedin = "https://www.linkedin.com/in/gzsewell/",
}: Props) {
  return (
    <section id="contact" className="py-20 px-6 bg-[#FFF7ED] text-[#1C1917]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl font-heading mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contact
        </h2>
        <p className="text-lg font-body">
          Reach out via{" "}
          <a href={`mailto:${email}`} className="text-primary underline">
            email
          </a>{" "}
          or check out my{" "}
          <a href={github} className="ml-1 text-primary underline">
            GitHub
          </a>{" "}
          or connect with me on{" "}
          <a href={linkedin} className="text-primary underline" target="_blank">
            Linkedin
          </a>
          .
        </p>
      </div>
    </section>
  );
}
