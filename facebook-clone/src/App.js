import React from "react"
import './App.css';
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import FeedMobile from "./FeedMobile";
import Widgets from "./Widgets";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {Responsive} from "./Responsive";



function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    
    <div className="app">
      {!user ? (
        <Login />
        ) : (
        <>
        <>
          <Responsive displayIn={["Laptop"]+ ["Tablet"]}>
          <Header/>
          </Responsive>
          <Responsive displayIn={["Mobile"]}>
          <HeaderMobile/>
          </Responsive>
        </>

      <div className="app__body">
      <>
          <Responsive displayIn={["Laptop"]}>
            <Sidebar />
          </Responsive>
      </>
      <>
          <Responsive displayIn={["Laptop"]+ ["Tablet"]}>
            <Feed />
          </Responsive>
      </>
      <>
          <Responsive displayIn={["Mobile"]}>
            <FeedMobile />
          </Responsive>
      </>
          
      <>
          <Responsive displayIn={["Laptop"]}>
            <Widgets />
          </Responsive>
      </>
       
        
      </div>
      </>
) }
     
        
    </div>
  );
}

export default App;

// BEM naming convention = naming__convention
