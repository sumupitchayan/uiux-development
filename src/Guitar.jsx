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
            fav: this.props.item.fav == "no" ? false : true,
        };
    }

    handleFavoriteChange() {
        this.props.handleFav(this.props.item, this.state.fav)
        this.setState({fav: !this.state.fav});
    }

  render() {
    let favorite = this.state.fav;
    return (
      <div className="item-cell">
        {/* <img id="favorite" src = { favorite ? "images/heart.jpg" : "images/heart_outline.jpeg"} alt = "" align="right" onClick = {this.handleFavoriteChange.bind(this)}></img> */}
        <img id="favorite" src = { favorite? "images/heart.jpg" : "images/heart_outline.jpeg"} alt = "" align="right" onClick = {this.handleFavoriteChange.bind(this)}></img>
        <p><img src={"images/guitars/" + this.props.item.id + ".png"} alt={this.props.item.name}></img></p>
        <h3>{this.props.item.brand} {this.props.item.name}</h3>
        <h3 id="price">${this.props.item.price}.00</h3>
      </div>
    );
  }
}

export default Guitar;
