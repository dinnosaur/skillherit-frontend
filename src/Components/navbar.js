import React from 'react'
import styles from "../css/navbarStyles.css"

function Navbar(props) {
  return (
    
        <nav class="uk-navbar uk-navbar-container uk-margin "uk-navbar="dropbar: true" >
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Active</a></li>
                </ul>
            </div>
            
            <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                <a class="uk-navbar-toggle" uk-icon="icon: menu; ratio:2" href="#"></a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li onClick = {props.logout} class="uk-active"><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
              
            </div>
            
            

        </nav>

  );
}

export default Navbar;
