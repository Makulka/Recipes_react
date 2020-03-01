import React from 'react';

const Textarea = (props) => (
    <div>
        <label>{props.label}</label>
        <textarea 
            onChange={props.onChange}
            value={props.value}
            rows={props.rows} >
        </textarea>
    </div>
    
);

export default Textarea;