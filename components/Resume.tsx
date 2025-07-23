type Props = {
  resumeUrl?: string;
};

export default function Resume({ resumeUrl = "/resume.pdf" }: Props) {
  return (
    <section id="resume" className="py-20 px-6 bg-white text-[#1C1917]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl font-heading mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Resume
        </h2>
        <p className="text-lg font-body">
          You can download my resume{" "}
          <a
            href={resumeUrl}
            className="text-primary underline"
            target="_blank"
          >
            {" "}
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
