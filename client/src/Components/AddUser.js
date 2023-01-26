import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddUsr } from '../Redux/Action/UsersActions';

export const AddUser = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAdd = (a) => {
        a.preventDefault()
        dispatch(AddUsr({ firstname, lastname, age, email }, navigate))
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Enter your First name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Enter your last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter your Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button onClick={(e) => handleAdd(e)} vstyle={{ marginLeft: '10px' }} variant="success">
                    Submit
                </Button>
            </Form>
        </div>
    )
}