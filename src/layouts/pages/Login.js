import React from "react"

export default function Login() {
  return (
    <>
      <div
        className='login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17'
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5965689/pexels-photo-5965689.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)",
        }}>
        <div className='container'>
          <div className='form-box'>
            <div className='form-tab'>
              <ul className='nav nav-pills nav-fill' role='tablist'>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='signin-tab-2'
                    data-toggle='tab'
                    href='#signin-2'
                    role='tab'
                    aria-controls='signin-2'
                    aria-selected='false'>
                    Sign In
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='register-tab-2'
                    data-toggle='tab'
                    href='#register-2'
                    role='tab'
                    aria-controls='register-2'
                    aria-selected='true'>
                    Register
                  </a>
                </li>
              </ul>
              <div className='tab-content'>
                <div
                  className='tab-pane fade'
                  id='signin-2'
                  role='tabpanel'
                  aria-labelledby='signin-tab-2'>
                  <form action='/login' method='POST'>
                    <div className='form-group'>
                      <label for='email '>Your email address *</label>
                      <input
                        type='text'
                        className='form-control'
                        id='email'
                        name='email'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label for='password'>Password *</label>
                      <input
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        required
                      />
                    </div>

                    <div className='form-footer'>
                      <button
                        type='submit'
                        className='btn btn-outline-primary-2'>
                        <span>LOG IN</span>
                        <i className='icon-long-arrow-right'></i>
                      </button>

                      <div className='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          className='custom-control-input'
                          id='signin-remember'
                        />
                        <label
                          className='custom-control-label'
                          for='signin-remember'>
                          Remember Me
                        </label>
                      </div>

                      <a href='#' className='forgot-link'>
                        Forgot Your Password?
                      </a>
                    </div>
                  </form>
                  <div className='form-choice'>
                    <p className='text-center'>or sign in with</p>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <a href='#' className='btn btn-login btn-g'>
                          <i className='icon-google'></i>
                          Login With Google
                        </a>
                      </div>
                      <div className='col-sm-6'>
                        <a href='#' className='btn btn-login btn-f'>
                          <i className='icon-facebook-f'></i>
                          Login With Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade show active'
                  id='register-2'
                  role='tabpanel'
                  aria-labelledby='register-tab-2'>
                  <form action='/register' method='POST'>
                    <div className='form-group'>
                      <label for='first_name'>First name *</label>
                      <input
                        type='text'
                        className='form-control'
                        id='first_name'
                        name='first_name'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label for='last_name'>Last name *</label>
                      <input
                        type='text'
                        className='form-control'
                        id='last_name'
                        name='last_name'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label for='username'>Username *</label>
                      <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='username'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label for='email'>Your email address *</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <label for='password'>Password *</label>
                      <input
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <label for='user_type'>User Type *</label>
                      <select
                        className='custom-select form-control'
                        id='user_type'
                        name='user_type'>
                        <option selected>Choose...</option>
                        <option value='Regular'>Regular</option>
                        <option value='Shop-Vendor'>Shop-Vendor</option>
                        <option value='Services-vendor'>Services-Vendor</option>
                      </select>
                    </div>

                    <div className='form-footer'>
                      <button
                        type='submit'
                        className='btn btn-outline-primary-2'>
                        <span>SIGN UP</span>
                        <i className='icon-long-arrow-right'></i>
                      </button>

                      <div className='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          className='custom-control-input'
                          id='policy'
                          required
                        />
                        <label className='custom-control-label' for='policy'>
                          I agree to the
                          <a href='#'>privacy policy</a> *
                        </label>
                      </div>
                    </div>
                  </form>
                  <div className='form-choice'>
                    <p className='text-center'>or sign in with</p>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <a href='#' className='btn btn-login btn-g'>
                          <i className='icon-google'></i>
                          Login With Google
                        </a>
                      </div>
                      <div className='col-sm-6'>
                        <a href='#' className='btn btn-login  btn-f'>
                          <i className='icon-facebook-f'></i>
                          Login With Facebook
                        </a>
                      </div>
                    </div>
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
