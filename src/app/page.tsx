import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullNameUk,
  alternateName: siteConfig.name,
  jobTitle: "Student Software Engineer",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Житомирська політехніка"
  },
  email: `mailto:${siteConfig.emailAddress}`,
  url: siteConfig.baseUrl,
  sameAs: [siteConfig.githubProfile, siteConfig.telegramUrl]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteShell />
    </>
  );
}
