import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useradd } from "../redux/action";

const Login = () => {
    let navigate = useNavigate();
    const [state, setState] = useState({
        password: "",
        email: "",

    });

    let dispatch = useDispatch();
    const [error, setError] = useState("");
    const { password, email } = state;

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        //console.log("jcjd");
        e.preventDefault();
        if (!password || !email) {
            setError("please input all input Field");
        } else {
            dispatch(useradd(state));
            navigate("/");
            setError("");
        }
    }
    return (
        <div>

            <center><h2>Sign In</h2></center>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingPassword" label="Email address">
                    <Form.Control type="email" placeholder="abc@gmail.com" name="email" value={email} onChange={handleChange} />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" name="password" value={password} placeholder="******" onChange={handleChange} />
                </FloatingLabel>

                <Button type="submit" value="submit" variant="primary" name="submit" onChange={handleChange} >Login</Button>
            </form>
        </div>
    )
}
export default Login;