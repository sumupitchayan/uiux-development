import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import List from "./List";
import './FilteredList.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Switch from 'react-input-switch';
import { useState } from 'react';



class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Acoustic and Electric",
      brand: "All",
      sort: "",
      acoustic: false,
      electric: true,
      fav: "no"
    };
  }

  /*
  The following three methods change the state filter/sort options
  */
  onFilterType = (event) => {
    this.setState({type: event});
  }

  handleAcousticChange() {
    const opposite = this.state.acoustic;
    this.setState({acoustic: opposite});
  }

  changeFav = (item, fav) => {
    for(let i = 0; i < this.props.items.length; i++){
      if(this.props.items[i].id == item.id){
        if(fav){
          this.props.items[i].fav = "no";
        }
        else{
          this.props.items[i].fav = "yes";
        }
        break;
      }
    }
  }

  // handleElectricChange() {
  //   this.setState({electric: !this.electric});
  // }

  onFilterBrand = (event) => {
    this.setState({brand: event});
  }

  onSort = (event) => {
    this.setState({sort: event});
  }

  sortPrice = (item1, item2) => {
    if (this.state.sort === "") {
      return 0;
    } else if (this.state.sort === "Price Low to High"){
      return item1.price - item2.price;
    } else if (this.state.sort === "Price High to Low"){
      return item2.price - item1.price;
    }
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilters = item => {
    // Checks if the type matches the filter Brand and Type (Acoustic/Electric)
    // if ((item.type == "Acoustic" && this.state.acoustic) || (item.type == "Electric" && this.state.electric)) {
    //   if (item.brand == this.state.brand || this.state.brand == "All") {
    //     return true;
    //   }
    // }
    if ((item.type == this.state.type) || (this.state.type == "Acoustic and Electric")) {
      if ((item.brand == this.state.brand || this.state.brand == "All")) {
        if (this.state.fav == "no" || item.fav == this.state.fav) {
          return true;
        }
      }
    }
    // if ((item.type == this.state.type) || (this.state.type == "Acoustic and Electric")) {
    //   if ((item.brand == this.state.brand || this.state.brand == "All") && (this.state.fav == "no" || item.fav == this.state.fav)) {
    //     return true;
    //   }
    // }
    return false;
  }

  toggleFavorite = fav => {
    this.setState({fav})
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilters(item);
  }

  render() {
    return (
      <div className="main-content">
        <div className="filter-list">
          <h3>Sort: {this.state.sort}</h3>
          <DropdownButton id = "dropdown" title="On price" id="dropdown-basic-button">
            <Dropdown.Item eventKey="Price Low to High" onSelect={this.onSort}>Price Low to High</Dropdown.Item>
            <Dropdown.Item eventKey="Price High to Low" onSelect={this.onSort}>Price High to Low</Dropdown.Item>
            <Dropdown.Item eventKey="" onSelect={this.onSort}>None</Dropdown.Item>
          </DropdownButton>

          <h3>Type: {this.state.type}</h3>
          <DropdownButton id = "dropdown" title="Acoustic or Electric" id="dropdown-basic-button">
            <Dropdown.Item eventKey="Acoustic" onSelect={this.onFilterType}>Acoustic</Dropdown.Item>
            <Dropdown.Item eventKey="Electric" onSelect={this.onFilterType}>Electric</Dropdown.Item>
            <Dropdown.Item eventKey="Acoustic and Electric" onSelect={this.onFilterType}>Both</Dropdown.Item>
          </DropdownButton>

          {/* <RadioGroup title="Type" onChange={ this.onFilterType } horizontal>
            <RadioButton value="apple" eventKey="Acoustic">
              Apple
            </RadioButton>
          </RadioGroup> */}

          {/* <ul className="radio-group">
            <li>
              <label>
                <input type="radio" value="acoustic" checked={this.state.acoustic} onChange={this.handleAcousticChange}/>
                Acoustic
              </label>
            </li>
          </ul> */}



          <h3>Brand: {this.state.brand}</h3>
          <DropdownButton id = "dropdown" title="Brand" id="dropdown-basic-button">
            <Dropdown.Item eventKey="All" onSelect={this.onFilterBrand}>All</Dropdown.Item>
            <Dropdown.Item eventKey="Fender" onSelect={this.onFilterBrand}>Fender</Dropdown.Item>
            <Dropdown.Item eventKey="Gibson" onSelect={this.onFilterBrand}>Gibson</Dropdown.Item>
            <Dropdown.Item eventKey="Martin" onSelect={this.onFilterBrand}>Martin</Dropdown.Item>
            <Dropdown.Item eventKey="Taylor" onSelect={this.onFilterBrand}>Taylor</Dropdown.Item>
          </DropdownButton>

          {/* <input type="text" placeholder="Search" onChange={this.onSearch} /> */}
          <h3>Favorites: {this.state.fav}</h3>
          <Switch id = "switch"
                  on="yes"
                  off="no"
                  value={this.state.fav}
                  onChange={this.toggleFavorite}
                />
        </div>

        <div class="items-view">
          <List items={this.props.items.filter(this.filterAndSearch).sort(this.sortPrice)} handleChange = {this.changeFav.bind(this)}  />
        </div>

      </div>
    );
  }
}

export default FilteredList;
