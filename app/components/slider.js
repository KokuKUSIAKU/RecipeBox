var React = require('react');
var ReactDOM = require('react-dom');

import SearchForm from './searchForm';

var recettesImages = [
  "boeuf_saute.jpg",
  "poelee_de_veau_aux_carottes_et_oignons.jpg",
  "poelee_gambas.jpg",
  "salade_de_fruits_de_saison.jpg"
];
//var imagesPath = "app/img/recipes/";
var imagesPath ="https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/recipes/"

class RecetteSlider extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      url:imagesPath+'poelee-gambas.jpg'+'?raw=true',
      index:0,
      recettesNumber:recettesImages.length,
    };
    this.urlChange = this.urlChange.bind(this);
  }
  urlChange(){
    this.setState(function(prevState){
      if(prevState.index<this.state.recettesNumber-1){
        return {index:prevState.index+1, url:imagesPath+recettesImages[prevState.index+1]+'?raw=true'}
      } else {
        return {index:0, url:imagesPath+recettesImages[0]+'?raw=true'}
      }
    });

  }
  componentDidMount(){
    this.timer = setInterval(this.urlChange, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    return(
      <div className='recetteSlider'>
        <img src={this.state.url} alt='image unavailable'/>
        <div className="text-wrapper">
          <div className="text">
            <p>Wellcome on the largest elsewhere cooking amateurs community<br></br>
               Discover delights around the world and share yours</p>
          </div>
        </div>
        <SearchForm/>
      </div>
    )
  }

};
export default RecetteSlider;
