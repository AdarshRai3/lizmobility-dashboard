import { RiDashboardFill } from "react-icons/ri";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdSpatialTracking } from "react-icons/md";
import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";


const AdminSidebar = () => {
    const location = useLocation();
  return(
    <aside>
    <h2>LizMotors</h2>
      <div>
           <h5>Project</h5>
        <ul>
          <Li url = "/admin/Dashboard" text = "Dashboard" location = {location} Icon = {RiDashboardFill}/>
          <Li url = "/admin/Inspection" text = "Inspection" location = {location} Icon = {FaMagnifyingGlassChart}/>
          <Li url = "/admin/Issuetracker" text = "Tracker" location = {location} Icon = {MdSpatialTracking}/>
        </ul>         
      </div>
   </aside>

  )   
  
}

interface LiProps{
  url:string;
  text:string;
  location:Location;
  Icon:IconType

}
const Li = ({url,text,location,Icon}:LiProps)=>(
  <li style = {
    {
      backgroundColor: location.pathname.includes(url)?"rgba(0,115,255,0.1)":"white",
    }
    }>
      <Link to={url}
       >
        <Icon/>
        {text}
        </Link>
  </li>
         
)

export default AdminSidebar