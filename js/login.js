document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Simpan status login
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);

  // Masuk ke homepage (yang sudah gabung semua section)
  window.location.href = "index.html";
});