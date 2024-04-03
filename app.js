'use strict';

const idList = [] ;

function Employee(fullName, department, level, imageURL){
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;

    this.salary = this.salary();
    this.employeeId = this.generateId();
}

Employee.prototype.salary = function(){
    let netSalary;
    switch (this.level) {
        case "Junior":
            netSalary = Math.floor(Math.random() * 1000)
            return Math.floor((netSalary * 92.5) / 100);
        case "Mid-Senior":
            netSalary = Math.floor(Math.random() * 1500)
            return Math.floor((netSalary * 92.5) / 100);
        case "Senior":
            netSalary = Math.floor(Math.random() * 2000)
            return Math.floor((netSalary * 92.5) / 100); 
    }
}

Employee.prototype.generateId = function(){
    let id;
    for (;;) {
        id = Math.floor(1000 + Math.random() * 9000);
        if (!idList.includes(id)) {
            idList.push(id);
            return id;
        }
    }
}

let empForm = document.getElementById("empForm");
empForm.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let fullName = event.target.fname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let emp = new Employee(fullName,department,level,image);
    emp.render();
}

const section = document.getElementById('empList');

Employee.prototype.render = function() {
    const div = document.createElement('div');
    div.classList.add("card");
    section.appendChild(div);

    const img = document.createElement('img');
    img.classList.add("cardImage");
    img.src = this.imageURL;
    div.appendChild(img);

    const subDiv = document.createElement('div')
    div.classList.add("container");
    div.appendChild(subDiv)

    const p = document.createElement('p')
    p.textContent = `Name: ${this.fullName} - ID: ${this.employeeId} 
    Department: ${this.department} - Level: ${this.level}`;
    subDiv.appendChild(p)
}