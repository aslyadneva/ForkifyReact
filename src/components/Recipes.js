import React from 'react';
import Recipe from './Recipe'; 
import { connect } from 'react-redux';

const Recipes = (props) => {

    const renderRecipe = () => {
      if (props.recipe.selectedRecipe === null) {
        return null; 
      } else {
        return (
          <Recipe 
            image = {props.recipe.selectedRecipe.image_url}
            title = {props.recipe.selectedRecipe.title}
            author = {props.recipe.selectedRecipe.publisher}
            src = {props.recipe.selectedRecipe.publisher_url}
          />
        ); 
      }
    }
 
    return (     
      <div className="recipe">
        {renderRecipe()}
      </div>
    );

}

const mapStateToProps = state => {
  return { recipe: state.selectedRecipe }
}

export default connect (mapStateToProps)(Recipes); 