var React = require('react');
//var ReactDOM = require('react-dom');

import ContactsLinks from './contacts';
import RecetteNameList from './recetteList';
import Footer from './footer';

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
