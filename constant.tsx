import { SketchLogoIcon, Pencil2Icon, ImageIcon } from "@radix-ui/react-icons";
import { IoFishOutline } from "react-icons/io5";
import { FaShip } from "react-icons/fa";
import { MdOutlineAdminPanelSettings, MdDeveloperBoard, MdOutlineMenuBook } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { title } from "process";

interface SkillItemProps {
  width: number;
  height: number;
  className: string
}

const config = {
  header: {
    leftMenu: [
      {
        name: "Home",
        id: '/#home'
      },
      {
        name: "Latar Belakang",
        id: '/#skills'
      },
      {
        name: "Sekolah Mitra",
        id: '/#portfolio'
      },
      {
        name: "Kegiatan",
        id: '/#blogs'
      },
      {
        name: "Kontak",
        id: '/#contact'
      },
    ],
    rightMenu: [
      {
        name: "Download APK",
      },
    ],
  },
  banner: {
    title: "Selamat Datang",
    heading: "Kegiatan",
    subTitle:
      "Perdagangan Hasil Perikanan, Peralatan & perlengkapan kapal Ikan, Perbekalan/logistik Kapal Ikan, Operator PKL/Prakerin sekolah kemaritiman Kami, Mengembangkan kegiatan logistik perbekalan kapal perikana, Menjalin hubungan dengan stakeholder terkait dengan pelaksanaan dan penempatan siswa Prakerin / PKL kemaritiman, Mengembangkan kemitraan perusahaan, Melakukan berbagai studi pengembangan perusahaan di masa mendatang.",
    actionButton: [
      {
        name: "Contact Me",
      },
      {
        name: "View portfolio",
      },
    ],
  },
  info: {
    data: [
      {
        title: "10+",
        subTitle: "Mitra Sekolah",
      },
      {
        title: "10+",
        subTitle: "Mitra Perusahaan",
      },
      {
        title: "100+",
        subTitle: "Mitra Lainnya",
      },
    ],
  },
  mySkills: {
    title: "Latar Belakang",
    subTitle: "CV. Samudra Rahayu Perkasa didirikan di Pati pada Tahun 2022.",
    content:
      `Industri perikanan merupakan salah satu dari lima penggerak ekonomi di Indonesia saat ini. Oleh karena itu, pemerintah ingin mendorong industri perikanan agar lebih berkembang.
Pemerintah khususnya Kementerian Kelautan dan Perikanan (KKP) berkomitmen terus memperbaiki sektor perikanan, terutama dengan pengembangan Sistem Logistik Ikan Nasional (SLIN).
MUDR
Sektor kelautan dan perikanan Indonesia masih menghadapi berbagai tantangan, antara lain: penyebaran wilayah produksi dan konsumsi yang sangat luas, kegiatan Illegal Unreported and Unregulated (IUU) Fishing, armada perikanan masih didominasi oleh kapal berukuran kecil, sarana dan prasarana masih terbatas, dan sistem produksi hulu-hilir belum terintegrasi
CV. Samudra Rahayu Perkasa didirikan di Pati pada Tahun 2022 yang merupakan lanjutan dan transformasi dari kegiatan usaha yang sudah berjalan di Juwana pada tahun-tahun sebelumnya.

Kegiatan usaha CV. Samudra Rahayu Perkasa berada di lingkup usaha industri perikanan Juwana - Pati yang sedang berkembang pesat. Pemilihan lokasi dimaksud dengan mempertimbangkan beberapa hal diantaranya adalah kedekatan dengan Tempat Pelelangan Ikan, Syahbandar, cold storage, maupun akses jalan ke kapal tangkap.
Dengan demikian kami akan memberikan pelayanan barang atau jasa yang baik, sehingga dapat menjalin kerjasama dengan stakeholder terkait. Hal tersebut dapat memberikan kontribusi yang sangat berarti dalam menunjang kebijakan pemerintah dalam hal meningkatkan daya saing dalam negeri terutama produk hasil perikanan.`,
    actionButton: {
      name: "Hubungi Kami",
    },
    skills: [
      {
        icon: (props: SkillItemProps) => {
          return <IoFishOutline {...props} />
        },
        title: "Perdagangan Hasil Perikanan",
        subTitle: "Kami menyediakan hasil perikanan segar dan berkualitas langsung dari laut ke meja Anda.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <FaShip {...props} />
        },
        title: "Peralatan & Perlengkapan Kapal Ikan",
        subTitle: "Semua kebutuhan kapal ikan Anda tersedia di sini, dari peralatan hingga perlengkapan terbaik.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <MdOutlineMenuBook {...props} />
        },
        title: "Perbekalan/Logistik Kapal Ikan",
        subTitle: "Logistik perbekalan yang andal untuk memastikan kapal Anda beroperasi tanpa hambatan.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <MdOutlineAdminPanelSettings {...props} />
        },
        title: "Operator PKL/Prakerin Sekolah Kemaritiman",
        subTitle: "Kami menyediakan program Prakerin dan PKL bagi siswa sekolah kemaritiman untuk mendapatkan pengalaman industri nyata.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <MdDeveloperBoard {...props} />
        },
        title: "Pengembangan Logistik Kapal Perikanan",
        subTitle: "Kami terus berinovasi untuk meningkatkan efisiensi logistik kapal perikanan Anda.",
      },
      {
        icon: (props: SkillItemProps) => {
          return <TbCertificate {...props} />
        },
        title: "Studi Pengembangan Perusahaan",
        subTitle: "Kami melakukan studi untuk menemukan peluang pengembangan perusahaan di masa depan.",
      },
    ],
  },
  technologies: {
    title: "Technologies",
    subTitle:
      "I have selected and mentioned here some of i worked projects technologies here",
    technologies: [
      {
        name: "HTML",
      },
      {
        name: "CSS/SCSS",
      },
      {
        name: "JavaScript",
      },
      {
        name: "TypeScript",
      },
      {
        name: "NodeJS",
      },
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
    ],
  },
  portfolio: {
    title: "Pembelajaran",
    subTitle: "Pembelajaran atau Pelatihan Terbaru",
    content:
      "Kami selalu berusaha untuk memberikan informasi terbaru dan terpercaya kepada Anda. Berikut adalah beberapa pembelajaran terbaru kami.",
  },
  blogs: {
    title: "Kegiatan",
    subTitle: "Kegiatan Terbaru",
    content:
      "Kami selalu berusaha untuk memberikan informasi terbaru dan terpercaya kepada Anda. Berikut adalah beberapa kegiatan terbaru kami.",
    actionButton: "Lihat Semua",
  },
  contact: {
    title: "Kontak Kami",
    subTitle: "Kami siap membantu Anda",
    content:
      "Jika Anda memiliki pertanyaan atau butuh bantuan, jangan ragu untuk menghubungi kami. Kami akan dengan senang hati membantu Anda.",
    fields: [
      {
        fieldName: "Nama Lengkap",
      },
      {
        fieldName: "Email",
      },
      {
        fieldName: "Nomor Telepon",
      },
      {
        fieldName: "Lainnya",
      },
      {
        fieldName: "Pesan",
      },
    ],
  },
  contactInfo: {
    call: {
      fieldName: "Telepon",
      value: "+1 12445221",
    },
    email: {
      fieldName: "Email",
      value: "demo@demo.com",
    },
    address: {
      fieldName: "Alamat",
      value: "Pati, Jawa Tengah, Indonesia",
    }
  },
  footer: {
    leftContent: "@ 2024. All Rights Reserved",
    centerContent: "Designed by Anggun Caksono",
  },
};

export { config };
