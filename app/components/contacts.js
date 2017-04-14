var React = require('react');

import Name from './name';

const ContactsLinks =()=>(
  <div className="contactsLinks">
    <div>
      <Name />
    </div>
    <div id="links">
      <i className="fa fa-facebook-official" ></i>
      <i className="fa fa-twitter-square" aria-hidden="true"></i>
      <i className="fa fa-instagram" aria-hidden="true"></i>
      <i className="fa fa-youtube" aria-hidden="true"></i>
    </div>
  </div>
);

export default ContactsLinks
