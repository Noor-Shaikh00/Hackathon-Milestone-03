// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('resume');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture personal information
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var linkedin = document.getElementById('linkedin').value;
        var profilePictureInput = document.getElementById('profile-picture');
        var profilePicture = profilePictureInput.files ? URL.createObjectURL(profilePictureInput.files[0]) : '';
        // Capture education
        var degree = document.getElementById('education-degree').value;
        var school = document.getElementById('education-school').value;
        var gradYear = document.getElementById('education-year').value;
        // Capture work experience
        var position = document.getElementById('work-position').value;
        var company = document.getElementById('work-company').value;
        var duration = document.getElementById('work-duration').value;
        // Capture skills
        var skills = document.getElementById('skills').value.split(',');
        // Generate resume HTML
        resumeContainer.innerHTML = "\n            <section class=\"section personal-info\">\n                ".concat(profilePicture ? "<img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n                <h1>").concat(name, "</h1>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n                ").concat(linkedin ? "<p>LinkedIn: <a href=\"".concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>") : '', "\n            </section>\n\n            <section class=\"section education\">\n                <h2>\uD83C\uDF93 Education</h2>\n                <p>").concat(degree, " - ").concat(school, "</p>\n                ").concat(gradYear ? "<p>Year of Graduation: ".concat(gradYear, "</p>") : '', "\n            </section>\n\n            <section class=\"section work-experience\">\n                <h2>\uD83D\uDCBC Work Experience</h2>\n                <p>").concat(position, " at ").concat(company, "</p>\n                ").concat(duration ? "<p>Duration: ".concat(duration, "</p>") : '', "\n            </section>\n\n            <section class=\"section skills\">\n                <h2>\uD83D\uDEE0\uFE0F Skills</h2>\n                <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n            </section>\n        ");
        // Show the resume container
        resumeContainer.style.display = 'block';
    });
});
