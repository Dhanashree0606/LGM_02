function displayData() {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var DateofBirth = document.getElementById("Date of Birth").value;
    var gender = document.getElementById("gender").value;
    var course = document.getElementById("course").value;

    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "<h2>Student Registration Details:</h2>" +
                           "<p><strong>Name:</strong> " + Name + "</p>" +
                           "<p><strong>Email:</strong> " + Email + "</p>" +
                           "<p><strong>Date of Birth</strong> " + DateofBirth+ "</p>" +
                           "<p><strong>Gender:</strong> " + gender + "</p>" +
                           "<p><strong>Course:</strong> " + course + "</p>";
}