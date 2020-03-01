import React from 'react';

const Preparation = (props) => {
    let preparation = null;
    preparation = props.selectedRecipe.preparation.map((item, index) =>
        <p key={index}>{item}</p>
    )
    return <ul>{preparation}</ul>
}

export default Preparation;

