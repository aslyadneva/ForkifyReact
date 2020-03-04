import React, {Component, Fragment} from 'react';

class RecipeIngredient extends Component {
  render() {
    const { item } = this.props; 
    return (
      <li className="recipe__item">
        <svg className="recipe__icon">
          <use href="img/icons.svg#icon-check"></use>
        </svg>
                    
        <div className="recipe__count">{item.count}</div>
        <div className="recipe__ingredient">
          <span className="recipe__unit">{item.unit}</span>
          {` ${item.ingredient}`}
        </div>
      </li>
    );
  }
}

export default RecipeIngredient; 