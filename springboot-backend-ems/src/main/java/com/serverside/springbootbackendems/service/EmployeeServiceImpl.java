package com.serverside.springbootbackendems.service;


import com.serverside.springbootbackendems.entity.Employee;
import com.serverside.springbootbackendems.exception.EmployeeNotFoundException;
import com.serverside.springbootbackendems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    public EmployeeRepository employeeRepository;

    @Override
    public Employee fetchEmployeeById(long id) throws EmployeeNotFoundException {
        Optional<Employee> employee = employeeRepository.findById(id);

        if(!employee.isPresent()) {
            throw new EmployeeNotFoundException("Employee Not Found");
        }

        return employee.get();
    }

    @Override
    public Employee updateEmployee(long employeeId, Employee employee) {
        Employee e = employeeRepository.findById(employeeId).get();
        e.setFirstName(employee.getFirstName());
        e.setLastName(employee.getLastName());
        e.setEmailId(employee.getEmailId());

        return employeeRepository.save(e);
    }

    @Override
    public void deleteEmployee(long employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
