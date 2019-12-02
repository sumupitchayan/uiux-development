import React, {Component} from 'react';
// import { Container, Row, Col, Grid } from 'reactstrap';
// import Thumbnail from 'react-thumbnail';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap';
// import Grid from 'reactstrap';
import './FilteredList.css';

class List extends Component {
  
  setFav(){
    document.getElementById("favorite")[0].src = "heart.jpeg"
  }
  renderList() {
    const items = this.props.items.map(item => {
      return (
        <div className="item-cell">
          <img id="favorite" src = "images/heart_outline.jpeg" alt = "" align="right" onClick = {this.setFav}></img>
          <p><img src={"images/guitars/" + item.id + ".png"} alt={item.name}></img></p>
          <h3>{item.brand} {item.name}</h3>
          <h3 id="price">${item.price}.00</h3>
        </div>
      );
    });
    if (items.length === 0) {
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
