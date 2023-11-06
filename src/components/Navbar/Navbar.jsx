import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const {LogoutUser,user} = useContext(AuthContext)


  const handleLogout = () =>{
    LogoutUser()
    .then(result => {
      console.log(result)
      Swal.fire(
           'success',
           'Successfully logout from your account',
           'success'
         )
         fetch('http://localhost:5000/logout',{
          method: "POST",
          credentials: 'include',
          headers: {
            "content-type" : "application/json"
          },
          body:JSON.stringify({email : user?.email})
         })
         .then(res => res.json())
         .then(data => console.log(data))

  })
  .catch(error => {
    console.log(error)
  })
  
  }
  const navItem = user ? (
    <ul className="lg:flex">
      <li><NavLink to="/assignment">Assignments</NavLink></li>
      <li><NavLink to="/createassignment">Create Assignment</NavLink></li>
      <li><NavLink to="/subassi">Submitted Assignments</NavLink></li>
      <li><NavLink to="/myassignment">My Assignments</NavLink></li>

    </ul>
  ) : (

<ul className="lg:flex">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/assignment">Assignments</NavLink></li>
    </ul>
  );
   
     
    
    
    
    
    return (
        <div className="navbar bg-green-300 h-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <span><Link to = {'/'}><img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/WV56Jm3/the-study-logo-inspiration-college-logo-designs-vintage-logo-designs-vector.jpg" /></Link></span>
          <Link to ={'/'}><a className="btn btn-ghost normal-case text-xl font-bold text-purple-400">Know Yourself</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
        {
      user ?<div className="md:flex lg:flex  gap-[10px]"><p className="my-auto font-bold text-[15px] text-purple-400">{user.displayName}</p><img className="h-[50px] w-[50px] rounded-[50%]" src={user.photoURL}></img><Link to = {'/'}><button className="btn bg-green-400" onClick={handleLogout}>Sign out</button></Link></div>  :
      <button className="btn bg-purple-400"><Link to ={'/login'}>Log in </Link></button>
    }
        </div>
      </div>
    );
};

export default Navbar;