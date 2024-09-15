document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Close the parenthesis here

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    const cityElement = document.getElementById("city") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;


    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement 
    ) {
      // Check if all form elements are present
      const name = nameElement.value;
      const email = emailElement.value;
      const address = addressElement.value;
      const city = cityElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value; 
    
      // Handle profile picture
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // Generate resume HTML
      const resumeOutput = `
            <h2>Resume</h2>
            ${
              profilePictureURL
                ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
                : ""
            }
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
        
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Contact No.:</strong> ${phone}</p>

            <h3>Education:</h3>
            <p>${education}</p>
            
            <h3>Experience:</h3>
            <p>${experience}</p>
            
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

      
      // Display resume output
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        

        resumeOutputElement.style.display = "block";
      } else {
        console.error("The resume output element is unavailable.");
      }
    } else {
      console.error("One or more form elements are missing.");
    }
  });
// Display resume output
