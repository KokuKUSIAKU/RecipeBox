var React = require('react');

function Home(){
  const communityElement = (
    <div className="community-wrapper">
      <div className="community-message">
        <p> Wheter your are a Top Chef or a cooking amateur, share your culinary knowledge
             and discover deligths around the world.
            <br></br> Joins us today!
        </p>
        <div className="community-button">
          <button type="submit" >Join the community</button>
        </div>
      </div>
    </div>
  );
  return(
     <div className="community">{communityElement}</div>
  );
};

export default Home;
