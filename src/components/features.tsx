import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const features = [
  { title: "Fast & Lightweight", description: "Modern and fast", icon: "⚡" },
  { title: "Responsive Design", description: "Works on all devices", icon: "📱" },
  { title: "Easy to Customize", description: "Adapt easily", icon: "🎨" },
];

export function Features() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Template?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to create a professional website.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
