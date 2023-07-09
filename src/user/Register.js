import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useradd } from "../redux/action";

const Register = () => {
    let navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        password: "",
    });

    let dispatch = useDispatch();
    const [error, setError] = useState("");
    const { name, email, contact, address, password, cpassword } = state;

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        //console.log("jcjd");
        e.preventDefault();
        if (!name || !email || !address || !contact || !password || !cpassword) {
            setError("please input all input Field");
        } else {
            dispatch(useradd(state));
            navigate("/");
            setError("");
        }
    }
    return (
        <div>
            <Button variant="secondary" onClick={() => navigate("/")}>Go Back</Button>
            <center><h2>Add User</h2></center>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingPassword" label="Name">
                    <Form.Control type="text" placeholder="UserName" name="name" value={name} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" name="email" value={email} placeholder="name@example.com" onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Contact">
                    <Form.Control type="number" placeholder="contact" name="contact" value={contact} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Address">
                    <Form.Control type="text" placeholder="address" name="address" value={address} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="text" placeholder="******" name="password" value={password} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                    <Form.Control type="text" placeholder="******" name="cpassword" value={cpassword} onChange={handleChange} />
                </FloatingLabel>

                <Button type="submit" value="submit" variant="primary" name="submit" onChange={handleChange} >Submit</Button>
            </form>
        </div>
    )
}
export default Register;