var React = require('react');
var ReactDOM = require('react-dom');

  /* there is an align issure without value in the second input*/
const SearchForm = () =>(
  <div className="searchForm-wrapper">
    <div className="searchForm">
      <form>
        <input id="searchForm-text" type="text" name="search"></input>
        <input id="searchForm-submit" type="submit" name="submit" value="Find Recipes"></input>
      </form>
    </div>
  </div>
);

export default SearchForm;
