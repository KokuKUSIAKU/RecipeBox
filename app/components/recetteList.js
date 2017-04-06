var React = require('react');

// import of global variables
import recettes from './recettes';

// import of react component
import {RecetteName} from './recetteBox';

class RecetteNameList extends React.Component{
  render(){
    const list = recettes.map(recette=><li>{recette.name}</li>);
    return(
      <div className ="recetteNameList">
        <h2> Recipes List </h2>
        <ul>{list}</ul>
      </div>
    )
  }
}

export default RecetteNameList


// creacte a list of routes to recettes new page with instruction,
// additional images, comment section, vote and approval api
