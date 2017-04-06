var React =require('react');
import Routes from './nav';
import Name from './name';

class Page extends React.Component{
  render(){
    return(
      <div>
        <Name/>
        <Routes/>
      </div>
    )
  }
};

export default Page;
