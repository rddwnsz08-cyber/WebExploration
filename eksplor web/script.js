document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const experiences = [
  {
    image: "asset/himpunan.jpeg",
    category: "Himpunan Mahasiswa",
    title: "Sekretaris Kabinet 2",
    description:
      "Berperan aktif dalam kegiatan organisasi mahasiswa, mengembangkan kemampuan kepemimpinan, komunikasi, dan kerja sama tim dalam administrasi himpunan.",
    organization: "Himpunan Mahasiswa Pendidikan Multimedia",
    year: "2025 - 2026",
  },

  {
    image: "asset/komunitas.jpeg",
    category: "Komunitas Bandung",
    title: "Tim  Media Kreatif",
    description:
      "Berpartisipasi dalam kegiatan komunitas dan kolaborasi kreatif untuk mengembangkan pengalaman serta memberikan dampak positif.",
    organization: "Komunitas Aksara Rembaka",
    year: "2025 - sekarang",
  },

  {
    image: "asset/duta lingkungan.jpeg",
    category: "Duta Lingkungan Jawa Barat 2026",
    title: "Top 3 Best Public Speaking",
    description:
      "Terlibat dalam kegiatan yang mendukung kepedulian terhadap lingkungan, edukasi, dan kontribusi positif bagi masyarakat.",
    organization: "Asosiasi Duta Lingkungan Jawa Barat",
    year: "2026",
  },

  {
    image: "asset/mc.jpeg",
    category: "Public Speaking",
    title: "MC One Day with Himapedia",
    description:
      "Berpengalaman menjadi Master of Ceremony (MC) dalam acara One Day with Himapedia, mengembangkan kemampuan public speaking, komunikasi, dan membangun suasana acara.",
    organization: "Himpunan Mahasiswa Pendidikan MUltimedia",
    year: "2025",
  },
];

function displayExperiences(experiences) {
  const experienceList = document.querySelector("#course-list");

  experienceList.innerHTML = "";

  experiences.forEach((experience) => {
    experienceList.innerHTML += `
      <div class="menu-card">

        <img
          src="${experience.image}"
          alt="${experience.title}"
        />

        <div class="menu-card-content">

          <span>${experience.category}</span>

          <h3>${experience.title}</h3>

          <p>${experience.description}</p>

          <small>${experience.organization}</small>

          <strong>${experience.year}</strong>

          <a href="#contact">
            Lihat lebih lanjut
          </a>

        </div>

      </div>
    `;
  });
}

displayExperiences(experiences);

getCourses();
