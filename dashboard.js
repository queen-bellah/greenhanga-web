// ✅ Step 1: Check if admin is logged in
if (!localStorage.getItem("isLoggedIn")) {
  // Not logged in – redirect to login
  window.location.href = "login.html";
}

// ✅ Step 2: Run this after the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("admin-welcome");
  if (welcome) {
    welcome.textContent = "🔥 Welcome back, Admin! You can now manage your site.";
  }

  
