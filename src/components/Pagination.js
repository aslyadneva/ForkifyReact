import React, {Fragment} from 'react';
import ResultsButton from './ResultsButton'; 

const Pagination = (props) => {

  const pages = Math.ceil(props.totalPosts/props.postsPerPage); 

  let button; 
  if (props.page === 1 && pages > 1) { //if on page 1
    button = <ResultsButton 
                number = {props.page + 1} 
                type = "next" 
                handleClick = {props.handlePageButtonClick}
                direction = 'right'
              />;
  } else if (props.page < pages) { //if on page 2
    button = <Fragment>
      <ResultsButton 
        number = {props.page - 1} 
        type ='prev'
        handleClick = {props.handlePageButtonClick}
        direction = 'left'
      />
      <ResultsButton 
        number = {props.page + 1} 
        type="next" 
        handleClick={props.handlePageButtonClick}
        direction = 'right'
      />
      </Fragment>;
  } else if (props.page === pages && pages > 1){ //if on page 3 
    button = <ResultsButton 
                number = {props.page - 1} 
                type='prev'
                handleClick={props.handlePageButtonClick}
                direction = 'left'
              />;
  }

  return (
    <div className="results__pages">
     {button}
    </div>
  ); 
}

export default Pagination; 