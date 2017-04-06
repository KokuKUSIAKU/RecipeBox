var React = require('react');
var ReactDOM = require('react-dom');

/*import css from './Links.css';*/
/*import './Links.css';*/

import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './home';
import RecipeBox from './recetteBox';
import Cover from './cover';
import goTo from './goTo';

const Links =()=>(
  <nav>
    <NavLink to='/' onClick={goTo}>Home</NavLink>
    <NavLink to='/recipes' onClick={goTo}>Recipes</NavLink>
    <NavLink to='/starter' onClick={goTo}>Starter</NavLink>
    <NavLink  to='/main' onClick={goTo}>Main</NavLink>
    <NavLink  replace to='/desert' onClick={goTo}>Desert</NavLink>
  </nav>
);

const Routes=()=>(
  <Router>
    <div>
      <Links/>
      <Cover/>
      <Route exact path="/" render={()=><Home/>}></Route>
      <Route path="/recipes" render={()=> <RecipeBox type=''/>}></Route>
      <Route path="/starter" render={()=> <RecipeBox type='starter'/>}></Route>
      <Route path="/main" render={()=> <RecipeBox type='main'/>}></Route>
      <Route path="/desert" render={()=> <RecipeBox type='desert'/>}></Route>
    </div>
  </Router>
);

export default Routes;
