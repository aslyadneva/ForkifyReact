import React, {Component} from 'react'; 

class LikedRecipe extends Component {
  render () {
    return (
      <li>
        <a className="likes__link" href="#">
          <figure className="likes__fig">
              <img src={this.props.image} alt={this.props.title}/>
          </figure>

          <div className="likes__data">
              <h4 className="likes__name">{this.props.title}</h4>
              <p className="likes__author">{this.props.author}</p>
          </div>
        </a>
      </li>
    ); 
  }
}

export default LikedRecipe; 