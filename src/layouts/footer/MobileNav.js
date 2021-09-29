import React from "react"
import NavLinks from "../header/NavLinks"

export default function MobileNav() {
  return (
    <>
      <div className='mobile-menu-container mobile-menu-light m-n'>
        <div className='mobile-menu-wrapper '>
          <span className='mobile-menu-close'>
            <i className='icon-close'></i>
          </span>

          <form action='#' method='get' className='mobile-search'>
            <label for='mobile-search' className='sr-only'>
              Search
            </label>
            <input
              type='search'
              className='form-control'
              name='mobile-search'
              id='mobile-search'
              placeholder='Search product ...'
              required
            />
            <button className='btn btn-primary' type='submit'>
              <i className='icon-search'></i>
            </button>
          </form>

          <ul className='nav nav-pills-mobile nav-border-anim' role='tablist'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                id='mobile-menu-link'
                data-toggle='tab'
                href='#mobile-menu-tab'
                role='tab'
                aria-controls='mobile-menu-tab'
                aria-selected='true'>
                Menu
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                id='mobile-cats-link'
                data-toggle='tab'
                href='#mobile-cats-tab'
                role='tab'
                aria-controls='mobile-cats-tab'
                aria-selected='false'>
                Account
              </a>
            </li>
          </ul>

          <div className='tab-content'>
            <div
              className='tab-pane fade show active'
              id='mobile-menu-tab'
              role='tabpanel'
              aria-labelledby='mobile-menu-link'>
              <nav className='mobile-nav'>
                <ul className='mobile-menu'>
                  <li className='active'>
                    <NavLinks>home</NavLinks>
                  </li>
                  <li>
                    <a href='/product'>Products</a>
                  </li>
                  <li>
                    <a href='/services' className=''>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='/contact'>Contact</a>
                  </li>
                  <li>
                    <a href='/about'>About</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className='tab-pane fade'
              id='mobile-cats-tab'
              role='tabpanel'
              aria-labelledby='mobile-cats-link'>
              <nav className='mobile-cats-nav'>
                <ul className='mobile-cats-menu'>
                  <li>
                    <a className='mobile-cats-lead' href='/dashboard'>
                      My Account
                    </a>
                  </li>
                  <li>
                    <a className='mobile-cats-lead' href='#'>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href='#' className='mobile-cats-lead'>
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a href='/cart' className='mobile-cats-lead'>
                      My Cart
                    </a>
                  </li>
                  <li>
                    <a href='#' className='mobile-cats-lead'>
                      View Wishlist
                    </a>
                  </li>
                  <li>
                    <a href='#'>Track My Order</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className='social-icons'>
            <a
              href='#'
              className='social-icon'
              target='_blank'
              title='Facebook'>
              <i className='icon-facebook-f'></i>
            </a>
            <a href='#' className='social-icon' target='_blank' title='Twitter'>
              <i className='icon-twitter'></i>
            </a>
            <a
              href='#'
              className='social-icon'
              target='_blank'
              title='Instagram'>
              <i className='icon-instagram'></i>
            </a>
            <a href='#' className='social-icon' target='_blank' title='Youtube'>
              <i className='icon-youtube'></i>
            </a>
          </div>

          <form action='/logout' method='post'>
            <button className='btn btn-danger mt-3 w-100'>LOGOUT</button>
          </form>
        </div>
      </div>
    </>
  )
}
