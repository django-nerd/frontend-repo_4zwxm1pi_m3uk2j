import { motion } from "framer-motion";

export default function Showcase() {
  return (
    <section id="koleksi" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Koleksi Modul Interaktif
            </h2>
            <p className="mt-4 text-gray-600">
              Jelajahi kurasi modul yang menggabungkan teks, suara, dan visual. Dirancang untuk belajar mandiri maupun kolaboratif.
            </p>
            <div className="mt-6 flex gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-sm font-medium">
                Bahasa & Sastra
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                Musik & Audio
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                Kreativitas
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
                  title: "Analisis Lirik",
                  tag: "Pemahaman Teks",
                },
                {
                  img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
                  title: "Ritme Kata",
                  tag: "Kosa Kata",
                },
                {
                  img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop",
                  title: "Cerita Harmoni",
                  tag: "Narasi Audio",
                },
                {
                  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
                  title: "Studio Kreatif",
                  tag: "Produksi Teks",
                },
              ].map((c) => (
                <motion.a
                  key={c.title}
                  href="#mulai"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs uppercase tracking-wide text-fuchsia-600 font-semibold">
                      {c.tag}
                    </span>
                    <h3 className="mt-1 font-semibold text-gray-900">{c.title}</h3>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-emerald-500" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
