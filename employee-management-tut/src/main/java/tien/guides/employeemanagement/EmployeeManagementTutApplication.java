package tien.guides.employeemanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tien.guides.employeemanagement.repository.EmployeeRepository;

@SpringBootApplication
public class EmployeeManagementTutApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementTutApplication.class, args);
    }

}
