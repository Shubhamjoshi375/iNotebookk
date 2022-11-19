import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Actions/user";


const Login = (props) => {
    // const [credentials, setCredentials] = useState({email: "", password: ""}) 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password))
        
    }

    
       
    // const onChange = (e)=>{
    //     setCredentials({...credentials, [e.target.name]: e.target.value})
    // }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" value={email} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" value={password}  name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login