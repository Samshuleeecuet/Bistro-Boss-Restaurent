import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import userlogo from './../../../assets/others/profile.png';

const Header = () => {
  const {user,logOut}= useContext(AuthContext)
  console.log(user)
 const navLink = <>
 <li><NavLink className={({ isActive}) => isActive ? "active" : "default"} to='/'>Home</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive}) => isActive ? "active" : "default"} >Contact Us</NavLink></li>
        <li><NavLink to='/ourmenu' className={({ isActive}) => isActive ? "active" : "default"}>Our Menu</NavLink></li>
        <li><NavLink to='/ourshop' className={({ isActive}) => isActive ? "active" : "default"}>Our Shop</NavLink></li>
        <li><NavLink className={({ isActive}) => isActive ? "active" : "default"}><FaShoppingCart></FaShoppingCart> <span className="badge">+99</span></NavLink></li>
        {
          !user && <>
          <li><NavLink to='/login' className={({ isActive}) => isActive ? "active" : "default"}>Log in</NavLink></li>
        <li><NavLink to='/register' className={({ isActive}) => isActive ? "active" : "default"}>Register</NavLink></li>
          </>
        }
        {
          user && <>
           <li className='btn btn-error' onClick={logOut} >LogOut</li>  
           <li>
            <div className="avatar tooltip tooltip-bottom tooltip-error" data-tip={user.displayName}>
            <div className="w-8 rounded-full">
                <img src={userlogo} />
            </div>
            </div>
            </li>
           
           </>
        }
        
 
 
 </>
    
    return (
        <div class="navbar max-w-screen-xl bg-red-700 bg-opacity-90 fixed z-30">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-red-700 bg-opacity-60 rounded-box w-60">
        {navLink}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
</div>
    );
};

export default Header;