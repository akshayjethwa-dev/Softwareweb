import SEO from '../components/SEO';
import Contact from '../sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-12 pb-24">
      <SEO 
        title="Contact Us & Book a Consultation | Ashrey Systems"
        description="Ready to scale? Contact Ashrey Systems to book a free 30-minute technical roadmap consultation and solve your operational bottlenecks."
      />
      {/* Notice we do NOT pass variant="preview" here, rendering the full detailed form */}
      <Contact />
    </div>
  );
}