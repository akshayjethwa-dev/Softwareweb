import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import CaseStudies from '../sections/CaseStudies';
import Founder from '../sections/Founder';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={2} showViewAll={true} />
      <WhyUs />
      <CaseStudies limit={2} showViewAll={true} />
      <Founder />
      <Testimonials limit={3} showViewAll={true} />
      <Contact variant="preview" />
    </>
  );
}