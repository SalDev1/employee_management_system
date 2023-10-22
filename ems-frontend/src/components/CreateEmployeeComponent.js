import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeServices";

const CreateEmployeeComponent = () => {
  const history = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const cancelHandler = () => {
    history("/employees");
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    console.log("employee" + JSON.stringify(employee));

    createEmployee(employee)
      .then(history("/employees"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center pt-2'>Add an Employee </h3>
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
                    className='btn btn-success'
                    onClick={(e) => saveEmployee(e)}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    style={{ marginLeft: "10px" }}
                    onClick={() => cancelHandler()}>
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

export default CreateEmployeeComponent;
