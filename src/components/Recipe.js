import React, {Component, Fragment} from 'react';
import RecipeIngredient from './RecipeIngredient'; 
import { connect } from 'react-redux'; 

class Recipe extends Component {
    parseIngredients (ingredients) {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds']; 
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']; 
        const units = [...unitsShort, 'kg', 'g'];
    
        const newIngredients = ingredients.map(element => {
            //EX. '1 Tbsp olive oil'       
            // 1) Uniform units 
            let ingredient = element.toLowerCase();  //'1 tbsp olive oil'

            unitsLong.forEach((unit, i) => {
              ingredient = ingredient.replace(unit, unitsShort[i]); //'1 tbsp olive oil' - nothing happens here because the unit is already short
            });
    
            // 2) Remove parentheses
            ingredient = ingredient.replace( / *\([^)]*\) */g , ' ') //'1 tbsp olive oil' - no parens so nothing happens again 
    
            // 3) Parse ingredients into count, unit, and ingredient name
            const ingredientWordsArr = ingredient.split(' ');    // const ingredientWordsArr = ['1', 'tbsp', 'olive', 'oil']
            const unitIndex = ingredientWordsArr.findIndex(word => units.includes(word)); // returns 1 because 'tbsp' is in the array 
    
            let ingredientObject;
            if (unitIndex > -1) {
              //Means there is a unit in the ingedient description from the unitsShort array
              //ex. 4 1/2 cups will be arrCount = [4, 1/2] ---> eval("4+1/2") ---> 4.5
              //ex. 4 cups will be arrCount = [4]
                const arrCount = ingredientWordsArr.slice(0, unitIndex); 
        
                let count;
                if (arrCount.length === 1) {
                    count = eval(ingredientWordsArr[0].replace('-', '+')); 
                } else {
                    count = eval(ingredientWordsArr.slice(0, unitIndex).join('+'))
                }
        
                ingredientObject = {
                    count,
                    unit: ingredientWordsArr[unitIndex], 
                    ingredient: ingredientWordsArr.slice(unitIndex +1).join(' ')
                };
    
            } else if ( parseInt(ingredientWordsArr[0], 10) ) { 
                    // This means there is a number in the ingredient description
                    // Parse the number string to an actual number in the if condition
            
                    ingredientObject ={
                        count: parseInt(ingredientWordsArr[0], 10),
                        unit: '', 
                        ingredient: ingredientWordsArr.slice(1).join(' ')
                    };
            
            } else if (unitIndex === -1) {
                    //There is no unit or number in that ingredient description
            
                    ingredientObject = {
                        count: 1, 
                        unit: '', 
                        ingredient
                }
            }; 
            return ingredientObject; 
        });
    
        return newIngredients
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
        const { image_url, title, author, source_url, ingredients } = recipe; 
        const parsedIngredients = this.parseIngredients(ingredients);
        return (
            <Fragment>
            <figure className="recipe__fig">
                 <img src={image_url} alt={title} className="recipe__img"/>
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
                         <span className="recipe__info-data recipe__info-data--minutes">45</span>
                         <span className="recipe__info-text"> minutes</span>
                 </div>
     
                 <div className="recipe__info">
                     <svg className="recipe__info-icon">
                         <use href="img/icons.svg#icon-man"></use>
                     </svg>
                     <span className="recipe__info-data recipe__info-data--people">4</span>
                     <span className="recipe__info-text"> servings</span>
      
                     <div className="recipe__info-buttons">
                         <button className="btn-tiny">
                             <svg>
                                 <use href="img/icons.svg#icon-circle-with-minus"></use>
                             </svg>
                         </button>
                         <button className="btn-tiny">
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
                     {parsedIngredients.map(item => {
                         return (
                            <RecipeIngredient item ={item}/>
                         );
                     })}                    
                 </ul>
      
                 <button className="btn-small recipe__btn">
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
     
                 <a className="btn-small recipe__btn" href={source_url} target="_blank">
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
        {recipe ? this.renderRecipe(recipe) : this.renderSpinner(isRecipeLoading)}
    </div>
   ); 
  }
}

const mapStateToProps = state => {
    return { 
        recipe: state.selectedRecipe.selectedRecipe, 
        isRecipeLoading: state.selectedRecipe.isRecipeLoading
    }
}

export default connect (mapStateToProps)(Recipe); 