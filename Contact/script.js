document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const notification = document.getElementById("notification");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validasi formulir
    const namaLengkap = document.getElementById("namaLengkap").value;
    const telepon = document.getElementById("telepon").value;
    const email = document.getElementById("email").value;
    const namaPerusahaan = document.getElementById("namaPerusahaan").value;
    const pesan = document.getElementById("pesan").value;

    if (!namaLengkap || !telepon || !email || !namaPerusahaan || !pesan) {
      alert("Semua field harus diisi!");
      return;
    }
    // menampilkan notifikasi
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
      contactForm.reset();
    }, 3000);
  });
});
