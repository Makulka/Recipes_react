import React, {Component} from 'react';
import classes from './NewRecipe.module.scss';
import Input from '../../components/Inputs/Input';
import InputForIngredient from '../../components/Inputs/InputForIngredient';
import {connect} from 'react-redux';
import * as actionTypes from './../../store/actions/actionTypes';
import Textarea from '../../components/Inputs/Textarea';

class NewRecipe extends Component {
    state = {
        recipe: {
            title: '',
            summary: '',
            ingredients: [ {
                'id': '1',
                'text': 'ff'
            }],
            preparation: []
        },
        ingredient: {
            'id': '1',
            'text': 'ff'
        },
        ingredientCounter: 0
    }
    onTitleChangeHandler = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                title: e.target.value
            }
        })
    }
    onSummaryChangeHandler = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                summary: e.target.value
            }
        })
    }
    onIngredientsChangeHandler = (e) => {
        const ingredient = {'id': this.state.ingredientCounter, 'text': e.target.value}
        this.setState({
            ingredient
        })
    }
    onIngredientRemoveHandler = (id) => {
        const recipe = {...this.state.recipe};
        const ingredients = [...recipe.ingredients];
        const ingredientsMod = ingredients.filter(item => item.id !== id);
        this.setState({
            recipe: {...this.state.recipe,
                ingredients: ingredientsMod
            }
        });
        console.log(id);
    };
    onIngredientAddHandler = (e) => {
        e.preventDefault();
        if (this.state.ingredient.text !== '') {
            const ingredients = [...this.state.recipe.ingredients];
            ingredients.push(this.state.ingredient);
            this.setState({
                recipe: {...this.state.recipe,
                    ingredients
                },
                ingredient: {
                    'id': '',
                    'text': ''
                },
                ingredientCounter: this.state.ingredientCounter+1
            })
        } else {
            console.log("no ingredient")
        }
    }
    onPreparationChangeHandler = (e) => {
        const preparationString = e.target.value;
        const preparationArray = preparationString.split(";");
        this.setState({
            recipe: {...this.state.recipe,
                preparation: preparationArray
            }
        })
    }
    submitAndRedirect = (e, recipe) => {
        e.preventDefault();        
        this.props.onAddRecipe(recipe);
        this.props.history.push('/recipes')
    }
    render() {        
        return(
            <article className={classes.NewRecipe}>
                <h1>New Recipe</h1>
                <form>
                    <Input 
                        label="Title" 
                        value={this.state.title}
                        onChange={this.onTitleChangeHandler}/>
                    <Textarea 
                        label="Summary" 
                        value={this.state.recipe.summary}
                        onChange={this.onSummaryChangeHandler}
                        rows="4"/>  
                    <InputForIngredient 
                        label="Ingredients"
                        value={this.state.ingredient.text}
                        onChange={this.onIngredientsChangeHandler}
                        ingredients={this.state.recipe.ingredients}
                        sendId={this.onIngredientRemoveHandler}/> 
                    <button 
                        onClick={this.onIngredientAddHandler}>
                        Add ingredient
                    </button>
                    <Textarea 
                        label="Preparation"
                        value={this.state.preparation}
                        onChange={this.onPreparationChangeHandler}
                        rows="10"/> 
                    <p>Devide preparation steps by a semi-colon (;) to be displayed in separate paragraphs</p>                
                    <button onClick={(e) => this.submitAndRedirect(e, this.state.recipe)}>Submit</button>
                </form>
            </article>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRecipe: (recipe) => dispatch({type: actionTypes.ADD_RECIPE, recipe: recipe })
    }
}
export default connect(null, mapDispatchToProps)(NewRecipe);