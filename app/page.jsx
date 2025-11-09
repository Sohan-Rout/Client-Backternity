import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import EmeraldGlowDivider from "@/components/ui/EmeraldGlowDivider";
import ComponentsShowcase from '@/components/sections/components-showcase';
import Testimonials from '@/components/sections/testimonials';
import ContactUs from '@/components/sections/contact-us';
export default function Home(){
  return(
    <div>
    <section className="font-grotesk">
      <HeroSection/>
    </section>

    <section>
      <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
    </section>

    <section id="features" className="font-grotesk">
      <Content />
    </section>

    <section>
      <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
    </section>

    <section id="solutions" className="font-grotesk">
      <ComponentsShowcase />
    </section>

    <section>
      <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
    </section>

    <section id="testimonials" className="font-grotesk">
      <Testimonials />
    </section>

    <section>
      <EmeraldGlowDivider height={2} pulseSpeed={3} glowIntensity={0.5} />
    </section>

    <section id="contact" className="font-grotesk  ">
      <ContactUs />
    </section>
    </div>
  )
}