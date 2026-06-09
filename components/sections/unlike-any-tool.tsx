import { CommandMenu } from "../Homepage/command-menu";
import { Container } from "../Homepage/container";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../Homepage/keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Everything your business needs
          <br className="hidden md:inline-block" /> to thrive online
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          One agency, every service you need. Quadcydle combines strategy,
          <br className="hidden md:block" /> design, and technology to grow your business — beautifully and effectively.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Built for Business Growth</p>
          <p className="text-md text-primary-text">
            Streamlined workflows, smart tools, and a dedicated team — everything
            you need to manage and scale your digital presence with confidence.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-3xl">Fast Turnarounds</p>
          <p className="text-md text-primary-text">
            We move quickly without cutting corners. Your projects launch on time
            and your digital presence stays ahead of the competition.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
            <LogoLightIllustration />
          </div>
          <p className="mb-4 text-3xl">Modern Brand Aesthetics</p>
          <p className="text-md text-primary-text">
            From logo to landing page, we craft visuals that make your brand
            unforgettable and inspire trust in every customer interaction.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <CommandMenu />
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-3xl">All-in-One Digital Strategy</p>
            <p className="text-md text-primary-text">
              SEO, social media, ads, and web development — all orchestrated
              together under one roof for maximum impact and ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
