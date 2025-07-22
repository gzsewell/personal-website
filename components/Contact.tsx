export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#FFF7ED] text-[#1C1917]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-heading mb-4">Contact</h2>
        <p className="text-lg font-body">
          Reach out via{" "}
          <a href="mailto:you@example.com" className="text-primary underline">
            email
          </a>{" "}
          or connect on
          <a
            href="https://github.com/yourusername"
            className="ml-1 text-primary underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
