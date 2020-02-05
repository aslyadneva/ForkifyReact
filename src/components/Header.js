import React, {Component} from 'react'; 
import Form from './Form'; 

class Header extends Component {
  render() {
    return (
      <header className="header">

        <img src="img/logo.png" alt="Logo" className="header__logo"/>

        <Form/>
        
        <div className="likes">
            <div className="likes__field">
                <svg className="likes__icon">
                     <use href="img/icons.svg#icon-heart"></use>
                </svg>
         </div>
        <div className="likes__panel">
                    {/* <ul class="likes__list">
                        
                        <li>
                            <a class="likes__link" href="#23456">
                                <figure class="likes__fig">
                                    <img src="img/test-1.jpg" alt="Test">
                                </figure>
                                <div class="likes__data">
                                    <h4 class="likes__name">Pasta with Tomato ...</h4>
                                    <p class="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li>
                       
                    </ul> */}
        </div>
        </div>
    </header>
    ); 
  }
}

export default Header; 