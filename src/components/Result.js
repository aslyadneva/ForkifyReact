import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import { selectRecipe } from '../actions'; 

class Result extends Component {
  constructor(props) {
    super(props);  
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (event) {
    event.preventDefault();
    this.props.selectRecipe(this.props.id)
  }
  render () {
    return(
      <li onClick = {this.handleClick}>
        <a className="results__link" href={this.props.id}>
          <figure className="results__fig">
            <img src={this.props.image} alt={this.props.name}/>
          </figure>
          <div className="results__data">
            <h4 className="results__name">{this.props.name}</h4>
            <p className="results__author">{this.props.author}</p>
          </div>
        </a>
      </li>
    ); 
  }
}

export default connect(null, {selectRecipe})(Result); 