import Contact from '../sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-12 pb-24">
      {/* We do NOT pass variant="preview" here, ensuring the full form loads */}
      <Contact />
    </div>
  );
}