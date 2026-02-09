const editIndex = localStorage.getItem("editIndex");

if(editIndex !== null) {
    const students=JSON.parse(localStorage.getItem("students")) || [];
    const student=students[editIndex];

    if(student){
        document.getElementById("name").value = student.name;
        document.getElementById("email").value = student.email;
        document.getElementById("course").value = student.course;
        document.getElementById("dob").value = student.dob;
        document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
        document.getElementById("addstudent").textContent = "Update Student";
    }
}

document.getElementById("addstudent").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value.trim();
    const dob = document.getElementById("dob").value;   
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!name || !email || !course || !dob || !gender) {
        alert("Please fill in all fields!");
        return;
    }
    const student = { name, email, course, dob, gender };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    
    if(editIndex !== null) {
        students[editIndex] = student;
        localStorage.removeItem("editIndex");
        alert("Student updated successfully!");
    }else {
        students.push(student);
        alert("Student added successfully!");
    }
    localStorage.setItem("students", JSON.stringify(students));
    window.location.href = "studentlist.html";
});
document.getElementById("form-clear").addEventListener("click",function(){
    studentdetails.reset();
})
function updatetotalstudent(){
    const students=JSON.parse(localStorage.getItem("students"))||[]
    document.querySelector(".totolstudents").textContent=students.length
}
updatetotalstudent()