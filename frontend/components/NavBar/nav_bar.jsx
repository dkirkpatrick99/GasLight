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
        // this.myInput =  <div className="nav-dropdown">
        //                     <div>
        //                         hello
        //                     </div>
        //                     <div>sup</div>
        //                     <div>buenos tardes</div>
        //                 </div>
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        // this.toggleDrop = this.toggleDrop.bind(this)
    }

    // componentDidMount() {
    //     this.toggleDrop()
    // }

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
                    <a>Explore <i className="fas fa-chevron-down"></i></a>
                    <ul className="drop-down">
                    </ul>
                </li>
                    <li className="nav-button">
                <NavLink to={'/'}>Dalton's Portfolio</NavLink>
                    </li>
                    <li className="nav-button">
                    <i class="fas fa-search"></i>
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
                                    <li className="nav-button drop-button">
                                        <NavLink to={'/'}>Explore <i className="fas fa-chevron-down"></i></NavLink>
                                    </li>
                                    <li className="nav-button">
                                        <NavLink to={'/'} href="#">Dalton's Portfolio</NavLink>
                                    </li>
                                    <li className="nav-button">
                                        <i className="fas fa-search"></i>
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
                                        <NavLink to={`/users/${this.props.currentUser.id}`}><i className="fas fa-robot"></i> &nbsp; {this.props.currentUser.username}
                                        </NavLink>                                 
                                    </li>
                                </ul>
                        </div>
                    </nav>
                </header>

                {/* <div className="nav-dropdown">
                    <div>
                        hello
                    </div>
                    <div>sup</div>
                    <div>buenos tardes</div>
                </div> */}
            </div>
            )
        }
    }
    
    
    // toggleDrop() {
    //     // this.myInput.setAttribute("class", "nav-dropdown");
    
    //     var y = document.querySelector(".nav-dropdown")
    //     var x = document.getElementsByClassName("nav-dropdown")
    //     // debugger
    //     // if (x === null) {
    //     //     x = this.myInput
    //     //     debugger
    //     // }
    //     console.log("bummer")
    //     // if(x === document.getElementsByClassName("nav-dropdown")) return null
    //     // // document.querySelector('.nav-dropdown').style.display = "block"
    //     // debugger
    //     // if (x[0].style.display === "none") {
    //     //       x[0].style.display = "block";
    //     //       debugger
    //     // } else {
    //     //     x[0].style.display = "none";
    //     // }
    // }
}


export default NavBar;

// ref={input => {this.myInput = input;}}

{/* <div class="nav-dropdown"><div>hello</div><div>sup</div><div>buenos tardes</div></div> */}