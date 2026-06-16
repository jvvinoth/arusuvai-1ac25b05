import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import AtmosphereSection from './components/AtmosphereSection';
import VisitSection from './components/VisitSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <AtmosphereSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
