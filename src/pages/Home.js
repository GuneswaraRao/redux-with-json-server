import React, { useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/action';
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const handelDelete = (id) => {
        if (window.confirm("Are you sure want to delete user?")) {
            dispatch(deleteUser(id))
        }

    }
    return (
        <div><div><center>
            <Button variant="primary" onClick={() => navigate("/login")}> Sign In</Button></center></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr><td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.contact}</td>
                            <td>{user.address}</td>
                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary" onClick={() => handelDelete(user.id)}>Delete</Button>
                                    <Button variant="secondary" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</Button>
                                </ButtonGroup></td></tr>
                    )

                    )}


                </tbody>
            </Table>
        </div>
    )
};
export default Home;