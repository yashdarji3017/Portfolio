import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { About } from "@/components/sections/About";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

/** Structured data for search engines. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: profile.siteUrl,
  sameAs: [profile.github, profile.linkedin],
  address: profile.location,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <EngineeringApproach />
      <About />
      <Writing />
      <Contact />
    </>
  );
}
