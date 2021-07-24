import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ''
    }
    this.filterPosts = this.filterPosts.bind( this );
  }

  updateText( userInput ) {
    this.setState({ userInput });
  }

  filterPosts() {
    const {filterPostsFn} = this.props;
    const {userInput} = this.state;

    filterPostsFn( userInput );
  }

  render() {

    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            placeholder="Search Your Feed" 
            value={this.state.userInput} 
            onChange={ ( e ) => this.updateText( e.target.value ) } 
          />

          <SearchIcon id="Search__icon" onClick={ this.filterPosts }/>
        </div>
        
      </section>
    )
  }
}