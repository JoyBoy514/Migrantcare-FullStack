import {useNavigate} from "react-router-dom";
import {registerschema} from "../components/formschema/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
function Register(){
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit(data){
        console.log(data)
        alert("registration process is sucessfully completed")
        navigate("/",{state:data})
    }
    return(
    <main className=" min-h-screen flex items-center justify-center bg-cyan-100">
        <div>
        <div className="w-[450px] ">
        </div>
        <div className="w-full max-w-2xl"></div>
    <form onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-xl space-y-3 rounded-[34px] bg-white p-10 shadow-2xl">

      <h1 
        className="mb-6 text-center text-2xl font-bold text-blue-600">
        Register to your account
      </h1>
        
      <div>Username</div>
        
      <input type="text" placeholder="Enter Your Name" {...register("name")}
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
        
      <p>{errors.name?.message}</p>
        
      <div>Email</div>
        
      <input type="email" placeholder="Enter Your Email" {...register("email")}
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
        
      <p>{errors.email?.message}</p>
        
      <div>Password</div>
        
      <input type="password" placeholder="Enter Your Password" {...register("password")}
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
        
      <p>{errors.password?.message}</p>
        
      <div>Age</div>

      <input type="age" placeholder="Enter Your Age" {...register("age")}
         className="h-14 w-full rounded-xl border-2 border-gray-300 px-5 text-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />  
       
      <p>{errors.age?.message}</p>
       
      <button typre ="submit"
        className="h-14 w-full rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg hover:bg-blue-700"
      >Submit</button>
    
    </form> 
    </div>
    </main>
    )
}
export default Register;