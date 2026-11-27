import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const location =useLocation
  const navigate=useNavigate();
  const[logindata , setLogindata]=useState({
    username:" ",
    email:" ",
    password:" ",
    age:" "
  })
    function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit=(event)=>{
  event.preventDefault();
    
    console.log("login page",logindata)
    alert("Login Successfully")
    navigate("/dashboard",{state:logindata})
  
  const registerdata=location.state

  if(logindata.username==registerdata.name && logindata.password==registerdata.password){
    console.log("if sucess")
    navigate("/dashboard",{state:logindata})
  }
  
  else
    console.log("Error")

    }
    return(
        <>
        
    <main className=" min-h-screen flex items-center justify-center bg-sky-100 ">
        <div>
        <div className="w-[450px] ">
        </div>
        <div className="w-full max-w-2xl"></div>
    <form onSubmit={handleSubmit}
    className="w-full max-w-xl space-y-3 rounded-[34px] bg-white p-10 shadow-2xl">

      <h1 
        className="mb-6 text-center text-2xl font-bold text-blue-600">
        Login to your account
      </h1>
        
      <div>Email</div>
        
      <input type="email" required placeholder="Enter your email" name="email" onChange ={handlechange} 
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
        
      <div>Password</div>
        
          <input type="password" required placeholder="Enter your password" name="password" onChange ={handlechange} 
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
      
      <div>ForgetPassword</div> 

      <button typre ="submit"
        className="h-14 w-full rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg hover:bg-blue-700"
      >Submit</button>
    
    </form> 
    </div>
    </main>    
        </>
    
    )
}export default Login;