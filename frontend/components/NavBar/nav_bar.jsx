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
        this.searchedCamps = [];
        // this.toggleDrop = this.toggleDrop.bind(this)
        this.findMatches = this.findMatches.bind(this);
        this.displayMatches = this.displayMatches.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this)
        this.pressed = [];
        this.secretCode = 'money'
    }


    componentDidMount() {
        this.props.fetchCampaigns()
        // this.toggleDrop()
    }

    toggleSearch(e) {
        const searchIcon = document.querySelector('.searchicon')
        const searchInput = document.querySelector('.search-input')

        if(searchInput.style.display === "none"){
            searchInput.style.display = "block"
        } else {
            searchInput.style.display = "none"
        }
        
    }
  
    findMatches(wordToMatch, allCamps) {
      return allCamps.filter(camp => {
        const regex = new RegExp(wordToMatch, 'gi');
        if(wordToMatch.length === 0) {
            return null
        } else if(wordToMatch === 'money') {
            cornify_add();
        } else {
            return camp.title.match(regex)
        }
      });
    }
  
    displayMatches(e) {
      const suggestions = document.querySelector('.suggestions');

      const matchArray = this.findMatches(e.currentTarget.value, this.props.campaigns)
      const html = matchArray.map(camp => {
        const regex = new RegExp(e.currentTarget.value, 'gi');
        const campName = camp.title.replace(regex, `<span class="hl">${e.currentTarget.value}</span>`)
        // const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
  
        return `
          <li> 
            <a href="/#/campaigns/${camp.id}">${campName}</a>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;
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
                <div className="navheader-contain">
            <header className="header">
            <nav className="header-nav">
                <h1 className="header-logo">
                <ul className="left-header-items">
                    <li className="logo">
                        <NavLink to={'/'}>MONEYWISE</NavLink>
                    </li>
                    <li className="nav-button">
                        <a href={'https://github.com/dkirkpatrick99/MoneyWise.git'}>Git Repo <i className="fas fa-chevron-down"></i></a>
                        <ul className="drop-down">
                        </ul>
                    </li>
                    <li className="nav-button">
                        <a href={'https://dkirkpatrick99.github.io/DaltonKirkpatrickPortfolio/'}>Dalton's Portfolio</a>
                    </li>
                    <li onClick={this.toggleSearch} className="nav-button searchicon">
                        <i class="fas fa-search"></i>
                    </li>
                    <li className="search-input">
                        <input className="searchinp" onChange={this.displayMatches} type="text" placeholder="Search by Campaign Name"/>
                        <ul className="suggestions">
                        </ul>
                    </li>
                </ul>
                </h1>
                <div className="nav-right">
                <ul className="right-header-items">
                    <li className="nav-button">
                    <NavLink to={'/categories/0'}>Explore</NavLink>
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
                                        <a href={'https://github.com/dkirkpatrick99/MoneyWise.git'}>Git Repo <i className="fas fa-chevron-down"></i></a>
                                    </li>
                                    <li className="nav-button">
                                        <a href={'https://dkirkpatrick99.github.io/DaltonKirkpatrickPortfolio/'}>Dalton's Portfolio</a>
                                    </li>
                                    <li onClick={this.toggleSearch} className="nav-button searchicon">
                                        <i class="fas fa-search"></i>
                                    </li>
                                    <li className="search-input">
                                        <input className="searchinp" onChange={this.displayMatches} type="text" placeholder="Search by Campaign Name"/>
                                        <ul className="suggestions">
                                        </ul>
                                    </li>
                                </ul>
                            </h1>
                            <div className="nav-right">
                                <ul className="right-header-items">
                                    <li className="nav-button">
                                        <NavLink to={'/categories/0'}>Explore</NavLink>
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