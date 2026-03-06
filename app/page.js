const nilaiUtama = [
  {
    title: "Sumber Resmi & Transparan",
    description:
      "Data dikumpulkan dari sumber resmi pemerintah dan referensi hukum yang dapat ditelusuri."
  },
  {
    title: "Terstruktur, Bukan Sekadar PDF",
    description:
      "Pasal, ayat, putusan, dan regulasi dapat dicari secara spesifik tanpa harus membuka dokumen panjang satu per satu."
  },
  {
    title: "Dibuat untuk Pencarian Cepat",
    description:
      "Temukan dokumen hukum secara efisien dengan sistem pencarian yang dirancang untuk profesional dan publik."
  }
];

const statistik = [
  { value: "12.000+", label: "Ribuan Peraturan" },
  { value: "850.000+", label: "Ribuan Putusan" },
  { value: "3,2 Juta+", label: "Pasal Terstruktur" },
  { value: "1,1 Juta+", label: "Data Legal Perusahaan" },
  { value: "< 1 Detik", label: "Akses Cepat & Terbuka" }
];

const kategori = [
  {
    title: "Undang-Undang",
    count: "4.250 item",
    description: "UU nasional beserta perubahan dan catatan pasal terkait."
  },
  {
    title: "Peraturan Pemerintah",
    count: "2.180 item",
    description: "Peraturan turunan yang terhubung dengan undang-undang induk."
  },
  {
    title: "Peraturan Presiden",
    count: "1.130 item",
    description: "Kebijakan strategis tingkat nasional dalam format terstruktur."
  },
  {
    title: "Peraturan Menteri",
    count: "3.900 item",
    description: "Regulasi sektoral lintas kementerian dengan metadata rinci."
  },
  {
    title: "Peraturan Daerah",
    count: "7.800 item",
    description: "Perda provinsi dan kabupaten/kota untuk kebutuhan komparatif."
  },
  {
    title: "KUHP",
    count: "2 versi",
    description: "Akses KUHP klasik dan terbaru dengan navigasi pasal per pasal."
  },
  {
    title: "Putusan Pengadilan",
    count: "850.000+ item",
    description: "Putusan MA, MK, dan peradilan lain yang dapat dicari cepat."
  },
  {
    title: "Legalitas Perusahaan",
    count: "1,1 juta+ profil",
    description:
      "Data legal perusahaan untuk due diligence dan validasi korporasi."
  }
];

const hasilPencarian = [
  {
    title: "UU Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi",
    type: "Undang-Undang",
    status: "Berlaku",
    summary:
      "Mengatur hak subjek data, kewajiban pengendali, dan sanksi administratif maupun pidana.",
    highlight:
      "Pasal 65: Setiap orang yang secara melawan hukum memperoleh atau mengungkapkan data pribadi..."
  },
  {
    title: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
    type: "Konstitusi",
    status: "Berlaku",
    summary:
      "Landasan tertinggi hukum Indonesia, termasuk prinsip HAM, kewenangan lembaga negara, dan perekonomian nasional.",
    highlight:
      "Pasal 28D ayat (1): Setiap orang berhak atas pengakuan, jaminan, perlindungan, dan kepastian hukum..."
  },
  {
    title: "Kitab Undang-Undang Hukum Pidana (KUHP Baru)",
    type: "KUHP",
    status: "Transisi Implementasi",
    summary:
      "Modernisasi ketentuan pidana nasional dengan penyesuaian asas, pidana, dan jenis tindak pidana.",
    highlight:
      "Bab Ketentuan Umum: Definisi pidana pokok, pidana tambahan, serta pedoman pemidanaan."
  },
  {
    title: "Putusan Mahkamah Agung Nomor 1234 K/PID/2024",
    type: "Putusan Pengadilan",
    status: "Final",
    summary:
      "Pertimbangan hakim terkait unsur kesengajaan dan alat bukti elektronik dalam perkara pidana.",
    highlight:
      "Amar putusan: Menolak permohonan kasasi dan menguatkan putusan pengadilan tingkat banding."
  },
  {
    title: "PT Nusantara Digital Tbk - Profil Legal Perusahaan",
    type: "Legalitas Perusahaan",
    status: "Terverifikasi",
    summary:
      "Ringkasan akta pendirian, perubahan terakhir, NIB, klasifikasi KBLI, dan kepatuhan dokumen.",
    highlight:
      "Status izin usaha aktif, pembaruan dokumen terakhir 12 Januari 2026."
  }
];

