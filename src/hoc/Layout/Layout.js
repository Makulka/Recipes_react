import React, {Component} from 'react';
import Navigation from '../../components/Navigation/Navigation'; 
import Banner from '../../components/Banner/Banner';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return(
            <React.Fragment>
                <header>
                    <Navigation />
                </header>
                <main className={classes.main}>
                    <Banner />
                    {this.props.children}
                </main> 
            </React.Fragment>
        );
    }
}

export default Layout;