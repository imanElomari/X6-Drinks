import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Product {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

const products: Product[] = [
  {
    title: "Website Templates",
    description: "Beautiful, responsive templates for any business or personal use.",
    price: "$49",
    features: ["Responsive Design", "SEO Optimized", "Easy Customization", "24/7 Support"],
    icon: "🌐",
  },
  {
    title: "Custom Development",
    description: "Tailored web solutions built specifically for your unique needs.",
    price: "$999",
    features: ["Custom Design", "Full-Stack Development", "Database Integration", "Ongoing Maintenance"],
    icon: "⚡",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment processing and inventory management.",
    price: "$299",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Mobile Optimized"],
    icon: "🛒",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our range of professional web solutions designed to meet your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border border-gray-300 hover:shadow-lg transition-shadow relative">
              <CardHeader>
                <div className="text-4xl mb-4">{product.icon}</div>
                <CardTitle>{product.title}</CardTitle>
                <div className="text-3xl font-bold text-blue-500">{product.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{product.description}</CardDescription>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="default" className="w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
