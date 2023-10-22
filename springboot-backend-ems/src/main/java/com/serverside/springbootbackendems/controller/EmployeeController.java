package com.serverside.springbootbackendems.controller;


import com.serverside.springbootbackendems.entity.Employee;
import com.serverside.springbootbackendems.exception.EmployeeNotFoundException;
import com.serverside.springbootbackendems.exception.ResourceNotFoundException;
import com.serverside.springbootbackendems.repository.EmployeeRepository;
import com.serverside.springbootbackendems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
// This is the standard we use in the REST API world.
@RequestMapping("/api/v1")
public class EmployeeController  {
    // Autowired --> Injects repository into spring container.
    @Autowired
    public EmployeeRepository repository;

    @Autowired
    public EmployeeService employeeService;

    // Get all employees.
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
       return repository.findAll();
    }

    // Create a New Employee REST API.

    // We deal with JSON body over here so annotated
    // employee body with JSON.
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    // Get employee by id.
    // Path Variable --> to map the request id to the employee id.
    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable("id") long employeeId) throws  EmployeeNotFoundException {
        Employee employee = employeeService.fetchEmployeeById(employeeId);
        System.out.println("employee = " + employee);
        return employee;
    }

    //update employee rest api.
    @PutMapping("/employee/{id}")
    public Employee updateEmployeeById(@PathVariable("id") long employeeId , @RequestBody Employee employee) {
        return employeeService.updateEmployee(employeeId,employee);
    }
    // Delete employee rest api .
    @DeleteMapping("/employee/{id}")
    public void deleteEmployeeById(@PathVariable("id") long employeeId) {
        employeeService.deleteEmployee(employeeId);
    }
}
