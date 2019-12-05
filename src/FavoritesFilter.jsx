import React, {Component} from 'react';
import './FilteredList.css';
import Switch from 'react-input-switch';


class FavoritesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: this.props.fav,
            onFilterFavorite: this.props.onFilterFavorite
        };
    }

  changeFav = (event) => {
     this.setState({fav: event})
     this.state.onFilterFavorite(event)
  }

  render() {
    let favorite = this.state.fav == "yes"? true: false;
    return (
        <div className="favorites-filter">
        <img src = { favorite? "images/heart.png" : "images/heart_outline.png"} alt = "" align="left"></img>
        <h3>Favorites</h3>
        {/* switch toggle to control favorite */}
        <Switch id ="switch" on="yes" off="no" value={this.state.fav} onChange={this.changeFav}
          styles={{
            track: {
              backgroundColor: 'gray'
            },
            trackChecked: {
              backgroundColor: 'darkRed'
            },
            button: {
              backgroundColor: 'white'
            },
          }}/>
      </div>
    );
  }

}

export default FavoritesFilter;
