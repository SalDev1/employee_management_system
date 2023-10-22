import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../services/EmployeeServices";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  const history = useNavigate();
  const [employees, setEmployees] = useState([]);

  const editEmployeeHandler = (id) => {
    const url = `/update-employee/${id}`;
    history(url);
  };

  const deleteEmployeeHandler = (id) => {
    deleteEmployee(id)
      .then((res) => {
        alert("Employee Deleted Succesfully , Please Refresh the Page");
      })
      .catch((err) => console.log(err.message));
  };

  const viewEmployeeHandler = (id) => {
    const url = `/employee/${id}`;
    history(url);
  };

  // If you want to make REST API Calls , always use componentDidMount or useEffect.
  // Use useState to store responses of the API calls + make use of them as much as you want.
  useEffect(() => {
    getEmployees()
      .then((res) => {
        setEmployees(res.data);
        console.log(employees);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h2 className='text-center my-4'>List of All Employees</h2>
      <div className='row'></div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => editEmployeeHandler(employee.employeeId)}
                    className='btn btn-info'>
                    Update
                  </button>

                  <button
                    className='btn btn-danger mx-2'
                    onClick={() => deleteEmployeeHandler(employee.employeeId)}>
                    Delete
                  </button>

                  <button
                    className='btn btn-success mx-0.5'
                    onClick={() => viewEmployeeHandler(employee.employeeId)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
