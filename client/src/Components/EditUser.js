import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneUser, UpdateUser } from '../Redux/Action/UsersActions';

export const EditUserr = () => {
    const { id } = useParams()
    const oneuser = useSelector(State => State.UserReducer.Usr)
    const [firstname, setFirstname] = useState(oneuser.firstname)
    const [lastname, setLastname] = useState(oneuser.lastname)
    const [age, setAge] = useState(oneuser.age)
    const [email, setEmail] = useState(oneuser.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOneUser(id))
    }, [])
    useEffect(() => {
        setFirstname(oneuser.firstname)
        setLastname(oneuser.lastname)
        setAge(oneuser.age)
        setEmail(oneuser.email)
    }, [oneuser])
    const handleEdit = (a) => {
        a.preventDefault()
        dispatch(UpdateUser({ firstname, lastname, age, email }, id, navigate))
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Enter your First name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Enter your last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter your Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button onClick={(e) => handleEdit(e)} vstyle={{ marginLeft: '10px' }} variant="success">
                    Submit
                </Button>
            </Form>
        </div>
    )
}