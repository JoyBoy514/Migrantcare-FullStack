import { Link, Outlet } from "react-router-dom";

function Doctor() {
    return ( 
        <div>
            <nav>
        <Link to ={"/doctorlayout/dashboard"}> Dashboard </Link>      
        <Link to ={"/doctorlayout/settings"}> Settings </Link>      
        <Link to ={"/doctorlayout/doctordetails"}> DoctorDetails </Link> 
        </nav> 
        <Outlet/> 
        </div>  
         
    )
}
export default Doctor ;