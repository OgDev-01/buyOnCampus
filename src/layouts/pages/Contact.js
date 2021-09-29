import React from "react"
import ContactForm from "../ContactForm"

export default function Contact() {
  return (
    <>
      <div className='container'>
        <div
          className='page-header page-header-big text-center'
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5940839/pexels-photo-5940839.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
          }}>
          <h1 className='page-title text-dark'>
            Contact us<span className='text-dark'>keep in touch with us</span>
          </h1>
        </div>
      </div>
      <ContactForm />
    </>
  )
}
