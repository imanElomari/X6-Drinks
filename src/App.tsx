import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { HomeSection } from "./components/home-section";
import { AboutSection } from "./components/about-section";
import { CTA } from "./components/contact-section";
import { Footer } from "./components/footer";
import { ThreeDView } from "./components/3D-view";
import { Gallery } from "./components/gallery";


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
