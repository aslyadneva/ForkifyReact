import React, {Component, Fragment} from 'react';
import RecipeIngredient from './RecipeIngredient'; 
import { connect } from 'react-redux'; 
import { changeServings, addToShoppingList } from '../actions'; 
import uniqid from 'uniqid'; 

class Recipe extends Component {

    handleAddClick = (idIngredients) => {
        this.props.addToShoppingList(idIngredients); 
    }

    handleClick (type) {
        if (type === 'decrease' && this.props.recipe.servings > 1) {
            this.props.changeServings(type)
        } else if (type === 'increase') {
            this.props.changeServings(type); 
        }    
    }
   
    renderSpinner (isRecipeLoading) {
        if(isRecipeLoading) {
            return (
                <div className='loader'>
                  <svg>
                    <use href="img/icons.svg#icon-cw"></use>
                  </svg>
                </div>
            );
        } else {
            return null
        }       
    }

  renderRecipe(recipe) {
        const { image, title, author, source, ingredients, servings, time } = recipe; 
        const idIngredients = ingredients.map(ingredient => {
            ingredient.id = uniqid();
            return ingredient;
        })
        return (
            <Fragment>
            <figure className="recipe__fig">
                 <img src={image} alt={title} className="recipe__img"/>
                 <h1 className="recipe__title">
                     <span>{title}</span>
                 </h1>
             </figure>
     
             {/* RECIPE DETAILS */}
             <div className="recipe__details">
     
                 <div className="recipe__info">
                     <svg className="recipe__info-icon">
                         <use href="img/icons.svg#icon-stopwatch"></use>
                     </svg>
                         <span className="recipe__info-data recipe__info-data--minutes">{time}</span>
                         <span className="recipe__info-text"> minutes</span>
                 </div>
     
                 <div className="recipe__info">
                     <svg className="recipe__info-icon">
                         <use href="img/icons.svg#icon-man"></use>
                     </svg>
                     <span className="recipe__info-data recipe__info-data--people">{servings}</span>
                     <span className="recipe__info-text"> servings</span>
      
                     <div className="recipe__info-buttons">
                        {/* Decrease Servings Button */}
                         <button onClick = {() => this.handleClick('decrease')}className="btn-tiny">
                             <svg>
                                 <use href="img/icons.svg#icon-circle-with-minus"></use>
                             </svg>
                         </button>

                        {/* Increase Servings Button*/}
                         <button onClick = {() => this.handleClick('increase')} className="btn-tiny">
                             <svg>
                               <use href="img/icons.svg#icon-circle-with-plus"></use>
                             </svg>
                         </button>
                     </div>
                 </div>
     
                 <button className="recipe__love">
                     <svg className="header__likes">
                         <use href="img/icons.svg#icon-heart-outlined"></use>
                     </svg>
                 </button>
     
             </div>
             
             {/* RECIPE INGREDIENTS */}
             <div className="recipe__ingredients">
                 <ul className="recipe__ingredient-list">
                     {idIngredients.map(item => {
                         return ( 
                            <RecipeIngredient item ={item} key={item.id}/>
                         );
                     })}                    
                 </ul>
      
                 <button onClick = {() => this.handleAddClick(idIngredients)} className="btn-small recipe__btn">
                     <svg className="search__icon">
                         <use href="img/icons.svg#icon-shopping-cart"></use>
                     </svg>
                     <span>Add to shopping list</span>
                 </button>
             </div>
             
             {/* RECIPE DIRECTIONS */}
             <div className="recipe__directions">
     
                 <h2 className="heading-2">How to cook it</h2>
                 <p className="recipe__directions-text">
                     This recipe was carefully designed and tested by
                     <span className="recipe__by"> {author}</span>. Please check out directions at their website.
                 </p>
     
                 <a className="btn-small recipe__btn" href={source} target="_blank" rel="noopener noreferrer">
                     <span>Directions</span>
                     <svg className="search__icon">
                         <use href="img/icons.svg#icon-triangle-right"></use>
                     </svg>
                 </a>
     
             </div>  
         </Fragment>
        ); 
    
  }  

  render () {
    const { recipe, isRecipeLoading } = this.props; 
    return (
    <div className="recipe">
        {recipe.image ? this.renderRecipe(recipe) : this.renderSpinner(isRecipeLoading)}
    </div>
   ); 
  }
}

const mapStateToProps = state => {
    return { 
        recipe: state.selectedRecipe, 
        isRecipeLoading: state.selectedRecipe.isRecipeLoading
    }
}

export default connect (mapStateToProps, { changeServings, addToShoppingList })(Recipe); 