const pengguna = [
  {
    title: "Advokat",
    description: "Akses cepat putusan dan dasar hukum untuk analisis perkara."
  },
  {
    title: "In-house Legal",
    description: "Pantau kepatuhan regulasi dan dukung pengambilan keputusan bisnis."
  },
  {
    title: "Perusahaan",
    description:
      "Verifikasi legalitas mitra dan kurangi risiko hukum dalam operasional."
  },
  {
    title: "Akademisi",
    description:
      "Gunakan data terstruktur untuk kajian hukum, publikasi, dan pengajaran."
  },
  {
    title: "Mahasiswa Hukum",
    description: "Belajar lebih efisien dengan navigasi pasal dan putusan yang jelas."
  },
  {
    title: "Peneliti",
    description: "Lakukan riset berbasis data hukum dengan pencarian lintas dokumen."
  },
  {
    title: "Masyarakat Umum",
    description: "Memahami aturan secara lebih mudah lewat informasi yang terbuka."
  }
];

const saranPencarian = [
  "uud 1945",
  "perlindungan konsumen",
  "putusan pidana",
  "legalitas perusahaan",
  "ketenagakerjaan"
];

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://poroshukum.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Poros Hukum",
    url: siteUrl,
    description:
      "Pusat data hukum digital Indonesia untuk akses putusan, pasal, KUHP, regulasi, dan legal perusahaan."
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Poros Hukum",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />

      <header className="site-nav">
        <div className="container nav-row">
          <a href="#" className="logo">
            <span className="logo-mark">PH</span>
            <span>Poros Hukum</span>
          </a>
          <nav className="nav-links">
            <a href="#cari">Cari</a>
            <a href="#jelajahi">Jelajahi</a>
            <a href="#api">API</a>
            <a href="#">ALAN AI</a>
            <a href="#tentang">Tentang</a>
          </nav>
          <a href="#" className="btn btn-sm btn-primary">
            Mulai Gratis
          </a>
        </div>
      </header>

      <main>
        <section id="cari" className="hero section-gap">
          <div className="container hero-wrap reveal">
            <p className="eyebrow">Platform Database Hukum Indonesia</p>
            <h1>Temukan dasar hukum yang Anda butuhkan</h1>
            <p className="hero-sub">
              Akses putusan, pasal, KUHP, regulasi, dan legal perusahaan
              Indonesia dalam satu platform yang cepat, terbuka, dan
              terstruktur.
            </p>

            <div className="search-panel">
              <label htmlFor="search" className="sr-only">
                Pencarian hukum
              </label>
              <input
                id="search"
                type="text"
                placeholder="Cari pasal, putusan, undang-undang, regulasi, atau nama perusahaan..."
              />
              <button className="btn btn-primary">Cari Sekarang</button>
            </div>

            <div className="suggestions">
              {saranPencarian.map((item) => (
                <a key={item} href="#" className="tag">
                  {item}
                </a>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#" className="btn btn-primary">
                Cari Sekarang
              </a>
              <a href="#" className="btn btn-ghost">
                Lihat Demo
              </a>
            </div>
          </div>
        </section>

        <section id="tentang" className="section-gap">
          <div className="container reveal delay-1">
            <div className="section-head">
              <h2>Hukum Indonesia yang lebih mudah diakses</h2>
              <p>
                Dirancang agar informasi hukum lebih terbuka, mudah dicari, dan
                mudah diverifikasi.
              </p>
            </div>
            <div className="grid three-col">
              {nilaiUtama.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap muted-surface">
          <div className="container reveal delay-2">
            <div className="section-head compact">
              <h2>Skala data hukum yang siap dipakai</h2>
              <p>Ringkas, terukur, dan relevan untuk kebutuhan profesional.</p>
            </div>
            <div className="stats-grid">
              {statistik.map((item) => (
                <article className="stat-card" key={item.label}>
                  <p className="stat-value">{item.value}</p>
                  <p className="stat-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="jelajahi" className="section-gap">
          <div className="container reveal">
            <div className="section-head">
              <h2>Jelajahi Berdasarkan Jenis</h2>
              <p>
                Masuk ke jenis dokumen yang paling relevan untuk perkara,
                riset, atau kebutuhan kepatuhan Anda.
              </p>
            </div>
            <div className="grid four-col">
              {kategori.map((item) => (
                <article className="card category-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="card-count">{item.count}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap muted-surface">
          <div className="container reveal delay-1">
            <div className="section-head">
              <h2>Preview Hasil Pencarian</h2>
              <p>
                Tampilan hasil yang bersih dengan konteks inti: jenis dokumen,
                status, ringkasan, dan potongan pasal.
              </p>
            </div>
            <div className="results-list">
              {hasilPencarian.map((item) => (
                <article key={item.title} className="result-item">
                  <div className="result-top">
                    <h3>{item.title}</h3>
                    <span className="status">{item.status}</span>
                  </div>
                  <p className="result-meta">{item.type}</p>
                  <p>{item.summary}</p>
                  <p className="highlight">{item.highlight}</p>
                  <a href="#" className="btn-link">
                    Lihat Detail
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap">
          <div className="container reveal delay-2">
            <div className="section-head">
              <h2>Dibangun untuk kebutuhan hukum sehari-hari</h2>
              <p>
                Dari praktik litigasi sampai riset akademik, semua mendapatkan
                alur kerja yang lebih efisien.
              </p>
            </div>
            <div className="grid users-grid">
              {pengguna.map((item) => (
                <article className="card user-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="api" className="section-gap muted-surface">
          <div className="container api-section reveal">
            <div>
              <p className="eyebrow">API & Teknologi</p>
              <h2>Terhubung untuk pengembangan dan integrasi</h2>
              <p>
                Gunakan API untuk menghubungkan data hukum ke aplikasi internal,
                riset, knowledge base, atau sistem legal perusahaan.
              </p>
            </div>
            <div className="api-actions">
              <a href="#" className="btn btn-primary">
                Lihat Dokumentasi API
              </a>
              <a href="#" className="btn btn-ghost">
                Hubungi Tim
              </a>
            </div>
          </div>
        </section>

        <section className="section-gap">
          <div className="container trust-box reveal delay-1">
            <h2>Data hukum yang dapat ditelusuri</h2>
            <ul>
              <li>Rujukan ke sumber resmi pemerintah dan lembaga terkait.</li>
              <li>Transparansi data dan histori pembaruan yang jelas.</li>
              <li>Struktur dokumen yang mudah diverifikasi lintas referensi.</li>
            </ul>
            <p className="disclaimer">
              Konten ini bukan nasihat hukum. Untuk kepastian, selalu rujuk
              dokumen resmi dan/atau konsultasikan dengan profesional hukum.
            </p>
          </div>
        </section>

        <section className="section-gap cta-band">
          <div className="container cta-inner reveal">
            <h2>Mulai telusuri hukum Indonesia dengan lebih cepat</h2>
            <p>
              Poros Hukum membantu Anda menemukan aturan, putusan, dan
              informasi hukum secara lebih efisien dan terpercaya.
            </p>
            <a href="#" className="btn btn-primary">
              Mulai Gratis
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <a href="#" className="logo">
            <span className="logo-mark">PH</span>
            <span>Poros Hukum</span>
          </a>
          <nav className="footer-links">
            <a href="#cari">Cari</a>
            <a href="#jelajahi">Jelajahi</a>
            <a href="#api">API</a>
            <a href="#tentang">Tentang</a>
            <a href="#">Kontak</a>
            <a href="#">Kebijakan Privasi</a>
          </nav>
          <p>(c) 2026 Poros Hukum. Platform Database Hukum Indonesia.</p>
        </div>
      </footer>
    </div>
  );
}
