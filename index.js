// Write your solution in this file!
const employee = {
    name : 'yahya',
    streetAddress : 1825
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam'
    employee['streetAddress'] = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee[key]}

    delete newEmployee[key];

    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
   }


