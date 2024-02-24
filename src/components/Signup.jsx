import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
     
     const Signup = (props) => {
         const [credentials, setCredentials] = useState({name: "",email: "", password: ""}) 
         let history = useHistory();
     
         const handleSubmit = async (e) => {
             e.preventDefault();
             const response = await fetch("http://localhost:5000/api/auth/createuser", {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({name:credentials.name,email: credentials.email, password: credentials.password})
             })
             const json = await response.json()
             
             if (json.success){
                 // Save the auth token and redirect
                 localStorage.setItem('token', json.authtoken); 
                 props.showAlert("Account Created Successfully","success");
                 history.push("/");
     
             }
             else{
                 props.showAlert("Invaild Credentials!", "danger");
             }
         } 

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='mt-3'>
        <h2>Create an account to use INotebook</h2>
        <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" className="form-control"  onChange={onChange} id="name" name="name" value ={credentials.name} aria-describedby="emailHelp" />
                {/* <input type="text" className="form-control" onChange={onchange} id="name" name='name' value ={credentials.name}
                aria-describedby="emailHelp" /> */}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control"  onChange={onChange} id="email" name="email" value ={credentials.email} aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control"  onChange={onChange} name="password" id="password" value ={credentials.password} />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name='cpassword'  onChange={onchange} />
            </div>
        
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div> 
       
    )
}

export default Signup




// import React, {useState} from 'react'
// import { useHistory } from 'react-router-dom'

// const Signup = (props) => {
//     const [credentials, setCredentials] = useState({name: "",email: "", password: ""}) 
//     let history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/createuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name:credentials.name,email: credentials.email, password: credentials.password})
//         })
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             props.showAlert("Account Created Successfully","success");
//             history.push("/");

//         }
//         else{
//             props.showAlert("Invaild Credentials!", "danger");
//         }
//     }
    
//     const onChange = (e)=>{
//         setCredentials({...setCredentials,[e.target.name]: e.target.value})
//     }
      


//     return (
        
//     )
// }

// export default Signup



