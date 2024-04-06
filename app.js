'use strict';
//idList stores the ids that have been generated
//employeeList stores the Employee objects
const idList = [] ;
let employeeList = [];

//Employee constructor 
function Employee(fullName, department, level, imageURL){
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;

    this.salary = this.salary();
    this.employeeId = this.generateId();

    employeeList.push(this);
}

//Function to calculate the net salary for the employees
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

//function to generate random id for every Employee object
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

//event handler for form submit
function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let fullName = event.target.fname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let emp = new Employee(fullName,department,level,image);

    let jsonEmployee= JSON.stringify(employeeList);
    localStorage.setItem("allEmployees", jsonEmployee);

    render();
}

const administrationSection = document.getElementById('administrationEmployeesList');
const marketingSection = document.getElementById('marketingEmployeesList');
const developmentSection = document.getElementById('developmentEmployeesList');
const financeSection = document.getElementById('financeEmployeesList');

//function to render Employee objects
function render() {
    administrationSection.innerHTML = "";
    marketingSection.innerHTML = "";
    developmentSection.innerHTML = "";
    financeSection.innerHTML = "";

    if(employeeList == null){
        employeeList = []
    }

    let department;
    
    employeeList.forEach(element => {
        switch (element.department) {
            case "Administration":
                department = administrationSection;
                break;
            case "Marketing":
                department = marketingSection;
                break;
            case "Development":
                department = developmentSection;
                break;
            case "Finance":
                department = financeSection;
                break;
            default:
                break;
        }

        const div = document.createElement('div');
        div.classList.add("card");
        department.appendChild(div);

        const img = document.createElement('img');
        img.classList.add("cardImage");
        img.src = element.imageURL;
        div.appendChild(img);

        const subDiv = document.createElement('div')
        div.classList.add("container");
        div.appendChild(subDiv)

        const p = document.createElement('p')
        p.textContent = `Name: ${element.fullName} - ID: ${element.employeeId} 
        Department: ${element.department} - Level: ${element.level}`;
        subDiv.appendChild(p)
    });
    
}

//function to retrive objects from localstorage
function getEmployees() {
    let jsonEmployee= localStorage.getItem("allEmployees")
    employeeList = JSON.parse(jsonEmployee);
}

getEmployees();
render();