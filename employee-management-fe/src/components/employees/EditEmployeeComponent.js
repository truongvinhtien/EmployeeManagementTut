import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import EmployeeService from "../../serivces/EmployeeService";

const EditEmployeeComponent = (props) => {
    const {id} = useParams();

    const navigator = useNavigate();

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const updateFirstName = (value) => {
        setEmployee({
            ...employee,
            firstName: value
        })
    }

    const updateLastName = (value) => {
        setEmployee({
            ...employee,
            lastName: value
        })
    }

    const updateEmail = (value) => {
        setEmployee({
            ...employee,
            emailId: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee).then((response) => {
            navigator('/employees');
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'card col-md-6 offset-md-3 offset-3'}>
                        <h2 className={'text-center'}>Edit Employee</h2>
                        <div className={'card-body'}>
                            <form>
                                <div className={'form-group mb-2'}>
                                    <label className={'form-label'}>First name:</label>
                                    <input
                                        type={'text'}
                                        name={'firstName'}
                                        placeholder={'Example: John'}
                                        value={employee.firstName}
                                        className={'form-control'}
                                        onChange={(e) => updateFirstName(e.target.value)}
                                    />
                                    <br/>
                                    <label className={'form-label'}>Last name: </label>
                                    <input
                                        type={'text'}
                                        name={'lastName'}
                                        placeholder={'Example: Doe'}
                                        value={employee.lastName}
                                        className={'form-control'}
                                        onChange={(e) => updateLastName(e.target.value)}
                                    />
                                    <br/>
                                    <label className={'form-label'}>Email:</label>
                                    <input
                                        type={'text'}
                                        name={'email'}
                                        placeholder={'Example: abc@gmail.com'}
                                        value={employee.emailId}
                                        className={'form-control'}
                                        onChange={(e) => updateEmail(e.target.value)}
                                    />
                                    <br/>
                                    <button className={'btn btn-success'} onClick={(e) => onSubmit(e)}>Submit</button>
                                    <Link to={'/employees'} className={'btn btn-secondary'}>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEmployeeComponent