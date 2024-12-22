// script.ts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Capture personal information
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
        const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
        const profilePicture = profilePictureInput.files ? URL.createObjectURL(profilePictureInput.files[0]) : '';

        // Capture education
        const degree = (document.getElementById('education-degree') as HTMLInputElement).value;
        const school = (document.getElementById('education-school') as HTMLInputElement).value;
        const gradYear = (document.getElementById('education-year') as HTMLInputElement).value;

        // Capture work experience
        const position = (document.getElementById('work-position') as HTMLInputElement).value;
        const company = (document.getElementById('work-company') as HTMLInputElement).value;
        const duration = (document.getElementById('work-duration') as HTMLInputElement).value;

        // Capture skills
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

        // Generate resume HTML
        resumeContainer.innerHTML = `
            <section class="section personal-info">
                ${profilePicture ? `<img src="${profilePicture}" alt="Profile Picture" class="profile-pic">` : ''}
                <h1>${name}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                ${linkedin ? `<p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>` : ''}
            </section>

            <section class="section education">
                <h2>🎓 Education</h2>
                <p>${degree} - ${school}</p>
                ${gradYear ? `<p>Year of Graduation: ${gradYear}</p>` : ''}
            </section>

            <section class="section work-experience">
                <h2>💼 Work Experience</h2>
                <p>${position} at ${company}</p>
                ${duration ? `<p>Duration: ${duration}</p>` : ''}
            </section>

            <section class="section skills">
                <h2>🛠️ Skills</h2>
                <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            </section>
        `;

        // Show the resume container
        resumeContainer.style.display = 'block';
    });
});
