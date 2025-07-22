import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Sewell | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of a full-stack developer"
        />
      </Head>
      <Navbar />

      <main className="pt-20">
        <Hero />
        {/* We'll add About, Projects, etc. here later */}
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
