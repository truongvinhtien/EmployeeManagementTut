import React, {useState} from "react";
import {useNavigate, Link} from 'react-router-dom';
import EmployeeService from "../../serivces/EmployeeService";

const AddEmployeeComponent = () => {
    const navigator = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const backToEmployees = () => {
        navigator('/employees');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const employee = {
            firstName,
            lastName,
            'emailId': email
        }
        EmployeeService.createNewEmployee(employee).then((response) => {
            backToEmployees();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'card col-md-6 offset-md-3 offset-3'}>
                        <h2 className={'text-center'}>Add Employee</h2>
                        <div className={'card-body'}>
                            <form>
                                <div className={'form-group mb-2'}>
                                    <label className={'form-label'}>First name:</label>
                                    <input
                                        type={'text'}
                                        name={'firstName'}
                                        placeholder={'Example: John'}
                                        value={firstName}
                                        className={'form-control'}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <br/>
                                    <label className={'form-label'}>Last name: </label>
                                    <input
                                        type={'text'}
                                        name={'lastName'}
                                        placeholder={'Example: Doe'}
                                        value={lastName}
                                        className={'form-control'}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <br/>
                                    <label className={'form-label'}>Email:</label>
                                    <input
                                        type={'text'}
                                        name={'email'}
                                        placeholder={'Example: abc@gmail.com'}
                                        value={email}
                                        className={'form-control'}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <br/>
                                    <button className={'btn btn-success'} onClick={(e) => onSubmit}>Submit</button>
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

export default AddEmployeeComponent