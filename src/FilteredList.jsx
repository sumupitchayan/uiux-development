import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import List from "./List";
import FavoritesFilter from "./FavoritesFilter";
import './FilteredList.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Switch from 'react-input-switch';
import { useState } from 'react';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { //initial states
      type: "Acoustic and Electric",
      brand: "All",
      sort: "None",
      fav: "no"
    };
  }

  /*
  The following four methods change the state filter/sort options
  */
  onFilterType = (event) => {
    this.setState({type: event});
  }

  onFilterBrand = (event) => {
    this.setState({brand: event});
  }

  onSort = (event) => {
    this.setState({sort: event});
  }

  onFilterFavorite = (event) => {
    this.setState({fav: event});
  }

  /*
  Sorts items by their prices depending state sort variable
  */
  sortPrice = (item1, item2) => {
    if (this.state.sort === "") {
      return 0;
    } else if (this.state.sort === "Price Low to High"){
      return item1.price - item2.price;
    } else if (this.state.sort === "Price High to Low"){
      return item2.price - item1.price;
    }
  }

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on.
   * Input: An element from List component
   * Output: true or false
   */
  matchesFilters = item => {
    // Checks if the type matches the filter Brand, Type (Acoustic/Electric) and Favorite toggle state
    if ((item.type == this.state.type) || (this.state.type == "Acoustic and Electric")) {
      if ((item.brand == this.state.brand || this.state.brand == "All")) {
        if (this.state.fav == "no" || item.fav == this.state.fav) {
          return true;
        }
      }
    }
    return false;
  }

  /*
  * This function changes the data if it has been favorited by the user setting the fav field to yes
  */

  changeFav = (item, fav) => {
    for(let i = 0; i < this.props.items.length; i++){
      if(this.props.items[i].id == item.id){
        if(fav){
          this.props.items[i].fav = "no";
        }
        else {
          this.props.items[i].fav = "yes";
        }
        break;
      }
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterItems = item => {
    return this.matchesFilters(item);
  }

  render() {
    let favorite = this.state.fav == "yes" ? true : false;
    return (
      <div className="main-content">
        {/* renders the dropdowns for the list */}
        <div className="filter-list">

          <div className="filter">
            <h3 className="filter-title">Sort</h3>
            <DropdownButton id = "dropdown" title={this.state.sort}>
              <Dropdown.Item id ="dropdown-option" eventKey="Price Low to High" onSelect={this.onSort}>Price Low to High</Dropdown.Item>
              <Dropdown.Item id ="dropdown-option" eventKey="Price High to Low" onSelect={this.onSort}>Price High to Low</Dropdown.Item>
              <Dropdown.Item id ="dropdown-option" eventKey="None" onSelect={this.onSort}>None</Dropdown.Item>
            </DropdownButton>
          </div>

          <h3>Type</h3>
          <DropdownButton id = "dropdown" title={this.state.type}>
            <Dropdown.Item id = "dropdown-option" eventKey="Acoustic" onSelect={this.onFilterType}>Acoustic</Dropdown.Item>
            <Dropdown.Item id = "dropdown-option" eventKey="Electric" onSelect={this.onFilterType}>Electric</Dropdown.Item>
            <Dropdown.Item id ="dropdown-option" eventKey="Acoustic and Electric" onSelect={this.onFilterType}>Both</Dropdown.Item>
          </DropdownButton>

          <h3>Brand</h3>
          <DropdownButton id = "dropdown" title={this.state.brand}>
            <Dropdown.Item id = "dropdown-option" eventKey="All" onSelect={this.onFilterBrand}>All</Dropdown.Item>
            <Dropdown.Item id = "dropdown-option" eventKey="Fender" onSelect={this.onFilterBrand}>Fender</Dropdown.Item>
            <Dropdown.Item id = "dropdown-option" eventKey="Gibson" onSelect={this.onFilterBrand}>Gibson</Dropdown.Item>
            <Dropdown.Item id = "dropdown-option" eventKey="Martin" onSelect={this.onFilterBrand}>Martin</Dropdown.Item>
            <Dropdown.Item id = "dropdown-option" eventKey="Taylor" onSelect={this.onFilterBrand}>Taylor</Dropdown.Item>
          </DropdownButton>
          {/* renders the favorites filter */}
          <FavoritesFilter fav = {this.state.fav} onFilterFavorite = {this.onFilterFavorite.bind(this)}/>

        </div>
        {/* renders item view and passes chnageFav as prop to control changing of data when user clicks to favorite */}
        <div class="items-view">
          <List items={this.props.items.filter(this.filterItems).sort(this.sortPrice)} handleChange = {this.changeFav}  />
        </div>

      </div>
    );
  }
}

export default FilteredList;
