import React, { Component } from "react";
import Home from "./components/Home";

class App extends Component {

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            
            <Home/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;