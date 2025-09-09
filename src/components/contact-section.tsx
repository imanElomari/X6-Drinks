import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-blue-500">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already using our template.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-500">Download Template</Button>
          <Button className="border border-white text-white bg-transparent">View Documentation</Button>
        </div>
      </div>
    </section>
  );
}
