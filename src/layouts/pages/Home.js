import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className='intro-slider-container '>
        <div className='overlay'>
          <div className='caption'>
            <h2>Welcome to Buy On Campus</h2>
            <p>The online market for all Institutions</p>
            <Link to='/login' className='get-started'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
