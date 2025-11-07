export default function CTA() {
  return (
    <section id="mulai" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Siap memadukan nada dan kata?
        </h2>
        <p className="mt-4 text-gray-600">
          Bergabunglah dan coba pengalaman belajar yang berbeda. Gratis untuk memulai, tanpa kartu kredit.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors">
            Buat Akun
          </a>
          <a href="#fitur" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
            Lihat Demo
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Dengan mendaftar, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi.
        </p>
      </div>
    </section>
  );
}
