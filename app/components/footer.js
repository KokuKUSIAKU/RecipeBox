var React = require('react');

const Footer =()=>(
  <div className ='footer'>
    <div>
      <p>Built as part of FreeCodeCamp Curriculum Projects</p>
    </div>
    <div className="tools">
    <div className="language">
      <h2> POWERED BY</h2>
      <div>
      <div className="skills_item"><i className="devicon-jquery-plain-wordmark"></i></div>
      <div className="skills_item"><i className="devicon-react-original-wordmark"></i></div>
      </div>
    </div>
    <div className="built_tools">
      <h2> BUILD TOOLS</h2>
      <img src='https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/git-logo-white.png?raw=true' alt ="GIT"/>
      <img src='https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/npm-logo.png?raw=true' alt ="GIT"/>
      <img src='https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/webpack.png?raw=true' alt ="GIT"/>  
    </div>
    </div>
    <hr className="style-line" />
    <div><i className="fa fa-copyright" aria-hidden="true"> Koku KUSIAKU</i></div>
  </div>
);

/*
<p>NPM, Webpack , Git </p>
const Footer =()=>(
  <div className="footer">
  <div>
    <p>{"Built as part of FreeCodeCamp Curriculum Porjects"}</p>
  </div>
  </div>
)*/
export default Footer
