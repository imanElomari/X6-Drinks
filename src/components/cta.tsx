import { Button } from "./ui/button"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already using our template to build amazing websites.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Download Template
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  )
}
