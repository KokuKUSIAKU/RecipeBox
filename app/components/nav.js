// refactor Links component and isolate presentational component
var React = require('react');
var ReactDOM = require('react-dom');

import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './home';
import RecipeBox from './recetteBox';
import Cover from './cover';
var $ = require('jquery');
//import goTo from './goTo';

class Links extends React.Component{
  constructor(props){
    super(props);
    this.moveToRecipeBox = this.moveToRecipeBox.bind(this);
  }
  moveToRecipeBox(e){
  // make sure that the user click on a menu item (an anchor element) and not out
  if(e.target.tagName=='A'){
    $('html, body').animate({
      scrollTop: $("#main").offset().top
      }, 1000);
    }
 };
  render(){
    return(
      <nav onClick={this.moveToRecipeBox} >
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/recipes' >Recipes</NavLink>
        <NavLink to='/starter' >Starter</NavLink>
        <NavLink  to='/main' >Main</NavLink>
        <NavLink  replace to='/desert' >Desert</NavLink>
      </nav>
    )
  }
}

const Routes=()=>(
  <Router>
    <div>
      <Links/>
      <Cover/>
      <div id="main">
        <Route exact path="/" render={()=><Home/>}></Route>
        <Route path="/recipes" render={()=> <RecipeBox type=''/>}></Route>
        <Route path="/starter" render={()=> <RecipeBox type='starter'/>}></Route>
        <Route path="/main" render={()=> <RecipeBox type='main'/>}></Route>
        <Route path="/desert" render={()=> <RecipeBox type='desert'/>}></Route>
      </div>
    </div>
  </Router>
);

export default Routes;
