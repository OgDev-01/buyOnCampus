import React from "react"
import { NavLink } from "react-router-dom"

export default function Links({ route, name }) {
  return (
    <>
      <li className='megamenu-container'>
        <NavLink to={route} className=''>
          {name}
        </NavLink>
      </li>
    </>
  )
}
