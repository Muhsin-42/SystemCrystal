import "./login.scss";
import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import { setUser, setToken, setLogin } from "../../../Redux/store";    
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ()=> {    
	const [datas, setDatas] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [loginError, setLoginError] = useState(false);
	const dispatch = useDispatch();
    const navigation = useNavigate();

    const notifyLoginError = (error) => toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      });
    // const notifyLoginError = (errorMessage) => toast.error(errorMessage, {
    //     position: toast.POSITION.TOP_RIGHT
    //   });




	const handleChange = ({ currentTarget: input }) => {
		setDatas({ ...datas, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post('/api/admin/login', datas);
            console.log('first token=> ',data.token)

			dispatch(setUser({user: data.user }))
			dispatch(setToken({token: data.token }))

			// localStorage.setItem("token", data.token);
            // navigation('/');
                // window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
                setLoginError(true);
                notifyLoginError(error.response.data.message)
			}
		}
	};

    return (
        <div className="login ">
            <ToastContainer />
            <div className="loginCard">
                <div className="left">
                    <span className="fs-1 fw-bold">Admin!</span>
                    <p>Our cleaning agency provides professional and thorough cleaning services for homes and businesses, ensuring a clean and safe environment for our clients.</p>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="email" placeholder="email" onChange={handleChange}
							value={datas.email} name='email'
                            style={{borderColor: `${loginError ? 'red' : 'none'}`  }}
                             required/>
                        <span className="emailError"></span>
                        <input  className="m-0" type="password" placeholder="Password" 
                               onChange={handleChange}
                               value={datas.password}
                                minLength='3' name="password"
                                style={{borderColor: `${loginError ? 'red' : 'none'}`  }}
                                required/>
                        <button className="btn" >
                            Login
                            </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )

}

export default Login