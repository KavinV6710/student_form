document.getElementById("addstudent").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!name || !email || !course || !dob || !gender) {
        alert("Please fill in all fields!");
        return;
    }

    const student = { name, email, course, dob, gender };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));
    alert("Student added successfully!!");
    window.location.href = "studentlist.html";
    document.getElementById("studentdetails").reset();
});
