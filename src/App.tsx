import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HomeSection } from "./components/home-section";
import { AboutSection } from "./components/about-section";
import { Features } from "./components/features";
import { ProductsSection } from "./components/products";
import { CTA } from "./components/contact-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <HomeSection />
      <AboutSection />
      <Features />
      <ProductsSection />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
