import React from "react"

export default function RightNav() {
  return (
    <>
      <div className='header-right'>
        <div className='dropdown cart-dropdown'>
          <a
            href='#'
            className='dropdown-toggle'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            data-display='static'>
            <div className='icon'>
              <i className='icon-user'></i>
              {/* <span className='cart-count'></span>\ */}
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
