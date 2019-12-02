import React, {Component} from 'react';
// import { Container, Row, Col, Grid } from 'reactstrap';
// import Thumbnail from 'react-thumbnail';
import { Thumbnail, Grid, Row, Col } from 'react-bootstrap';
// import Grid from 'reactstrap';
import './FilteredList.css';

class Guitar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.id,
            name: this.props.item.name,
            type: this.props.item.type,
            brand: this.props.item.type,
            price: this.props.item.price,
            fav: false,
        };
    }

    handleFavoriteChange() {
        this.setState({fav: !this.state.fav});
    }

  render() {
    let favorite = this.state.fav;
    return (
      <div className="item-cell">
        <img id="favorite" src = { favorite ? "images/heart.jpg" : "images/heart_outline.jpeg"} alt = "" align="right" onClick = {this.handleFavoriteChange.bind(this)}></img>
        <p><img src={"images/guitars/" + this.state.id + ".png"} alt={this.state.name}></img></p>
        <h3>{this.state.brand} {this.state.name}</h3>
        <h3 id="price">${this.state.price}.00</h3>
      </div>
    );
  }
}

export default Guitar;
