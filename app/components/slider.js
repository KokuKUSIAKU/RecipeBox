var React = require('react');
var ReactDOM = require('react-dom');

import SearchForm from './searchForm';

var recettesImages = [
  "boeuf-saute.jpg",
  "poelee-de-veau-aux-carottes-et-oignons.jpg",
  "poelee-gambas.jpg",
  "salade-de-fruits-de-saison.jpg"
];
var imagesPath = './app/img/recipes/';

class RecetteSlider extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      url:imagesPath+'poelee-gambas.jpg',
      index:0,
      recettesNumber:recettesImages.length,
    };
    this.urlChange = this.urlChange.bind(this);
  }
  urlChange(){
    this.setState(function(prevState){
      if(prevState.index<this.state.recettesNumber-1){
        return {index:prevState.index+1, url:imagesPath+recettesImages[prevState.index+1]}
      } else {
        return {index:0, url:imagesPath+recettesImages[0]}
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
