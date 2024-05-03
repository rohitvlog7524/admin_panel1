import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();  


    
     
    const handleLogin=(e)=>{
        e.preventDefault();
        navigate("/dashboard")
        
        if(localStorage){
       
          localStorage.setItem("email",email)
          localStorage.setItem("password",password)
        }else if(sessionStorage){
       
          sessionStorage.setItem("email",email)
          sessionStorage.setItem("password",password)
        }else{
         console.log("Data is not stored in localStorage and sessionStorage")
        }
     }
    return (
        <section className="login-form">
            <div className="container-fluid">
                <form className="d-flex flex-column">
                    <h4 className="text-center text" >Login</h4>
                    <div className="mb-3 mt-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" style={{ width: "100%" }}  onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" style={{ width: "100%" }} onChange={(e)=>setPassword(e.target.value)}  />
                        <div id="emailHelp" className="form-text mt-3">Forget password ?</div>
                    </div>

                    <button type="submit" onClick={handleLogin} className=" mt-4 align-self-center gradient-button" style={{ width: "60%" }}>Login</button>
                </form>
            </div>
        </section>
    )
}
