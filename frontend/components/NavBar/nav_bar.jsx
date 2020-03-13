import React from 'react'
import { withRouter } from 'react-router-dom'
import {NavLink} from 'react-router-dom'


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
                <NavLink to={'/'}>MONEYWISE</NavLink>
                    </li>
                <li className="nav-button">
                    <a>Explore <i class="fas fa-chevron-down"></i></a>
                    <ul className="drop-down">
                    </ul>
                </li>
                    <li className="nav-button">
                <NavLink to={'/'}>What We Do</NavLink>
                    </li>
                </ul>
                </h1>
                <div className="nav-right">
                <ul className="right-header-items">
                    <li className="nav-button">
                    <NavLink to={'/'}>For Entrepreneurs</NavLink>
                    </li>
                    <li className="nav-button">
                    <a onClick={() => this.props.openModal('signup')}>Start a Campaign</a>
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
                                        <NavLink to={'/'}>MoneyWise</NavLink>
                                    </li>
                                    <li className="nav-button">
                                        <NavLink to={'/'}>Explore <i class="fas fa-chevron-down"></i></NavLink>
                                    <ul className="drop-down">
                                    </ul>
                                </li>
                                    <li className="nav-button">
                                        <NavLink to={'/'} href="#">What We Do</NavLink>
                                    </li>
                                </ul>
                            </h1>
                            <div className="nav-right">
                                <ul className="right-header-items">
                                    <li className="nav-button">
                                        <NavLink to={'/'}>For Entrepreneurs</NavLink>
                                    </li>
                                    <li className="nav-button">
                                        <NavLink to={"/campaigns/new"} href="#">Start a Campaign</NavLink>
                                    </li>
                                    <li className="nav-button">
                                        <a onClick={this.props.logout}>Sign Out</a>
                                    </li>
                                    <li className="nav-button current-user">
                                        <a><i class="fas fa-robot"></i> &nbsp; {this.props.currentUser.username}
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