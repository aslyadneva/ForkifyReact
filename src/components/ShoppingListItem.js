import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { deleteShoppingListItem} from '../actions'; 

class ShoppingListItem extends Component {

    render () {
        const {count, unit, ingredient, id} = this.props;
        return (
            <li className="shopping__item">

                <div className="shopping__count">
                    <input type="number" defaultValue={count} step="100"/>
                    <p>{unit}</p>
                </div>

                <p className="shopping__description">{ingredient}</p>

                <button onClick = { () => this.props.deleteShoppingListItem(id) } className="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
        );
    }    
}

export default connect (null, { deleteShoppingListItem})(ShoppingListItem); 