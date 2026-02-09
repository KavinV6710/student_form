const table = document.querySelector("table");
const cardContainer = document.querySelector(".studentdetailscard");
let students = JSON.parse(localStorage.getItem("students")) || [];

students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.dataset.index = index;

    row.innerHTML = `
        <td>
        <span class="letter">${student.name.charAt(0)}</span>
        <span class="student-name">${student.name}</span>
        </td>
        <td>${student.email}</td>
        <td>${student.course}</td>
        <td>${student.dob}</td>
        <td>${student.gender}</td>
        <td>
            <button class="btnedit">Edit</button>
            <button class="btndel">Delete</button>
        </td>
    `;

    table.appendChild(row);
});
students.forEach((student)=>{
    const card=document.createElement('div')
    card.classList.add("student-card")
    card.innerHTML=`
    <div class="studentcard">
    <div class="studentcard-top">
    <h3 class="letter">${student.name.charAt(0)}</h3>
    <div className="studentcard-top2">
    <h5 class="name">${student.name}</h5>
    <div class="genderdob">
    <p>${student.gender}</p>
    <p>.${student.dob}</p>
    </div>
    </div>
    </div>
    <div class="studentcard-bottom">
    <p>${student.course}</p>
    <p>${student.email}</p>
    </div>
    <div class="editdel-btn">
    <button class="btnedit">Edit</button>
    <button class="btndel">Del</button>
    </div>
    </div>
    `
   cardContainer.appendChild(card)
})    
document.addEventListener("click", function (e) {
    const row = e.target.closest("tr");
     if (!row) return;
    const index = row.dataset.index; 
    if (e.target.classList.contains("btndel")) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        row.remove();
    }
    if (e.target.classList.contains("btnedit")) {
        localStorage.setItem("editIndex", index);
        window.location.href = "studentform.html";
    }
});
