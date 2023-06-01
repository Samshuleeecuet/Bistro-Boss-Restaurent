import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
 const navLink = <>
 <li><NavLink className={({ isActive}) => isActive ? "active" : "default"} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive}) => isActive ? "active" : "default"} >Contact Us</NavLink></li>
        <li><NavLink className={({ isActive}) => isActive ? "active" : "default"}>Our Menu</NavLink></li>
        <li><NavLink className={({ isActive}) => isActive ? "active" : "default"}>Our Shop</NavLink></li>
        <li><NavLink className={({ isActive}) => isActive ? "active" : "default"}><FaShoppingCart></FaShoppingCart> <span className="badge">+99</span></NavLink></li>
        <li>
        <div className="avatar">
        <div className="w-8 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
        </div>
        </li>
 
 
 </>
    
    return (
        <div class="navbar max-w-screen-xl bg-gray-700 bg-opacity-50 fixed z-30 bg-transparent">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
</div>
    );
};

export default Header;