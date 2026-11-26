import { useState } from "react"
import { Navigate,useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate();
  const[formdata , setformdata]=useState({
    username:" ",
    email:" ",
    password:" ",
    age:" "
  })
    function handlechange(e){
    e.preventDefault();
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
    const handleSubmit=(event)=>{
    event.preventDefault();
    
    console.log("login page",formdata)
    alert("Login Successfully")
    Navigate("/dashboard",{state:formdata})

  }
    {/*const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPassword]=useState("");
    const[age,setAge]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();*/}
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
    <input type="text" required placeholder="Enter Your userame" name="username" onChange ={handlechange} />  
    <input type="password" required placeholder="Enter your email" name="email" onChange ={handlechange} />
    <input type="email" required placeholder="Enter your password" name="password" onChange ={handlechange} />
    <input type="number" required placeholder="Enter your age" name="age" onChange ={handlechange} />

    <button type="submit" >Submit</button>
        </form>
        </>
    )
}export default Login;