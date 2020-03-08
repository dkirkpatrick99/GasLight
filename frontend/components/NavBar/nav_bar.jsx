import React from 'react'

class NavBar extends React.Component{
   
    // componentDidMount() {
    //     this.props.fetch
    // }

    signupModal(e) {
        document.querySelector('.signup-pop').style.display = 'flex';
      }
    
      closeButton(e){
        document.querySelector('.signup-pop').style.display = 'none';
      }
   
   
   
    render() {
        if (!this.props.currentUser) {
            return (
        <div>
            <header className="header">
            <nav className="header-nav">
                <h1 className="header-logo">
                <ul className="left-header-items">
                    <li className="logo">
                <a href="#">MONEYWISE</a>
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

            <div className="signup-pop">
                <div className="signup-content">
                <div className="top-modal">
                    <div className="close" onClick={this.closeButton}>+</div>
                    <h1>Welcome!</h1>
                    <p>Sign Up to join MoneyWise</p>
                </div>
                <form action="">
                    <label>Username 
                        <input type="text" placeholder="Bill_Gates01"/>
                    </label>
                    <label>Email
                        <input type="text" placeholder="Billy_G$@gmail.com"/>
                    </label>
                    <label>Password
                        <input type="password" placeholder="DOMContentLoaded"/>
                    </label>
                    <input className="signup-submit" type="submit" value="Create Account"/>
                </form>
                <div className="form-switch">
                    <p>Already have an account? <a href="#">Log In</a></p>
                </div>
                </div>
            </div>
        </div>
            ) 

        } else {
            return (
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
                    <a href="/login">Sign Out</a>
                    </li>
                    <li className="nav-button">
            <a href="#">Profile</a>
                    </li>
                </ul>
                </div>
            </nav>
            </header>
                </div>
            )
        }
    }
}

export default NavBar;