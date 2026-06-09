import { Button, Highlight } from "../Homepage/button";
import { Hero, HeroTitle, HeroSubtitle } from "../Homepage/hero";
import { HeroImage } from "../Homepage/hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/casestudies"
      variant="secondary"
      size="small"
    >
      <span>See our latest work — real results for real businesses</span>{" "}
      <Highlight>→</Highlight>
    </Button>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Transform Your Business
      <br className="hidden md:block" /> with Digital Excellence
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Quadcydle delivers end-to-end digital solutions — web design, SEO,
      <br className="hidden md:block" /> social media marketing, and business development — so your brand stands out and grows.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/contact"
      variant="primary"
      size="large"
    >
      <span>Get a Free Quote</span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
