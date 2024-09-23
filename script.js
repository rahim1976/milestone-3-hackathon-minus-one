// Form Validation for empty fields
function isFieldEmpty(field) {
  return field.value.trim() === "";
}
// alert message if the fields are empty
function showError(field) {
  field.style.borderColor = "red";
}
function clearError(field) {
  field.style.borderColor = "";
}
//
function validateForm() {
  var fullName = document.getElementById("fullName");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var location = document.getElementById("location");
  var education = document.getElementById("education");
  var experience = document.getElementById("experience");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var isValid = true;
  [
    fullName,
    email,
    phone,
    location,
    education,
    experience,
    skills,
    projects,
  ].forEach(function (field) {
    if (isFieldEmpty(field)) {
      showError(field);
      isValid = false;
    } else {
      clearError(field);
    }
  });
  return isValid;
}
function previewImage(event) {
  var input = event.target;
  var profileDisplay = document.getElementById("profile-display");
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var _a;
      profileDisplay.src =
        (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// for generating the resume
function generateResume() {
  if (!validateForm()) {
    alert("Please fill out all required fields.");
    return;
  }
  // this is to get the form data
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var location = document.getElementById("location").value;
  var education = document.getElementById("education").value;
  var experience = document.getElementById("experience").value;
  var skills = document.getElementById("skills").value;
  var projects = document.getElementById("projects").value;
  document.getElementById("name-display").textContent = fullName;
  document.getElementById("email-display").textContent = email;
  document.getElementById("phone-display").textContent = phone;
  document.getElementById("location-display").textContent = location;
  document.getElementById("education-display").textContent = education;
  document.getElementById("experience-display").textContent = experience;
  document.getElementById("skills-display").textContent = skills;
  document.getElementById("projects-display").textContent = projects;
  // this will show the resume and will hide the form
  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-display").style.display = "block";
}
document
  .getElementById("generate-resume")
  .addEventListener("click", generateResume);
document.getElementById("profile-img").addEventListener("change", previewImage);
