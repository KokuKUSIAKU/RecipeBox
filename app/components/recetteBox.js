var React = require('react');
var $ = require('jquery');

var nbrRecettesToDisplay=8;
import recettes from './recettes'

const MenuItem =(props)=>(
  <button className="menuItem">{this.props.name}</button>
);


class Ingredients extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      display:this.getInitialiseDisplay,
    };
    this.getInitialiseDisplay=this.getInitialiseDisplay.bind(this);
    this.clickClose = this.clickClose.bind(this);
  };

  getInitialiseDisplay(){
    return this.props.dipslay;
  };

  componentWillReceiveProps(){
    if(!this.state.display && this.props.display){
      this.setState({
        display:this.props.display,
      });
    };
  };

  clickClose(){
    this.setState({
      display:'',
    });
    $('.ingredients').css('height','0');
  };

  render(){
      const List = this.props.ingredients.map(ingredient=><li key={ingredient}>{ingredient}</li>);
      return (
        <div className='ingredients'>{
          this.state.display && this.props.show &&
          <div>
            <h2>{this.props.name}</h2>
            <button onClick={this.clickClose}>Close</button>
            <ul>{ List}</ul>
          </div>
        }</div>
      );
  };
};

var RecetteName =(props)=>(
  <p>{props.name}</p>
);


class Recette extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return (
      <div  className = "recette" id={this.props.name}>
        <img src={this.props.recette.image}/>
        <div className="recette-title">
          <RecetteName name={this.props.recette.name}/>
        </div>
      </div>
    );
  };
};



/*******************************************************/
class RecetteList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recetteShow:'',
      ingredientShow:[],
    };
    this.recetteClick = this.recetteClick.bind(this);
  }

  recetteClick(e){
    var recetteId = e.target.parentElement.id;
    console.log(recetteId);
    var recette = document.getElementById(recetteId);
    var recetteBox = recette.parentElement;

    // selecting the recette that must be displayed in the ingredients overlayer component
    var recetteName = recette.children[1].innerText;//element.getElementByTagName() doesn't work !!
    var ingredientList = recettes.filter(recette=>recette.name===recetteName)[0].ingredients;

    // setting the position of the ingredients overlayer in recetteList
    var recettePosition = recette.getClientRects()[0];
    var recetteBoxPosition  = recetteBox.getClientRects()[0];
    var top = 100*(Math.abs(recettePosition.top-recetteBoxPosition.top)+34)/document.documentElement.clientWidth;
    console.log('finished');
    // adding some style using jquer, height could be fixed in main css, only top value varies here in fact
    $(".ingredients").css({'height':recettePosition.height.toString()+'px',"top":top.toString()+'vw',});

    // resetting the state of recetteList component,
    // note that the if statement is not unreachable now as ingredients component when dispalyed ovelays the recette component--> ingredients need a closing tag
    this.setState({
        recetteShow:recetteName,
        ingredientShow:ingredientList,
    });
  }

  render(){
    const list = this.props.list.map((recette,index) =>
      <Recette name={'recette'+index.toString()} recette ={recette} key={recette.name} />);
    return (
      <div className = "recetteList" onClick={this.recetteClick} >
        <div>{list}</div>
        <Ingredients
          name={this.state.recetteShow}
          ingredients ={this.state.ingredientShow}
          show={this.state.recetteShow!=''} display={true}/>
       </div>
    );
  };
};

class RecipeBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      index:0,// control the start of the recipes to be displayed when clicked Next and Previous
      list:[],// list of the first recipes to display in the view, default set is 8 recipes in two rows; fixed actually can be dynamic later),
      recettes:[],// array of list of recipe to display depending on recipe type (see website menu), all fo recipes
    };
    this.indexChange = this.indexChange.bind(this);
    this.setList = this.setList.bind(this);
  };

  setList(){
    // to initialise the state list property for initial rendering
    // this is because state.list depends on recettes array content that depends in turn on
    // the selected recipe type (starter, main or desert)
    this.setState({
      list:this.state.recettes.slice(0,9)
    })
  }

  componentDidMount(){
    this.setState(
      {recettes:this.props.type?recettes.filter(recette=>recette.type===this.props.type):recettes},
      function defineList(){
        this.setList()
      }
    )
  };

  indexChange(e){
    var direction;
    switch(e.target.tagName){
      case 'DIV':
        direction = e.target.id;
        break;
     default:
        direction = direction = e.target.parentElement.id;
        break;
    };

    if(direction ==="direction-right" && this.state.index<recettes.length-nbrRecettesToDisplay){
      this.setState((prevState)=>({
        index:prevState.index+nbrRecettesToDisplay,
        list:this.state.recettes.slice(prevState.index+nbrRecettesToDisplay,prevState.index+2*nbrRecettesToDisplay,)
      }))
    }
    else if(direction ==="direction-left" && this.state.index>0){
      this.setState((prevState)=>({
        index:prevState.index-nbrRecettesToDisplay,
        list:this.state.recettes.slice(prevState.index-nbrRecettesToDisplay,prevState.index)
      }));
    }
  };

  render(){
    return (
      <div className ='recipeBox'>
        <RecetteList list={this.state.list} />
        <div className="recette-list-selection">
          <div id ="direction-left" onClick={this.indexChange}>
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            <p>Précédent</p>
          </div>
          <div id ="direction-right" onClick={this.indexChange}>
            <p>Suivant</p>
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  };
};
export {RecetteName};
export default RecipeBox
