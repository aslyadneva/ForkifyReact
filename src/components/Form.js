import React, {Component} from 'react'; 

class Form extends Component {
  render () {
    return (
      <form className="search">
        <input type="text" className="search__field" placeholder="Search over 1,000,000 recipes..."/>
          <button className="btn search__btn">
            <svg className="search__icon">
              <use href="img/icons.svg#icon-magnifying-glass"></use>
            </svg>
           <span>Search</span>
        </button> 
      </form>
    ); 
  }
}

export default Form; 