import React, {useEffect, useState} from 'react';
import EmployeeService from "../../serivces/EmployeeService";
import {Link} from "react-router-dom";

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    const [, forceRerender] = useState({});

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(response => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }

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
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                {
                    employees.map(employee => (
                            <tr key = {employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className={"btn btn-info"} to={`/edit-employee/${employee.id}`}>
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <button className={"btn btn-danger"} onClick={() => deleteEmployee(employee.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Employees