'use strict';

const employees = [] ;

function Employee(id, fullName, department, level, imageURL){
    this.employeeId = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.salary();

    employees.push(this);
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

let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let emp4 = new Employee(1003, "	Safi Walid", "Administration", "Mid-Senior");
let emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let emp6 = new Employee(1005, "	Rana Saleh", "Development", "Junior");
let emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

const main = document.getElementById('main');
const section = document.createElement('section');
main.appendChild(section)
const h3 = document.createElement('h2');
section.appendChild(h3)

Employee.prototype.render = function() {
    const p = document.createElement('p');
    p.textContent = `Full Name: ${this.fullName}, Salary: ${this.salary}`;
    section.appendChild(p);
    
}

employees.forEach((employee) => {
    employee.render();
});