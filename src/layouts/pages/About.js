import React from "react"
import { Link } from "react-router-dom"
import Loading from "../../Assets/Loading"
import Links from "../../components/Links"

const Img = () => {
  return (
    <img
      src='https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
      alt='image'
      className='mx-auto mb-6'
    />
  )
}
export default function About() {
  return (
    <>
      <div className='page-content pb-3 mt-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='about-text text-center mt-3'>
                <h2 className='title text-center mb-2'>Who We Are</h2>
                <p>
                  Sed pretium, ligula sollicitudin laoreet viverra, tortor
                  libero sodales leo, eget blandit nunc tortor eu nibh.
                  Suspendisse potenti. Sed egestas, ante et vulputate volutpat,
                  uctus metus libero eu augue. Morbi purus libero, faucibus
                  adipiscing, commodo quis, gravida id, est. Sed lectus.
                  Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis.
                </p>
                <img
                  src='assets/images/about/about-2/signature.png'
                  alt='signature'
                  className='mx-auto mb-5'
                />

                <Img />
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <div className='icon-box icon-box-sm text-center'>
                <span className='icon-box-icon'>
                  <i className='icon-puzzle-piece'></i>
                </span>
                <div className='icon-box-content'>
                  <h3 className='icon-box-title'>Design Quality</h3>
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero <br />
                    eu augue.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='icon-box icon-box-sm text-center'>
                <span className='icon-box-icon'>
                  <i className='icon-life-ring'></i>
                </span>
                <div className='icon-box-content'>
                  <h3 className='icon-box-title'>Professional Support</h3>
                  <p>
                    Praesent dapibus, neque id cursus faucibus, <br />
                    tortor neque egestas augue, eu vulputate <br />
                    magna eros eu erat.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='icon-box icon-box-sm text-center'>
                <span className='icon-box-icon'>
                  <i className='icon-heart-o'></i>
                </span>
                <div className='icon-box-content'>
                  <h3 className='icon-box-title'>Made With Love</h3>
                  <p>
                    Pellentesque a diam sit amet mi ullamcorper
                    <br />
                    vehicula. Nullam quis massa sit amet <br />
                    nibh viverra malesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-2'></div>

        <div
          className='bg-image pt-7 pb-5 pt-md-12 pb-md-9'
          style={{
            backgroundImage: "url(assets/images/backgrounds/bg-4.jpg)",
          }}>
          <div className='container'>
            <div className='row'>
              <div className='col-6 col-md-3'>
                <div className='count-container text-center'>
                  <div className='count-wrapper text-white'>
                    <span
                      className='count'
                      data-from='0'
                      data-to='40'
                      data-speed='3000'
                      data-refresh-interval='50'>
                      0
                    </span>
                    k+
                  </div>
                  <h3 className='count-title text-white'>Happy Customer</h3>
                </div>
              </div>

              <div className='col-6 col-md-3'>
                <div className='count-container text-center'>
                  <div className='count-wrapper text-white'>
                    <span
                      className='count'
                      data-from='0'
                      data-to='20'
                      data-speed='3000'
                      data-refresh-interval='50'>
                      0
                    </span>
                    +
                  </div>
                  <h3 className='count-title text-white'>Years in Business</h3>
                </div>
              </div>

              <div className='col-6 col-md-3'>
                <div className='count-container text-center'>
                  <div className='count-wrapper text-white'>
                    <span
                      className='count'
                      data-from='0'
                      data-to='95'
                      data-speed='3000'
                      data-refresh-interval='50'>
                      0
                    </span>
                    %
                  </div>
                  <h3 className='count-title text-white'>Return Clients</h3>
                </div>
              </div>

              <div className='col-6 col-md-3'>
                <div className='count-container text-center'>
                  <div className='count-wrapper text-white'>
                    <span
                      className='count'
                      data-from='0'
                      data-to='15'
                      data-speed='3000'
                      data-refresh-interval='50'>
                      0
                    </span>
                  </div>
                  <h3 className='count-title text-white'>Awards Won</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-light-2 pt-6 pb-7 mb-6'>
          <div className='container'>
            <div className='text-center mt-3'>
              <Link
                to='/products'
                className='btn btn-sm btn-minwidth-lg btn-outline-primary-2'>
                <span>EXPLORE THE MARKET</span>
                <i className='icon-long-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='brands-text text-center mx-auto mb-6'>
                <h2 className='title'>
                  The world's premium design brands in one destination.
                </h2>
                <p>
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nis
                </p>
              </div>
              <div className='brands-display'>
                <div className='row justify-content-center'>
                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/1.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/2.png' alt='Brand Name' />
                    </a>
                  </div>
                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/3.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/7.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/4.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/5.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/6.png' alt='Brand Name' />
                    </a>
                  </div>

                  <div className='col-6 col-sm-4 col-md-3'>
                    <a href='#' className='brand'>
                      <img src='assets/images/brands/9.png' alt='Brand Name' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
