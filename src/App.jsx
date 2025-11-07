import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MusikaLiterasi. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-900">Ketentuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
