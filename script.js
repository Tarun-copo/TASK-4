const passwordInput = document.getElementById('password');
const feedback = document.getElementById('passwordFeedback');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strongPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (strongPassword.test(password)) {
    feedback.textContent = "Strong password 💪";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Weak password ⚠️ (Use 8+ chars incl. uppercase, number, special)";
    feedback.style.color = "red";
  }
});
document.getElementById('showMore').addEventListener('change', (e) => {
  const extra = document.getElementById('extraField');
  extra.style.display = e.target.checked ? 'block' : 'none';
});
const routes = {
  home: "<h1>Welcome Home</h1>",
  about: "<h1>About Us</h1>"
};

function renderRoute() {
  const hash = location.hash.slice(1) || "home";
  document.getElementById('app').innerHTML = routes[hash] || "<h1>404 - Not Found</h1>";
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("load", renderRoute);
