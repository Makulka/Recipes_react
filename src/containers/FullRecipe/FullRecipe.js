import React, { Component } from 'react';
import classes from './FullRecipe.module.scss';
import {connect} from 'react-redux';
import Ingredients from '../../components/FullRecipe/Ingredients';
import Preparation from '../../components/FullRecipe/Preparation';

class FullRecipe extends Component {   
    render() {
        let selectedRecipe = this.props.selectedRecipe;        
        return(
            <article className={classes.FullRecipe}>
                <h1>{selectedRecipe.title}</h1>
                <div>
                    <h2>Ingredients</h2>
                    <Ingredients selectedRecipe={selectedRecipe}/>
                </div>
                <div>
                    <h2>Preparation</h2>
                    <Preparation selectedRecipe={selectedRecipe}/>
                </div>               
            </article>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        selectedRecipe: state.selectedRecipe
    }    
}
export default connect(mapStateToProps)(FullRecipe);