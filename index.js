// Write your solution in this file!
const employee = {
  name: "Krithik",
  streetAddress: "home",
};

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
  return {
    ...obj,
    [key]: value,
  };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const newObj = { ...employee };
  delete newObj[key];
  return newObj;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};
