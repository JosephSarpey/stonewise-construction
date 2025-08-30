import { Building, Hammer, PaintBucket, Home as HomeIcon, Award, Users, Settings } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what sets STONEWISE Construction apart and why clients trust us for their most important projects.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
            <Award className="mx-auto mb-4 text-[#896267]" size={40} />
            <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
            <p className="text-gray-600">25+ years of industry experience delivering successful projects.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
            <Hammer className="mx-auto mb-4 text-[#896267]" size={40} />
            <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
            <p className="text-gray-600">We use premium materials and skilled professionals for lasting results.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
            <Settings className="mx-auto mb-4 text-[#896267]" size={40} />
            <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">Modern technology and creative approaches for every project.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow text-center">
            <Users className="mx-auto mb-4 text-[#896267]" size={40} />
            <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
            <p className="text-gray-600">Transparent communication and a commitment to your vision.</p>
          </div>
        </div>
      </div>
    </section>
  );
}