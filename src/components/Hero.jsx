import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-20">
      <div className="absolute inset-0">
        {/* 3D scene background */}
        <Spline
          scene="https://prod.spline.design/4c0rS8h5Wn8D1m6I/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Musik bertemu literasi dalam satu panggung kreatif
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            Temukan cara baru belajar bahasa, sastra, dan cerita melalui irama, ritme, dan harmoni. Rasakan pengalaman imersif yang unik dan menyenangkan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#mulai" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
              Mulai Jelajah
            </a>
            <a href="#fitur" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              Lihat Fitur
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 1}`}
                  alt="avatar"
                  className="h-9 w-9 rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              10k+ pembelajar kreatif telah bergabung
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-6 py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-white/50 bg-white/70 shadow-xl backdrop-blur p-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Ritme Kata", desc: "Belajar kosa kata lewat ketukan musik." },
                { title: "Cerita Harmoni", desc: "Narasi interaktif dengan latar audio." },
                { title: "Analisis Lirik", desc: "Kupas makna dan gaya bahasa lagu." },
                { title: "Studio Kreatif", desc: "Rangkai puisi dengan soundscape." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-4">
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
