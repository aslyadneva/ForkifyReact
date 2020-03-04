export const limitRecipeTitle = (title, limit=17) => {
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

export const parseIngredients = (ingredients) => {
  const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds']; 
  const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']; 
  const units = [...unitsShort, 'kg', 'g'];

  const newIngredients = ingredients.map(element => {
      //EX. '1 Tbsp olive oil'       
      // 1) Uniform units 
      let ingredient = element.toLowerCase();  //'1 tbsp olive oil'

      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]); //'1 tbsp olive oil' - nothing happens here because the unit is already short
      });

      // 2) Remove parentheses
      ingredient = ingredient.replace( / *\([^)]*\) */g , ' ') //'1 tbsp olive oil' - no parens so nothing happens again 

      // 3) Parse ingredients into count, unit, and ingredient name
      const ingredientWordsArr = ingredient.split(' ');    // const ingredientWordsArr = ['1', 'tbsp', 'olive', 'oil']
      const unitIndex = ingredientWordsArr.findIndex(word => units.includes(word)); // returns 1 because 'tbsp' is in the array 

      let ingredientObject;
      if (unitIndex > -1) {
        //Means there is a unit in the ingedient description from the unitsShort array
        //ex. 4 1/2 cups will be arrCount = [4, 1/2] ---> eval("4+1/2") ---> 4.5
        //ex. 4 cups will be arrCount = [4]
          const arrCount = ingredientWordsArr.slice(0, unitIndex); 
  
          let count;
          if (arrCount.length === 1) {
              count = eval(ingredientWordsArr[0].replace('-', '+')); 
          } else {
              count = eval(ingredientWordsArr.slice(0, unitIndex).join('+'))
          }
  
          ingredientObject = {
              count,
              unit: ingredientWordsArr[unitIndex], 
              ingredient: ingredientWordsArr.slice(unitIndex +1).join(' ')
          };

      } else if ( parseInt(ingredientWordsArr[0], 10) ) { 
              // This means there is a number in the ingredient description
              // Parse the number string to an actual number in the if condition
      
              ingredientObject ={
                  count: parseInt(ingredientWordsArr[0], 10),
                  unit: '', 
                  ingredient: ingredientWordsArr.slice(1).join(' ')
              };
      
      } else if (unitIndex === -1) {
              //There is no unit or number in that ingredient description
      
              ingredientObject = {
                  count: 1, 
                  unit: '', 
                  ingredient
          }
      }; 
      return ingredientObject; 
  });

  return newIngredients
}