import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { HomeSection } from "./components/home-section";
import { AboutSection } from "./components/about-section";
import { CTA } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import { ThreeDView } from "./components/3D-view";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <HomeSection />
      <AboutSection />
      <Gallery />
      <ThreeDView />
      <CTA />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
