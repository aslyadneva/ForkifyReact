import React, {Component} from 'react';
import ShoppingListItem from './ShoppingListItem'; 
import { connect } from 'react-redux'; 

class ShoppingList extends Component {

  render () {
    const { shoppingList } = this.props; 
    return (
      <div className="shopping">
        <h2 className="heading-2">My Shopping List</h2>
            <ul className="shopping__list">
              {shoppingList.map(item => {
                return (
                
                    <ShoppingListItem 
                      key ={item.id}
                      id = {item.id}
                      count = {item.count} 
                      unit = {item.unit} 
                      ingredient = {item.ingredient}
                    />
              
                );
              })}
            </ul> 
      </div>
    ); 
  }
}

const mapStateToProps = state => {
  return { shoppingList: state.shoppingList }
}
export default connect (mapStateToProps)(ShoppingList); 