import React from 'react';
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <div>THE BUBBLING CAULDRON</div>
            <ul>
                <NavigationItem path="/" exact>Home</NavigationItem>  
                <NavigationItem path="/recipes" exact>All Recipes</NavigationItem>
                <NavigationItem path="/recipes/new">New Recipe</NavigationItem>                
            </ul>
        </nav>
    )
}

export default Navigation;