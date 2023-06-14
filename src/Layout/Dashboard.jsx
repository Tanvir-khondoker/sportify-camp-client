import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { FaChalkboardTeacher, FaHome, FaUsers, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  // todo
  const isAdmin = true;
  const isInstructor = true;

  return (
    <div>
      <NavBar></NavBar>

      <div className="pt-28 drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu rounded-xl p-4 w-80 h-full bg-base-300 text-base-content">
            {/* Sidebar content here */}

            {isAdmin ?
             <><li>
             <NavLink to="/dashboard/home">
               <FaHome />
               Admin Home
             </NavLink>
           </li>
           <li>
             <NavLink to="/dashboard/courses">
            <FaChalkboardTeacher/> Manage Classes
             </NavLink>
           </li>
           <li>
             <NavLink to="/dashboard/allUsers">
             <FaUsers/>
               Manage Users
             </NavLink>
           </li></> 
            
            
            : isInstructor ? 
            <>Instructor Content
            <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              Instructor Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addCourse">
             <FaChalkboardTeacher/>
              Add a Course
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              
              <FaChalkboardTeacher /> My Classes
            </NavLink>
          </li>
          </> 


            :   
           
           
           
           <><li>
            <NavLink to="/dashboard/home">
              <FaHome />
              Student Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
             <FaChalkboardTeacher/>
              My Selected Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              
              <FaChalkboardTeacher /><FaWallet/> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              
              <FaChalkboardTeacher /> My enrolled Classes
            </NavLink>
          </li>
          
          </>
            
            }


            
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaChalkboardTeacher /> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
