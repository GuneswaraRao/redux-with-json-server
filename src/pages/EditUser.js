import React, { useState, useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, updateUser } from "../redux/action";

const EditUser = () => {
    let navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });
    let { id } = useParams();
    let dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);
    const [error, setError] = useState("");
    const { name, email, contact, address } = state;
    useEffect(() => {
        dispatch(getSingleUser(id))
    }, []);
    useEffect(() => {
        if (user) {
            setState({ ...user });
        }
    }, [user]);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        //console.log("jcjd");
        e.preventDefault();
        if (!name || !email || !address || !contact) {
            setError("please input all input Field");
        } else {
            dispatch(updateUser(state, id));
            navigate("/");
            setError("");
        }
    }
    return (
        <div>
            <Button variant="secondary" onClick={() => navigate("/")}>Go Back</Button>
            <center><h2>Edit User</h2></center>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingPassword" label="Name">
                    <Form.Control type="text" placeholder="UserName" name="name" value={name || ""} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" name="email" value={email || ""} placeholder="name@example.com" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Contact">
                    <Form.Control type="number" placeholder="contact" name="contact" value={contact || ""} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Address">
                    <Form.Control type="text" placeholder="address" name="address" value={address || ""} onChange={handleChange} />
                </FloatingLabel>
                {/* <Form.Control type="button" name="adduser" variant="primary" value="AddUser" /> */}
                <Button type="submit" value="submit" variant="primary" name="submit" onChange={handleChange} >Update</Button>
            </form>
        </div>
    )
}
export default EditUser;