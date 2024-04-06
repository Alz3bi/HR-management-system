'use strict';
let employeeList = [];

function getEmployees() {
    let jsonEmployee= localStorage.getItem("allEmployees")
    employeeList = JSON.parse(jsonEmployee);
}

getEmployees();

const stats = [{
    departmentName: "Administration",
    numberofEmployees: 0,
    totalSalry: 0
},{
    departmentName: "Marketing",
    numberofEmployees: 0,
    totalSalry: 0
},{
    departmentName: "Development",
    numberofEmployees: 0,
    totalSalry: 0
},{
    departmentName: "Finance",
    numberofEmployees: 0,
    totalSalry: 0
},{
    departmentName: "Total",
    numberofEmployees: 0,
    totalSalry: 0
}];

function counter() {
    for(const x of employeeList){
        switch (x.department) {
            case "Administration":
                stats[0].numberofEmployees += 1;
                stats[4].numberofEmployees += 1;
                stats[0].totalSalry += x.salary;
                stats[4].totalSalry += x.salary;
                break;
            case "Marketing":
                stats[1].numberofEmployees += 1;
                stats[4].numberofEmployees += 1;
                stats[1].totalSalry += x.salary;
                stats[4].totalSalry += x.salary;
                break;
            case "Development":
                stats[2].numberofEmployees += 1;
                stats[4].numberofEmployees += 1;
                stats[2].totalSalry += x.salary;
                stats[4].totalSalry += x.salary;
                break;
            case "Finance":
                stats[3].numberofEmployees += 1;
                stats[4].numberofEmployees += 1;
                stats[3].totalSalry += x.salary;
                stats[4].totalSalry += x.salary;
                break;
            default:
                break;
        }
    }
}

counter();

function printTable() {
    const table = document.getElementById('statsTable');
    stats.forEach(element => {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const td1 = document.createElement('td');
        td1.innerHTML = element.departmentName;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML = element.numberofEmployees;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        let avg = Math.floor(element.totalSalry / element.numberofEmployees);
        td3.innerHTML = avg;
        tr.appendChild(td3);

        const td4 = document.createElement('td');
        td4.innerHTML = element.totalSalry;
        tr.appendChild(td4);
    });

}

printTable();