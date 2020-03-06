import React, {Component} from 'react'; 
import Form from './Form'; 
import LikedRecipe from './LikedRecipe'; 
import { connect } from 'react-redux'; 

class Header extends Component {

    // renderLikedRecipes(likedRecipes) {
    //     console.log('inside renderLikedRecipes')
        
            


    // }

  render() {
      const { likedRecipes } = this.props; 
    return (
      <header className="header">

        <img src="img/logo.png" alt="Logo" className="header__logo"/>

        <Form/> 
        
        <div className="likes" style={{visibility: likedRecipes[0] ? 'visible' : 'hidden'}}>
            <div className="likes__field">
                <svg className="likes__icon">
                     <use href="img/icons.svg#icon-heart"></use>
                </svg> 
            </div>

            <div className="likes__panel">
                <ul className="likes__list">
                    {likedRecipes.map(recipe => {
                return (
                    <LikedRecipe 
                        key= {recipe.title}
                        title={recipe.title} 
                        image={recipe.image} 
                        author={recipe.author}
                    />
                );
            })}                      
                </ul> 
            </div>
        </div>

    </header>
    ); 
  }
}

const mapStateToProps = state => {
    return {
        likedRecipes: state.likedRecipes
    }
}

export default connect(mapStateToProps)(Header); 