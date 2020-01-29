import React from 'react'; 

const ResultsButtons = () => {
  return (
   
      <button className={`btn-inline results__btn--${this.props.arrow}`}>
        <svg className="search__icon">
          <use href={`img/icons.svg#icon-triangle-${this.props.arrow}`}></use>
        </svg>
        <span>{this.props.page}</span>
      </button>

    
  ); 
}; 

export default ResultsButtons; 