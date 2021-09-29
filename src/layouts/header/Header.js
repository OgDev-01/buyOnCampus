// import { AppBar, Toolbar, Typography } from "@mui/material"
import LeftNav from "../header/LeftNav"
import CenterNav from "../header/CenterNav"
import RightNav from "./RightNav"
import CampusList from "./CampusList"
import NavLinks from "./NavLinks"
import UserLinks from "./UserLinks"

export default function Header() {
  return (
    <header className='header header-2 header-intro-clearance'>
      <div className='header-top'>
        <div className='container'></div>
      </div>

      <div className='header-middle'>
        <div className='container'>
          <LeftNav />
          <CenterNav />
          <RightNav />
        </div>
      </div>

      <div className='header-bottom sticky-header'>
        <div className='container'>
          <CampusList />
          <NavLinks />
          <UserLinks />
        </div>
      </div>
    </header>
  )
}
