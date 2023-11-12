// Your code here

function createEmployeeRecord (employeeArray) {
    const employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee;
}

function createEmployeeRecords (employeesArray) {
    const employeeList = [];
    for (let employee in employeesArray) {
        employeeList.push(createEmployeeRecord(employeesArray[employee]));
    };
    return employeeList;
};

function createTimeInEvent (employee, dt) {
    const tempDate = dt.slice(0, 10);
    const tempTime = dt.slice(11, 15);

    console.log(tempTime)

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: tempTime,
        date: tempDate
    });
    return employee;
};