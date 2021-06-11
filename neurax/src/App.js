import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Auxiliar from './components/hoc/Auxiliar/Auxilar';
//import PruebaContainer from './components/container/PruebaContainer/PruebaContainer'
//import MainCont from "./components/container/MainCont/MainCont";
import MainCont2 from "./components/container/MainCont2/MainCont2";
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Auxiliar>
                <MainCont2/>
                {/*<MainCont/>*/}
                {/*<PruebaContainer/>*/}
            </Auxiliar>
        </BrowserRouter>
    );
  }
}

export default App;
