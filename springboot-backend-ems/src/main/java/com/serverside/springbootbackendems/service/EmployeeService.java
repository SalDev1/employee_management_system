package com.serverside.springbootbackendems.service;

import com.serverside.springbootbackendems.entity.Employee;
import com.serverside.springbootbackendems.exception.EmployeeNotFoundException;

public interface EmployeeService {

    Employee fetchEmployeeById(long id) throws EmployeeNotFoundException;

    Employee  updateEmployee(long employeeId, Employee employee);

    void deleteEmployee(long employeeId);
}
