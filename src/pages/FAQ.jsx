import { Helmet } from 'react-helmet';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Frequently Asked Questions | STONEWISE Construction</title>
        <meta name="description" content="Find answers to common questions about STONEWISE Construction services, process, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#563D40] to-[#896267] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Everything you need to know about our construction services, process, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FAQ showAll={true} />
        </div>
      </section>
    </div>
  );
}
