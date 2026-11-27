
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Patient from "./pages/patient";
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import Doctor from './pages/Doctor/doctorlayout';
import DoctorDetails from './pages/Doctor/doctordetails';
import DoctorSettings from './pages/Doctor/settings';
import DoctorDashboard from './pages/Doctor/dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/doctorlayout" element={<Doctor/>}>
          <Route path ="dashboard" element={<DoctorDashboard/>}/>
          <Route path ="settings" element={<DoctorSettings/>}/>
          <Route path ="doctordetails" element={<DoctorDetails/>}/>
        </Route>      
      </Routes>
    </BrowserRouter>
  )
}

export default App;