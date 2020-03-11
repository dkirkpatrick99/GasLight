import React from 'react'
import CustomArrows from '../home-slider/home-slider'

class UserProfile extends React.Component {
    constructor(props){
        super(prop)
    }





    render() {
        return(
  


            <div>
                <header className="header">
          <nav className="header-nav">
            <h1 className="header-logo">
              <ul className="left-header-items">
                <li className="logo">
              <a href="#">MoneyWise</a>
                </li>
              <li className="nav-button">
                <a href="#">Explore</a>
                <ul className="drop-down">
                </ul>
              </li>
                <li className="nav-button">
              <a href="#">What We Do</a>
                </li>
              </ul>
            </h1>
            <div className="nav-right">
              <ul className="right-header-items">
                <li className="nav-button">
                  <a href="#">For Entrepreneurs</a>
                </li>
                <li className="nav-button">
                  <a href="#">Start a Campaign</a>
                </li>
                <li className="nav-button">
                  <a href="/login">Log In</a>
                </li>
                <li className="nav-button">
                  <a href="#" onClick={this.signupModal}>Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
            </div>
        )
    }
}

export default UserProfile;