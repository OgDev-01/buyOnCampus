import React from "react"
import Links from "../../components/Links"

export default function NavLinks() {
  return (
    <>
      <div className='header-center'>
        <nav className='main-nav'>
          <ul className='menu'>
            <Links route={"/"} name={"Home"} />
            <Links route={"/product"} name={"Product"} />
            <Links route={"/services"} name={"Services"} />
            <Links route={"/about"} name={"Contact"} />
            <Links route={"/contact"} name={"About"} />
          </ul>
        </nav>
      </div>
    </>
  )
}
