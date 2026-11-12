// Cek login
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  // Kalau belum login, paksa ke login page
  window.location.href = "login.html";
}

// Tampilkan nama di hero
const userName = localStorage.getItem("userName");
const greeting = document.getElementById("greeting");

if (userName) {
  greeting.textContent = `Hi ${userName},`;
}

// Logout
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

// ===== MESSAGE FORM FUNCTION =====
const messageForm = document.getElementById("messageForm");

if (messageForm) {
  messageForm.addEventListener("submit", function (e) {
    e.preventDefault(); // supaya halaman tidak refresh

    // Ambil input
    const name = document.getElementById("msgName").value;
    const phone = document.getElementById("msgPhone").value;
    const message = document.getElementById("msgText").value;

    // Ambil gender yang dipilih
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const gender = genderInput ? genderInput.value : "-";

    // Ambil waktu sekarang
    const now = new Date().toString();

    // Tampilkan hasil ke box kanan
    document.getElementById("currentTime").textContent = now;
    document.getElementById("resultName").textContent = name;
    document.getElementById("resultPhone").textContent = phone;
    document.getElementById("resultGender").textContent = gender;
    document.getElementById("resultMessage").textContent = message;
  });
}

function openProject(project) {
  const detail = document.getElementById("projectDetail");
  const title = document.getElementById("projectTitle");
  const desc = document.getElementById("projectDesc");

  // Tampilkan section
  detail.style.display = "block";

  // Ganti isi sesuai project
  if (project === "calculator") {
    title.textContent = "Calculator Website";
    desc.textContent = "This is a simple calculator web application built using HTML, CSS, and JavaScript.";
  } 
  else if (project === "todolist") {
    title.textContent = "To Do List Website";
    desc.textContent = "A task management website to manage daily activities efficiently.";
  } 
  else if (project === "minesweeper") {
    title.textContent = "Mini Minesweeper Game";
    desc.textContent = "A mini minesweeper game built with JavaScript logic and interactive UI.";
  }

  // Smooth scroll ke atas ke section detail
  detail.scrollIntoView({
    behavior: "smooth"
  });
}
