import "./App.css";

import React, { Component } from 'react'
import Navbar from "./myAppCompound/Navbar";
import New from "./myAppCompound/New";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Slider from "./myAppCompound/Slider";
import LoadingBar from 'react-top-loading-bar'
import Footer from "./myAppCompound/Footer";
import Spinner from "./myAppCompound/Spinner";

export default class App extends Component {
  pageSixe = 6;
  state = {
    progress: 0 
  }
  apiKey = process.env.REACT_APP_NEWS;
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
        {this.state.loading && <Spinner/>}
            <Navbar/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            />
            <Slider/>
            <Routes> 
              <Route  exact path="/" element={<New setProgress={this.setProgress} apiKey={this.apiKey}   pageSize={this.pageSixe  } country="in" catageoy="general"/>}/>        
              <Route  exact path="/business" element={<New setProgress={this.setProgress} apiKey={this.apiKey}   key={"business"} pageSize={this.pageSixe} country="in" catageoy="business"/>}/>        
              <Route  exact path="/entertainment" element={<New setProgress={this.setProgress} apiKey={this.apiKey}   key={"entertainment"}   pageSize={this.pageSixe} country="in" catageoy="entertainment"/>}/>        
              <Route exact path="/health"  element={<New setProgress={this.setProgress} apiKey={this.apiKey}   key={"health"} pageSize={this.pageSixe} country="in" catageoy="health"/>}/>        
              <Route exact path="/science" element={<New setProgress={this.setProgress} apiKey={this.apiKey}    key={"science"} pageSize={this.pageSixe} country="in" catageoy="science"/>}/>        
              <Route exact path="/sports"   element={<New setProgress={this.setProgress} apiKey={this.apiKey}   key={"sports"} pageSize={this.pageSixe} country="in" catageoy="sports"/>}/>        
              <Route exact path="/technology"  element={<New setProgress={this.setProgress} apiKey={this.apiKey}   key={"technology"} pageSize={this.pageSixe} country="in" catageoy="technology"/>}/>        
            </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }
}
