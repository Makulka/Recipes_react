import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './CardRecipe.module.css';

class CardRecipe extends Component {
    render() {
        return(
            <div className={classes.Recipe} onClick={this.props.clicked}>
                <Link className={classes.Recipe_link} to="/recipes"></Link>
                <figure>
                    <img alt="recipe" src="https://www.placehold.it/300x200" />
                </figure>
                <article>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.summary}</p>
                </article>                   
            </div>  
        );
    }
}

export default CardRecipe;