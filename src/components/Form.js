import React, {Component} from 'react'; 

class Form extends Component {
  constructor () {
    super(); 
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendData();  
  }

  sendData () {
    this.props.handleClick(this.state.value); 
    this.setState({value: ''});
  }

  render () {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input 
          value = {this.state.value}
          onChange={this.handleChange}
          type = "text" 
          className = "search__field" 
          placeholder = "Search over 1,000,000 recipes..."
        />
          <button className="btn search__btn" >
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