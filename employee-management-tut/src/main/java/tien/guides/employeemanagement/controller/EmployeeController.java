package tien.guides.employeemanagement.controller;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tien.guides.employeemanagement.exception.ResourceNotFoundException;
import tien.guides.employeemanagement.model.Employee;
import tien.guides.employeemanagement.repository.EmployeeRepository;

import java.util.List;
import java.util.Objects;

@CrossOrigin("*")
//@CrossOrigin(origins = {})
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepo;

    // get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepo.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        var employee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist"));
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/detail")
    public ResponseEntity<Employee> getEmployeeByIdV2(@RequestBody Employee employee) {
        var result = employeeRepo.findById(employee.getId()).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        return ResponseEntity.ok(employeeRepo.save(employee));
    }

    @PutMapping("/edit")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
        var updatedEmployee = employeeRepo.findById(employee.getId()).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        updatedEmployee.setFirstName(employee.getFirstName());
        updatedEmployee.setLastName(employee.getLastName());
        updatedEmployee.setEmailId(employee.getEmailId());
        return ResponseEntity.ok(employeeRepo.save(updatedEmployee));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id) {
        var employee = employeeRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist"));
        employeeRepo.delete(employee);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
