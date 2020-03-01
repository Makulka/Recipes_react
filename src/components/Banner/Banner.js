import React from 'react';
import classes from './Banner.module.css';
import Cauldron from '../../assets/images/cauldron.png';
import Bubble20 from '../../assets/images/bubble-20.png';

const Banner = () => (
    <figure className={classes.Banner}>
        <img alt="cauldron" src={Cauldron} />
        <img className={classes.Bubble20_1} alt="cauldron" src={Bubble20} />
        <img className={classes.Bubble20_2} alt="cauldron" src={Bubble20} />
        <img className={classes.Bubble20_3} alt="cauldron" src={Bubble20} />
        <img className={classes.Bubble20_4} alt="cauldron" src={Bubble20} />
    </figure>
)

export default Banner;