const studentList = document.getElementById("student-list");
const addStudentBtn = document.getElementById("add-student-btn");

addStudentBtn.addEventListener("click", addStudent);

function addStudent() {
    const studentName = prompt("Enter student's name:");
    const studentAge = prompt("Enter student's age:");

    if (studentName && studentAge) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>Name:</strong> ${studentName}, <strong>Age:</strong> ${studentAge}`;
        studentList.appendChild(listItem);
    }
}
