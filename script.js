window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const overlay = document.querySelector('.hero-overlay');
  const scrollY = window.scrollY;


  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



  // Scroll untuk header
  if (scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Scroll untuk hero overlay (semakin scroll, semakin solid warnanya)
  const maxScroll = 300;
  let opacity = Math.min(scrollY / maxScroll, 1);
  overlay.style.opacity = opacity;
});

document.getElementById('formPendaftaran').addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const alamat = document.getElementById("alamat").value;
      const kategori = document.getElementById("kategori").value;
      const jenisKelamin = document.querySelector('input[name="jk"]:checked');

      // Validasi
      if (!nama || !email || !alamat || !kategori || !jenisKelamin) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
}

      // Konfirmasi
      const yakin = confirm(`Apakah data yang Anda masukkan sudah benar?

      Nama           : ${nama}
      Jenis Kelamin  : ${jenisKelamin.value}
      Alamat         : ${alamat}
      Email          : ${email}
      Kategori Lomba : ${kategori}`);

      if (!yakin) {
        alert("Silakan periksa kembali data Anda.");
        return;
      }

      // Prompt form
      const usia = prompt('Berapakah Usia Anda?');
      if (!usia) {
        alert('Data usia tidak diisi. Pendaftaran dibatalkan.');
        return;
      }

      // Tampilkan hasil
      alert("Pendaftaran berhasil!\n\n" +
        "Nama: " + nama + "\n" +
        "Jenis Kelamin: " + jenisKelamin.value + "\n" +
        "Alamat: " + alamat + "\n" +
        "Email: " + email + "\n" +
        "Kategori: " + kategori + "\n" +
        "Usia: " + usia);

      this.reset();
       });

  document.querySelector(".footer-form").addEventListener("submit", function (e) {
        e.preventDefault(); 

        alert("Terima kasih telah mengirimkan pesan kepada kami! Kami akan segera mengirimkan informasi terbaru seputar lomba dan kegiatan nasional kepada Anda.");
        
        this.reset(); 
      });
