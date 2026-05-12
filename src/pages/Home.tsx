import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import Industries from '../sections/Industries';
import CaseStudies from '../sections/CaseStudies';
import Founder from '../sections/Founder';
import Process from '../sections/Process';
import TechStack from '../sections/TechStack';
import Guarantees from '../sections/Guarantees';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Industries />
      <CaseStudies />
      <Founder />
      <Process />
      <TechStack />
      <Guarantees />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
