import React from 'react'
import { withRouter } from 'react-router-dom'


class NavBar extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                    <a onClick={() => this.props.openModal('login')}>Log In</a>
                    </li>
                    <li className="nav-button">
                    <a onClick={() => this.props.openModal('signup')}>Sign Up</a>
                    </li>
                </ul>
                </div>
            </nav>
            </header>
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
                                        <a onClick={this.props.logout}>Sign Out</a>
                                    </li>
                                    <li className="nav-button">
                                        <a href="#">{this.props.currentUser.username}
                                        <i class="fas fa-user-cog"></i>
                                        </a>
                                        
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