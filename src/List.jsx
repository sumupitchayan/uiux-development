import React, {Component} from 'react';
// import { Container, Row, Col, Grid } from 'reactstrap';
// import Thumbnail from 'react-thumbnail';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap';
// import Grid from 'reactstrap';
import './FilteredList.css';
import Guitar from "./Guitar";

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fav: false
    };
  }
  
  setFav(){
    this.setState({fav: !this.state.fav});
  }
  renderList() {
    const items = this.props.items.map(itm => {
      return (
        <Guitar item = {itm} handleFav = {this.props.handleChange}/>
      );
    });
    if (items.length == 0) {
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
