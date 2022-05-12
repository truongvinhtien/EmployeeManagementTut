import React, {useEffect, useState} from 'react';

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

    });

    return (
        <div className='container'>
            <h2>List of Employees</h2>
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