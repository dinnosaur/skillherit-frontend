import React from 'react'
import styles from "../css/navbarStyles.css"

function Navbar(props) {
  return (
    
        <nav class=" uk-navbar-container  " data-uk-navbar >
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li onClick ={props.showList} class="uk-active"><a href="#">SkillHerit</a></li>
                </ul>
            </div>
            
            <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                <a uk-icon="icon: menu; ratio:2" href="#"></a>
                    <div class="uk-navbar-dropdown ">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li onClick = {props.logout} class="uk-nav"><a href="#">Logout</a></li>
                            <li  onClick = {props.createSkill} class="uk-nav"><a href="#">Teach your ways</a></li>
                        </ul>
                    </div>
                </li>
            </ul>    
            </div>
        </nav>
        

  );
}

export default Navbar;
