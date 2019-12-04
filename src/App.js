import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";

// List of guitars items
var guitars = [
  {id: 1, name: "Les Paul Traditional Pro V", type: "Electric", brand: "Gibson", price: 2799, fav: "no"},
  {id: 2, name: "American Maple Statocaster", type: "Electric", brand: "Fender", price: 1550, fav: "no"},
  {id: 3, name: "CD-60S Acoustic", type: "Acoustic", brand: "Fender", price: 199, fav: "no"},
  {id: 4, name: "CC-60SCE All-Mahogany", type: "Acoustic", brand: "Fender", price: 299, fav: "no"},
  {id: 5, name: "California Newport", type: "Acoustic", brand: "Fender", price: 399, fav: "no"},
  {id: 6, name: "American Elite Telecaster", type: "Electric", brand: "Fender", price: 1699, fav: "no"},
  {id: 7, name: "Les Paul Classic", type: "Electric", brand: "Gibson", price: 1999, fav: "no"},
  {id: 8, name: "SG Standard", type: "Electric", brand: "Gibson", price: 1499, fav: "no"},
  {id: 9, name: "Explorer", type: "Electric", brand: "Gibson", price: 1699, fav: "no"},
  {id: 10, name: "ES-335 Figured Semi-Hollow", type: "Electric", brand: "Gibson", price: 3699, fav: "no"},
  {id: 11, name: "214ce Grand Auditorium", type: "Acoustic", brand: "Taylor", price: 999, fav: "no"},
  {id: 12, name: "210e Deluxe Dreadnought", type: "Acoustic", brand: "Taylor", price: 1299, fav: "no"},
  {id: 13, name: "324ce V-Class Auditorium", type: "Acoustic", brand: "Taylor", price: 2199, fav: "no"},
  {id: 14, name: "T5z Classic Mahogany", type: "Acoustic", brand: "Taylor", price: 1999, fav: "no"},
  {id: 15, name: "Les Paul Studio", type: "Electric", brand: "Gibson", price: 1499, fav: "no"},
  {id: 16, name: "Woodstock 50th Anniversary", type: "Acoustic", brand: "Martin", price: 500, fav: "no"},
  {id: 17, name: "D-35 Standard", type: "Acoustic", brand: "Martin", price: 3299, fav: "no"},
  {id: 18, name: "D-28 Standard", type: "Acoustic", brand: "Martin", price: 2899, fav: "no"},
  {id: 19, name: "Professional Stratocaster", type: "Electric", brand: "Fender", price: 1550, fav: "no"},
  {id: 20, name: "125th Anniversary Hummingbird", type: "Acoustic", brand: "Gibson", price: 5499, fav: "no"}
]
// starting point of the application
class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="jumbotron">
          {/*creates the heading for the page*/}
          <h1>Welcome to Guitar Center</h1>
          <h2>Here's our list of guitars for the holiday season</h2>
        </div>

        <FilteredList items = {guitars} />
        {/*creates the filtered list*/}

      </div>
    );
  }
}

export default App;
