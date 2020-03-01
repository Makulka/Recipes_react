import React, {Component} from 'react';
import classes from './Home.module.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className={classes.Home}>
                <article>
                    <h1>Wellcome to Bubbling Cauldron.</h1>
                    <h3>Your online cookbook</h3>
                </article>
                <section>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link to="/recipes">All Recipes</Link>
                    <Link to="/recipes/new">Create New Recipe</Link> 
                </section>
            </ div>
            
            
        );
    }
}

export default Home;