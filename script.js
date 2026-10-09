// Show / hide password
var pwInput = document.getElementById("password");
var toggleBtn = document.getElementById("toggle-password");
var eyeOpen = toggleBtn.querySelector(".eye--open");
var eyeClosed = toggleBtn.querySelector(".eye--closed");

toggleBtn.addEventListener("click", function () {
  var show = pwInput.type === "password";
  pwInput.type = show ? "text" : "password";
  toggleBtn.setAttribute("aria-pressed", show ? "true" : "false");
  toggleBtn.setAttribute("aria-label", show ? "Hide password" : "Show password");
  eyeOpen.hidden = show;
  eyeClosed.hidden = !show;
});

// Basic form validation (demo only, no backend)
var form = document.getElementById("signin-form");
var identity = document.getElementById("identity");
var statusBox = document.getElementById("form-status");

function check(input, errorId) {
  var error = document.getElementById(errorId);
  var empty = input.value.trim() === "";
  error.hidden = !empty;
  input.setAttribute("aria-invalid", empty ? "true" : "false");
  return !empty;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var okId = check(identity, "identity-error");
  var okPw = check(pwInput, "password-error");

  if (!okId) {
    identity.focus();
  } else if (!okPw) {
    pwInput.focus();
  }

  statusBox.textContent = okId && okPw ? "Signing you in..." : "";
});
