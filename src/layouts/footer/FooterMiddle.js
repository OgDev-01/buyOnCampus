// import { Link } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function FooterMiddle() {
  return (
    <>
      <div className='footer-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-lg-6'>
              <div className='widget widget-about'>
                <img
                  src='/assets/images/campus-logo.png'
                  className='footer-logo'
                  alt='Footer Logo'
                  width='105'
                  height='25'
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                  Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                  luctus, metus.
                </p>

                <div className='widget-about-info'>
                  <div className='row'>
                    <div className='col-sm-6 col-md-4'>
                      <span className='widget-about-title'>
                        Got Question? Call us 24/7
                      </span>
                      <a href='tel:123456789'>+0123 456 789</a>
                    </div>
                    <div className='col-sm-6 col-md-8'>
                      <span className='widget-about-title'>Payment Method</span>
                      <figure className='footer-payments'>
                        <img
                          src='/assets/images/payments.png'
                          alt='Payment methods'
                          width='272'
                          height='20'
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-4 col-lg-2'>
              <div className='widget'>
                <h4 className='widget-title'>Information</h4>

                <ul className='widget-list'>
                  <li>
                    <a href='/about'>About Campus</a>
                  </li>
                  <li>
                    <a href='#'>How to shop on Campus</a>
                  </li>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                  <li>
                    <a href='/contact.html'>Contact us</a>
                  </li>
                  <li>
                    <Link to='/login'>Log in</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-sm-4 col-lg-2'>
              <div className='widget'>
                <h4 className='widget-title'>Customer Service</h4>

                <ul className='widget-list'>
                  <li>
                    <a href='#'>Terms and conditions</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
