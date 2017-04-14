// don't need a class
var React =require('react');
import Routes from './nav';
import Name from './name';
import Header from './header';
class Page extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Routes/>
      </div>
    )
  }
};

export default Page;
