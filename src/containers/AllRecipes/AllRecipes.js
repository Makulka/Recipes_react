import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import classes from './AllRecipes.module.css';
import CardRecipe from '../../components/AllRecipes/CardRecipe/CardRecipe';
import * as actionTypes from '../../store/actions/actionTypes';


class AllRecipes extends Component {
    getRecipeAndRedirect = (item) => {
        console.log(this.props.selectedRecipe);
        this.props.onSelect(item);
        this.props.history.push( '/recipes/' + item.id );
    }
    render() {
        const recipes = this.props.recipes.map(item => 
            <CardRecipe 
                key={item.id}    
                id={item.id}
                title={item.title}
                summary={item.summary}
                clicked={() => this.getRecipeAndRedirect(item)}/>
        )        
        return(
            <React.Fragment>
                <h1>All Recipes</h1>
                <div className={classes.Recipe_grid}>                
                    {recipes}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        selectedRecipe: state.selectedRecipe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (item) => dispatch({type: actionTypes.SELECT_RECIPE, item: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

