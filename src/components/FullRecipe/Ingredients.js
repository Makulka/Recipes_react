import React from 'react';

const Ingredients = (props) => {
    let ingredients = null;
    ingredients = props.selectedRecipe.ingredients.map((item, index) => 
        <li key={item.id}>{item.text}</li>
    )
    return <ul>{ingredients}</ul>
}   
 
export default Ingredients;