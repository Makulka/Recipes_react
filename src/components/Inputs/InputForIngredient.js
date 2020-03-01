import React from 'react';
import classes from './InputForIngredient.module.scss';

const InputForIngredient = (props) => {
    const ingredients = props.ingredients.map( (item) => 
        <div key={item.id} className={classes.Ingredient}>
            <p className={classes.RemoveIngredient} onClick={() => props.sendId(item.id)}>-</p> 
            <li>{item.text}</li>          
        </div> 
    )
    return(
        <div>
            <label>{props.label}</label>
                <ul>{ingredients}</ul>
            <input 
                onChange={props.onChange}
                value={props.value} />
        </div>
    ); 
};

export default InputForIngredient;