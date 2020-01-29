import React, {Component} from 'react'; 

class Result extends Component {
  render () {
    return(
      <li>
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

export default Result; 