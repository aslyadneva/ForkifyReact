import React, {Component} from 'react'; 
import LikedRecipe from './LikedRecipe'; 
import { connect } from 'react-redux'; 
import ls from 'local-storage'; 
import { loadLocalStorageLikes } from '../actions'; 

class Likes extends Component {
  componentDidMount () {
    let localStorageLikes = ls.get('likes'); 
    
    if (localStorageLikes) {
        let parsedLocal = JSON.parse(localStorageLikes); 
        this.props.loadLocalStorageLikes(parsedLocal)
    }
  }

  render () {
    const {likedRecipes} = this.props; 
    return (
      <div className="likes" style={{visibility: likedRecipes.length >= 1 ? 'visible': 'hidden'}}>
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
                              id= {recipe.id}
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
    ); 
  }
}

const mapStateToProps = state => {
  return {
      likedRecipes: state.likedRecipes
  }
}
export default connect(mapStateToProps, {loadLocalStorageLikes})(Likes); 