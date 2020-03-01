import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import FullRecipe from './containers/FullRecipe/FullRecipe';
import {Switch, Route} from 'react-router-dom';
import NewRecipe from './containers/NewRecipe/NewRecipe';
import AllRecipes from './containers/AllRecipes/AllRecipes';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    let id = null;
      if (this.props.selectedRecipe) {
        id = this.props.selectedRecipe.id;
      }
    return (
      <React.Fragment>      
          <Layout>
            <Switch>
              <Route path="/recipes/new" component={NewRecipe} />
              <Route path={'/recipes/' + id} component={FullRecipe} />
              <Route path="/recipes" exact component={AllRecipes} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Layout>
      </React.Fragment>    
    );
  }  
}

const mapStateToProps = (state) => {
  return {
    selectedRecipe: state.selectedRecipe
  }
}
export default connect(mapStateToProps)(App);

 


