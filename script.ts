// Form Validation for empty fields
function isFieldEmpty(field: HTMLInputElement | HTMLTextAreaElement): boolean {
    return field.value.trim() === "";
}

// alert message if the fields are empty
function showError(field: HTMLInputElement | HTMLTextAreaElement) {
    field.style.borderColor = 'red';
}

function clearError(field: HTMLInputElement | HTMLTextAreaElement) {
    field.style.borderColor = '';
}

// 
function validateForm(): boolean {
    const fullName = document.getElementById('fullName') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const location = document.getElementById('location') as HTMLInputElement;
    const education = document.getElementById('education') as HTMLTextAreaElement;
    const experience = document.getElementById('experience') as HTMLTextAreaElement;
    const skills = document.getElementById('skills') as HTMLTextAreaElement;
    const projects = document.getElementById('projects') as HTMLTextAreaElement;

    let isValid = true;

    [fullName, email, phone, location, education, experience, skills, projects].forEach(field => {
        if (isFieldEmpty(field)) {
            showError(field);
            isValid = false;
        } else {
            clearError(field);
        }
    });

    return isValid;
}

function previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const profileDisplay = document.getElementById('profile-display') as HTMLImageElement;

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileDisplay.src = e.target?.result as string;
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
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;

    (document.getElementById('name-display') as HTMLLegendElement).textContent = fullName;
    (document.getElementById('email-display') as HTMLSpanElement).textContent = email;
    (document.getElementById('phone-display') as HTMLSpanElement).textContent = phone;
    (document.getElementById('location-display') as HTMLSpanElement).textContent = location;
    (document.getElementById('education-display') as HTMLDivElement).textContent = education;
    (document.getElementById('experience-display') as HTMLDivElement).textContent = experience;
    (document.getElementById('skills-display') as HTMLDivElement).textContent = skills;
    (document.getElementById('projects-display') as HTMLDivElement).textContent = projects;

    // this will show the resume and will hide the form 
    document.getElementById('resume-form')!.style.display = 'none';
    document.getElementById('resume-display')!.style.display = 'block';
}

document.getElementById('generate-resume')!.addEventListener('click', generateResume);
(document.getElementById('profile-img') as HTMLInputElement).addEventListener('change', previewImage);
