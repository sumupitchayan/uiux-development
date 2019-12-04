import React, {Component} from 'react';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap';
import './FilteredList.css';
import Guitar from "./Guitar";

class List extends Component {

  constructor(props) {
    super(props);
  }

  renderList() {
    const items = this.props.items.map(itm => {
      return (
        <Guitar item = {itm} handleFav = {this.props.handleChange}/>
      );
    });
    if (items.length == 0) { //if no items displays
      return (<div style={{ marginTop: "100px"}}><h2>No Guitars available</h2></div>);
    } else {
      return items;
    }
  }

  render() {
    return (
      this.renderList()
    );
  }
}

export default List;
