import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className="flex justify-between items-center px-15 bg-mist-400 ">
          <img 
        className="py-2 rounded-[50%] border bg-emerald-50"
        width="80px" 
        src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"
        alt="logo"
      />
      <nav>
        <ul className="flex gap-10 text-2xl">
          <li>
            <NavLink to="" className={({isActive})=>isActive ? " bg-blue-400 p-3 rounded-2xl": ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="adduser" className={({isActive})=>isActive?" bg-blue-400 p-3 rounded-2xl":""}>AddUser</NavLink>
          </li>
          <li>
            <NavLink to="userlist" className={({isActive})=>isActive?" bg-blue-400 p-3 rounded-2xl":""}>UserList</NavLink>
          </li>
          <li>
            <NavLink to="user" className={({isActive})=>isActive?"bg-blue-400 p-3 rounded-2xl":""}>User</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header