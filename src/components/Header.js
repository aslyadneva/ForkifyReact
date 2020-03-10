import React, {Component} from 'react'; 
import Form from './Form'; 
import Likes from './Likes'; 

class Header extends Component {
  render() {
    return (
        <header className="header">
            <img src="img/logo.png" alt="Logo" className="header__logo"/>
            <Form/>        
            <Likes/> 
        </header>
    ); 
  }
}

export default Header; 