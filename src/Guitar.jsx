import React, {Component} from 'react';
import './FilteredList.css';

class Guitar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: this.props.item.fav == "no" ? false : true, //changes fav to true or false depending on previous value from prop
        };
    }

    handleFavoriteChange() { // this method calls handle fav to toggle the fav in data (handle fav is passed in from FilteredList)
        this.props.handleFav(this.props.item, this.state.fav)
        this.setState({fav: !this.state.fav});
    }

  render() {
    let favorite = this.props.item.fav == "yes" ? true : false;
    return (
      <div className="item-cell">
        {/* renders the item */}
        <img id="favorite" src = { favorite? "images/heart.jpg" : "images/heart_outline.jpeg"} alt = "" align="right" onClick = {this.handleFavoriteChange.bind(this)}></img>
        <p><img src={"images/guitars/" + this.props.item.id + ".png"} alt={this.props.item.name}></img></p>
        <h3>{this.props.item.brand} {this.props.item.name}</h3>
        <h3 id="price">${this.props.item.price}.00</h3>
      </div>
    );
  }
}

export default Guitar;
