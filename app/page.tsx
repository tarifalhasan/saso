import Assemble from "@/components/Assemble";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("http://sosa.green/"),
  title: {
    default: "$SOSA",
    template: `%s | $SOSA`,
  },
  description:
    "$SOSA, the meme coin with a big mission: to free Satoshi and his dream. $SOSA isn't just any coin; ",
  alternates: {
    canonical: `http://sosa.green/`,
    languages: {
      en: "en-US",
    },
  },
  icons: "/sosa.svg",
};
export default function Home() {
  return (
    <>
      <Hero />
      <Assemble />
      <Footer />
    </>
  );
}
