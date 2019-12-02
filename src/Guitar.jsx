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
            id: 0,
            name: "",
            type: "",
            brand: "",
            price: 0,
            fav: false,
        };
    }

    handleFavoriteChange() {
        this.setState({fav: !this.state.fav});
    }

  render() {
    return (
      this.renderList()
    );
  }
}

export default List;