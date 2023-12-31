import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

export default function Navbar({user}) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  }

  return (
    <div className="navbar">
      <span className="logo"><Link className='link' to="/" >Social Login App</Link></span>
      {user ? (

        <ul className="list">
        <li className="listItem">
          <img src={user.photos[0].value} alt="avatar" className="avatar" />
        </li>
        <li className="listItem">{user.displayName}</li>
        <li className="listItem" onClick={logout}>Logout</li>
      </ul>
        ) : (<Link className='link' to="/login" >Login</Link>)}
    </div>
  )
}
