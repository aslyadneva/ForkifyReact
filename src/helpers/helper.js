const limitRecipeTitle = (title, limit=17) => {
  const newTitle = []; 

  if (title.length > limit) {
    title.split(' ').reduce((accumulator, currentWord) => {
    if (accumulator + currentWord.length <= limit) {
            newTitle.push(currentWord); 
          }
          return accumulator + currentWord.length; 
        }, 0);
      return `${newTitle.join(' ')}...`; 
  }
  return title; 
};

export default limitRecipeTitle; 