import React from "react"
import { Link } from "react-router-dom"

export default function UserLinks() {
  return (
    <>
      <div className='header-right'>
        <Link to='/login' className='btn btn-primary'>
          Login
        </Link>
      </div>
    </>
  )
}
