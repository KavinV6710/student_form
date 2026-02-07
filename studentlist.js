const table=document.querySelector(".table")
const cardContainer = document.querySelector(".studentdetailscard");
let students=JSON.parse(localStorage.getItem("students"))||[];

students.forEach((student,index)=>{
    const row=document.createElement('tr')
    row.innerHTML=`
    <td class="name">
    <span class="letter">${student.name.charAt(0)}</span>
    <span class="name">${student.name}</span>
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
   document.querySelector("table").appendChild(row);
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
document.addEventListener("click",function(e){
    if(e.target.classList.contains("btndel")){
        e.target.closest("tr").remove();
    }
})
    