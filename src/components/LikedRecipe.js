import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { selectRecipe } from '../actions'; 

class LikedRecipe extends Component {
  render () {
    const {id, title, author, image } = this.props; 
    return (
      <li onClick={()=> this.props.selectRecipe(id)}>
        <a className="likes__link" href="#">
          <figure className="likes__fig">
              <img src={image} alt={title}/>
          </figure>

          <div className="likes__data">
              <h4 className="likes__name">{title}</h4>
              <p className="likes__author">{author}</p>
          </div>
        </a>
      </li>
    ); 
  }
}
const mapStateToProps = state => {
  return {
    likedRecipes: state.likedRecipes
  }
}
export default connect (mapStateToProps, { selectRecipe })(LikedRecipe); 