import { Music, Book, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
            <Music className="h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            MusikaLiterasi
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#fitur" className="hover:text-gray-900 transition-colors">Fitur</a>
          <a href="#koleksi" className="hover:text-gray-900 transition-colors">Koleksi</a>
          <a href="#mulai" className="hover:text-gray-900 transition-colors">Mulai</a>
        </nav>
        <a
          href="#mulai"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
        >
          <Book className="h-4 w-4" />
          Jelajahi
        </a>
      </div>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
    </header>
  );
}
