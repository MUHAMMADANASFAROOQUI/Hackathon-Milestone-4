var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Close the parenthesis here
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var addressElement = document.getElementById("address");
    var cityElement = document.getElementById("city");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        // Check if all form elements are present
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var address = addressElement.value;
        var city = cityElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Generate resume HTML
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n            <p><strong>Full Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n        \n            <p><strong>City:</strong> ").concat(city, "</p>\n            <p><strong>Contact No.:</strong> ").concat(phone, "</p>\n\n            <h3>Education:</h3>\n            <p>").concat(education, "</p>\n            \n            <h3>Experience:</h3>\n            <p>").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
        else {
            console.error("The resume output element is unavailable.");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
});
// Display resume output
