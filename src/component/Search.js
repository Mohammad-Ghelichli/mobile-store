import React, { Component } from "react";
import style from "./Search.module.css";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  searchHandler = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  render() {
    return (
      <div className={style.search}>
          <div>
        <p>what you want ?</p>
        <input
          placeholder="search"
          value={this.state.search}
          onChange={this.searchHandler}
        ></input>
        </div>
        
        <span> Are you looking for   {this.state.search} ?   </span>
        {(this.state.search==='کس ننه کاریز')&& <h1>آفرین</h1>}
      </div>
    );
  }
}

export default Search;
