import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
};

// Adding CORS Allowance Code in the Spring Boot Application.
/*
  You always add your cors code in your server side , Always.
*/
export const getEmployees = () => {
  return axios.get(EMPLOYEE_API_BASE_URL, config);
};

export const createEmployee = (employee) => {
  return axios.post(EMPLOYEE_API_BASE_URL, employee);
};

export const getEmployeeById = (id) => {
  const url = `http://localhost:8080/api/v1/employee/${id}`;
  return axios.get(url);
};

export const updateEmployee = (id, employee) => {
  const url = `http://localhost:8080/api/v1/employee/${id}`;
  return axios.put(url, employee);
};

export const deleteEmployee = (id) => {
  const url = `http://localhost:8080/api/v1/employee/${id}`;
  return axios.delete(url);
};
