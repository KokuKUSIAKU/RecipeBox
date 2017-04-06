var React = require('react');
//var ReactDOM = require('react-dom');

import ContactsLinks from './contacts';
import RecetteNameList from './recetteList';
import Footer from './footer';

/*class MainFooter extends React.Component{
  render(){
    return(
      <div className="mainfooter">
        <ContactsLinks />
        <RecetteNameList />
      </div>
    )
  }
}*/

const MainFooter =()=>(
  <div className="footer-container">
    <div className="mainfooter">
      <ContactsLinks />
      <RecetteNameList />
    </div>

    <Footer/>
  </div>
);
export default MainFooter
