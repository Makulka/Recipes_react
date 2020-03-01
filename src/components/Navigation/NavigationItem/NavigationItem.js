import React from 'react';
import classes from './NavigationItem.module.scss';
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink             
            to={props.path}
            activeClassName={classes.Active}
            exact = {props.exact}
        >{props.children}</NavLink>
    </li>
)

export default NavigationItem;

//http://negomi.github.io/react-burger-menu/
//https://www.youtube.com/watch?v=FATDmvwdNYM