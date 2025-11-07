import { motion } from "framer-motion";
import { Headphones, BookOpenText, Wand2, Library } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Belajar Lewat Audio",
    desc: "Dengarkan ritme, tangkap makna, dan pahami struktur bahasa dari musik.",
  },
  {
    icon: BookOpenText,
    title: "Literasi Kontekstual",
    desc: "Kembangkan pemahaman teks melalui lirik, cerita, dan dialog interaktif.",
  },
  {
    icon: Wand2,
    title: "Eksperimen Kreatif",
    desc: "Susun puisi, remix kata, dan bangun narasi dengan suara sebagai kanvas.",
  },
  {
    icon: Library,
    title: "Koleksi Kurasi",
    desc: "Jelajahi modul pilihan dari musisi, penulis, dan pendidik.",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Fitur yang Membuat Belajar Jadi Seru
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Didesain untuk rasa penasaran, dibangun untuk proses kreatif.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white grid place-items-center shadow-lg shadow-fuchsia-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
