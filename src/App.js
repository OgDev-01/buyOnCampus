import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./layouts/header/Header"
import Home from "./layouts/pages/Home"
import Footer from "./layouts/footer/Footer"
import About from "./layouts/pages/About"
import Contact from "./layouts/pages/Contact"
import Login from "./layouts/pages/Login"
import MobileNav from "./layouts/footer/MobileNav"
import React from "react"

function App() {
  return (
    <Router>
      <div className='page-wrapper'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact={true} path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
        <footer className='footer'>
          <Footer />
        </footer>
        <MobileNav />
      </div>
    </Router>
  )
}

export default App
