import React, {useEffect, useState} from 'react';
import EmployeeService from "../../serivces/EmployeeService";
import {Link} from "react-router-dom";

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div className='container'>
            <h2>List of Employees</h2>
            <Link to={'/add-employee'} className={"btn btn-primary mb-2"}>Add employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last name</th>
                    <th>Employee Email</th>
                </thead>
                <tbody>
                {
                    employees.map(employee => {
                        return (
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Employees