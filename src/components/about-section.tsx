import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg mb-6 leading-relaxed">----------</p>
            <p className="text-lg mb-8 leading-relaxed">
              Our team combines creativity with technical excellence to build websites and applications that not only look great but also perform exceptionally well.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
