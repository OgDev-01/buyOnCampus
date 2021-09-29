import React from "react"

export default function CampusList() {
  return (
    <>
      <div className='header-left'>
        <div className='dropdown category-dropdown'>
          <a
            href='#'
            className='dropdown-toggle'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            data-display='static'
            title='Browse Categories'>
            Browse Campus
          </a>

          <div className='dropdown-menu'>
            <nav className='side-nav'>
              <ul className='menu-vertical sf-arrows'>
                <li className=''>
                  <a href='#'>Ozoro </a>
                </li>
                <li className=''>
                  <a href='#'>Abraka</a>
                </li>
                <li>
                  <a href='#'>Fupre </a>
                </li>
                <li>
                  <a href='#'>Pti</a>
                </li>
                <li>
                  <a href='#'>Ekpoma </a>
                </li>
                <li>
                  <a href='#'>Uniben</a>
                </li>
                <li>
                  <a href='#'>Uniport</a>
                </li>
                <li>
                  <a href='#'>Unilag </a>
                </li>
                <li>
                  <a href='#'>Laspotech</a>
                </li>
                <li>
                  <a href='#'>Unilorin</a>
                </li>
                <li>
                  <a href='#'>Off Campus </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
