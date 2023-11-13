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
    const employeeList = employeesArray.map((employee) => {
        return createEmployeeRecord(employee)
    });
    return employeeList;
};

function createTimeInEvent (employee, dt) {
    const tempDate = dt.slice(0, 10);
    const tempTime = Number(dt.slice(11, 15));
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: tempTime,
        date: tempDate
    });
    return employee;
};

function createTimeOutEvent (employee, dt) {
    const tempDate = dt.slice(0, 10);
    const tempTime = Number(dt.slice(11, 15));
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: tempTime,
        date: tempDate
    });
    return employee;
};

function hoursWorkedOnDate (employee, date) {
    let timeIn, timeOut;
    for (let event in employee.timeInEvents){
        if ((employee.timeInEvents[event].date === date)){
            timeIn = employee.timeInEvents[event].hour};
    };
    for (let event in employee.timeOutEvents){
        if ((employee.timeOutEvents[event].date === date)){
            timeOut = employee.timeOutEvents[event].hour};
    };
    return (timeOut - timeIn)/100;
};

function wagesEarnedOnDate (employee, date) {
    let hours = hoursWorkedOnDate(employee, date);
    let wage = employee.payPerHour;
    return hours*wage;
}

function allWagesFor (employee) {
    let hoursWorked = [];
    for (let event in employee.timeInEvents) {
        hoursWorked.push(wagesEarnedOnDate(employee, employee.timeInEvents[event].date));
    }
    return hoursWorked.reduce((accum, currV) => {
        return accum + currV
      });
}

function calculatePayroll (employeesArray) {

}