import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return <Component {...pageProps} />;
}
