import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

const guitars = [
  {id: 1, name: "Les Paul Traditional Pro V", type: "Electric", brand: "Gibson", price: 2799},
  {id: 2, name: "American Maple Statocaster", type: "Electric", brand: "Fender", price: 1550},
  {id: 3, name: "CD-60S Acoustic", type: "Acoustic", brand: "Fender", price: 199},
  {id: 4, name: "CC-60SCE All-Mahogany", type: "Acoustic", brand: "Fender", price: 299},
  {id: 5, name: "California Newport", type: "Acoustic", brand: "Fender", price: 399},
  {id: 6, name: "American Elite Telecaster", type: "Electric", brand: "Fender", price: 1699},
  {id: 7, name: "Les Paul Classic", type: "Electric", brand: "Gibson", price: 1999},
  {id: 8, name: "SG Standard", type: "Electric", brand: "Gibson", price: 1499},
  {id: 9, name: "Explorer", type: "Electric", brand: "Gibson", price: 1699},
  {id: 10, name: "ES-335 Figured Semi-Hollow", type: "Electric", brand: "Gibson", price: 3699},
  {id: 11, name: "214ce Grand Auditorium", type: "Acoustic", brand: "Taylor", price: 999},
  {id: 12, name: "210e Deluxe Dreadnought", type: "Acoustic", brand: "Taylor", price: 1299},
  {id: 13, name: "324ce V-Class Auditorium", type: "Acoustic", brand: "Taylor", price: 2199},
  {id: 14, name: "T5z Classic Mahogany", type: "Acoustic", brand: "Taylor", price: 1999},
  {id: 15, name: "Les Paul Studio", type: "Electric", brand: "Gibson", price: 1499},
  {id: 16, name: "Woodstock 50th Anniversary", type: "Acoustic", brand: "Martin", price: 500},
  {id: 17, name: "D-35 Standard", type: "Acoustic", brand: "Martin", price: 3299},
  {id: 18, name: "D-28 Standard", type: "Acoustic", brand: "Martin", price: 2899},
  {id: 19, name: "Professional Stratocaster", type: "Electric", brand: "Fender", price: 1550},
  {id: 20, name: "125th Anniversary Hummingbird", type: "Acoustic", brand: "Gibson", price: 5499}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <FilteredList items = {guitars} />
      </div>
    );
  }
}

export default App;
