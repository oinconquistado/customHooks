import React from "react";
import "./Reset.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className='App'>
      <header>
        <FontAwesomeIcon fixedWidth icon={faHammer} size='2x' style={{ margin: 5 }} color='#313131' />
        <h1 className='headerTitle'>customHooks</h1>
        <p>I created a test playground for each hook. ;)</p>
      </header>
      <div className='container'>
        <div className='hooksCard blueGreen '>
          <div className='overlay'>
            <p className='hooksDescriptions'>Make requests using axios</p>
          </div>
          <h2 className='hookTitle'>useAxios</h2>
        </div>
        <div className='hooksCard marineBlue'>
          <div className='overlay'>
            <p className='hooksDescriptions'>Make requests using axios</p>
          </div>
          <h2 className='hookTitle'>UseStorage</h2>
        </div>
        <div className='hooksCard pinkRed'>
          <div className='overlay'>
            <p className='hooksDescriptions'>Make requests using axios</p>
          </div>
          <h2 className='hookTitle'>useDelay</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
