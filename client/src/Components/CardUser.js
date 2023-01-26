import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { DeleteUser } from '../Redux/Action/UsersActions';
import { Link } from 'react-router-dom';

const CardUser = (user) => {
    const dispatch = useDispatch()
    return (
        <Card style={{ width: '18rem', marginTop: '30px' }}>
            <Card.Body>
                <Card.Title>{user.FistName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.LastName}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{user.Age}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{user.Email}</Card.Subtitle>
                <Button as={Link} to={`/edit/${user._id}`} style={{ marginLeft: '10px' }} variant="success">Edit</Button>
                <Button onClick={() => dispatch(DeleteUser(user._id))} style={{ marginLeft: '10px' }} variant="secondary">Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default CardUser