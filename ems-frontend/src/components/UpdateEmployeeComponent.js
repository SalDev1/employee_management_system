import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeServices";

const UpdateEmployeeComponent = ({ props }) => {
  const history = useNavigate();
  const { id } = useParams(); // Use useParams to get id of the exact specific page you are in.

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  useEffect(() => {
    getEmployeeById(id)
      .then((res) => {
        let employee = res.data;

        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const updateEmployeeHandler = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    updateEmployee(id, employee)
      .then(history("/employees"))
      .catch((err) => console.log(err.message));
  };

  const cancelHandler = () => {
    history("/employees");
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center pt-2'>Update Details of an Employee</h3>
            <div className='card-body'>
              <form>
                <div className='form-group py-2'>
                  <label>First Name : </label>
                  <input
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group py-2'>
                  <label>Last Name : </label>
                  <input
                    placeholder='Last Name'
                    name='ladtName'
                    className='form-control'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='form-group py-2'>
                  <label>Email Id : </label>
                  <input
                    placeholder='Email'
                    name='emailId'
                    className='form-control'
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>

                <div className='mt-3'>
                  <button
                    className='btn btn-primary'
                    onClick={(e) => updateEmployeeHandler(e)}>
                    Submit
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => cancelHandler()}
                    style={{ marginLeft: "10px" }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
