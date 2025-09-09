import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Build Something <span className="text-blue-500">Amazing</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Create beautiful, modern websites with our simple template.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
  variant="default"
  size="default"
  className="bg-blue-500 text-white hover:bg-blue-600"
>
  Get Started Today
</Button>

<Button variant="default" size="default" className="border border-gray-300">
  Learn More
</Button>

        </div>
      </div>
    </section>
  );
}
