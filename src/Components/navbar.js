import React from 'react'
import styles from "../css/navbarStyles.css"
import { Link } from "react-router-dom"

function Navbar(props) {
  return (
        <nav class=" uk-navbar-container   " data-uk-navbar  data-uk-sticky>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li  class="uk-active"><Link to="/skills">SkillHerit</Link></li>
                    <li class="uk-inactice"><Link to="/track">My Track</Link></li>
                </ul>
            </div>
            
            <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                <a uk-icon="icon: menu; ratio:2" href="#"></a>
                    <div class="uk-navbar-dropdown ">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li onClick={props.logout} class="uk-nav"><Link to= "/"> Logout </Link></li>
                            <li  class="uk-nav"><Link to="/new" >Teach your ways</Link></li>
                            <li   class="uk-nav"><Link to="/journey"> Journey </Link></li>
                        </ul>
                    </div>
                </li>
            </ul>    
            </div>
        </nav>
        

  );
}

export default Navbar;
