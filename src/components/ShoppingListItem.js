import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { deleteShoppingListItem, editItemCount} from '../actions'; 

class ShoppingListItem extends Component {
    handleChange = (event) => {
        this.props.editItemCount(parseFloat(event.target.value, 10), this.props.id); 
    }

    render () {
        const {count, unit, ingredient, id} = this.props;
        return (
            <li className="shopping__item">

                <div className="shopping__count">
                    <input type="number" min="1" value={count} step="1" onChange={this.handleChange}/>
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

export default connect (null, { deleteShoppingListItem, editItemCount})(ShoppingListItem); 