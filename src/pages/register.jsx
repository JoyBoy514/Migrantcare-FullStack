import {useNavigate} from "react-router-dom";
import {registerschema} from "../components/formschema/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
function Register(){
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmi1(data){
        console.log(data)
        alert("register sucess")
        navigate("/")
    }
    return(
    <form onSubmit={handleSubmit(onSubmi1)}>
        <input type="text" placeholder="Enter Your Name" {...register("name")} />  
          <p>{errors.name?.message}</p>
        <input type="email" placeholder="Enter Your Email" {...register("email")} />  
          <p>{errors.email?.message}</p>
        <input type="password" placeholder="Enter Your Password" {...register("password")} />  
          <p>{errors.password?.message}</p>
        <input type="age" placeholder="Enter Your Age" {...register("age")} />  
          <p>{errors.age?.message}</p>
        <button typre ="submit">Submit</button>
    </form> 
    )
}
export default Register;