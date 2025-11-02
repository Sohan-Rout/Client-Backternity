import HeroSection from "@/components/hero-section";
import Content from "@/components/content-1";
import Border from "@/components/ui/border";
import ComponentsShowcase from '@/components/sections/components-showcase';
import Testimonials from '@/components/sections/testimonials';
import ContactUs from '@/components/sections/contact-us';
export default function Home(){
  return(
    <>
    <section className="font-grotesk">
      <HeroSection/>
    </section>

    <section>
      <Border />
    </section>

    <section className="font-grotesk">
      <Content />
    </section>

    <section>
      <Border />
    </section>

    <section className="font-grotesk">
      <ComponentsShowcase />
    </section>

    <section>
      <Border />
    </section>

    <section className="font-grotesk">
      <Testimonials />
    </section>

    <section>
      <Border />
    </section>

    <section className="font-grotesk  ">
      <ContactUs />
    </section>
    </>
  )
}