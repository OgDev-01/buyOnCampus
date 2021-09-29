import { Link } from "react-router-dom"

export default function LeftNav() {
  return (
    <>
      <div className='header-left'>
        <button className='mobile-menu-toggler'>
          <span className='sr-only'>Toggle mobile menu</span>
          <i className='icon-bars'></i>
        </button>

        <Link to='/' className='logo'>
          <img
            src='/assets/images/campus-logo.png'
            alt='Campus Logo'
            width='105'
            height='25'
          />
        </Link>
      </div>
    </>
  )
}
