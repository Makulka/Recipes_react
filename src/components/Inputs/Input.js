import React from 'react';

const Input = (props) => (
    <div>
        <label>{props.label}</label>
        <input 
            onChange={props.onChange}
            value={props.value}/>
    </div>
    
);

export default Input;