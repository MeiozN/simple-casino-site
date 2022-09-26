import React from "react";
import axios from 'axios';
import Header from "./commponents/Header/index.js";
import Banner from "./commponents/Banner/index.js";
import FeaturedProducts from "./commponents/Games/index.js";
import Gamesort from "./commponents/Gamesort/index.js";

 
function App() {
const renderItems=()=>{
 return(
 <FeaturedProducts  />);
}
  return (
    <div className="App">
     <Header></Header>
     <div className="appl">
      <Banner></Banner>
      <div className="content">
      <Gamesort/>
      <div className="games">
     {
      renderItems()
     }
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;



