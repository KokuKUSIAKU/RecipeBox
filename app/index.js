var React = require('react');
var ReactDOM = require('react-dom');

// import css file
import css from './styles/global.css';
//import recettes from './components/recettes';



//import react components
import Page from './components/page';
import Cover from './components/cover';
import {RecetteName} from './components/recetteBox';
import RecetteNameList from './components/recetteList';
import ContactsLinks from './components/contacts';
import MainFooter from './components/mainfooter';
const App =() =>(
  <div>
    <Page/>
    <MainFooter/>

  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
