import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById } from "../services/EmployeeServices";

const ViewEmployeeComponent = () => {
  const history = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({});

  // Make an REST API Call for getting employee details using the id.
  useEffect(() => {
    getEmployeeById(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className='h-100 mt-5 d-flex flex-column align-items-center justify-content-center'>
      <div>
        <h1>Employee {id} Details</h1>
      </div>

      <div>
        <p className='my-5'>
          First Name :{" "}
          <span className='mx-4 text-left'>{employee.firstName}</span>
        </p>
        <p className='my-5'>
          Last Name :{" "}
          <span className='mx-4 text-left'>{employee.lastName}</span>
        </p>
        <p className='my-5'>
          Email Id : <span className='mx-4 text-left'> {employee.emailId}</span>
        </p>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
