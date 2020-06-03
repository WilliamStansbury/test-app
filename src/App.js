
import React, { Component } from 'react';
import './App.css'
import Body from './Components/Body'
import TabList from './Components/TabList'
import SimpleReactLightbox from "simple-react-lightbox";
const firebase = require('firebase');

export class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render() {
    const tabs = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Images'
    },
    {
      id: 3,
      title: 'Videos'
    },
    {
      id: 4,
      title: 'Links'
    },
    {
      id: 5,
      title: 'Messages'
    },
    {
      id: 6,
      title: 'Movies'
    },
    {
      id: 7,
      title: 'Add Movie'
    }
    ]
    return (
      <div className="body">
        <SimpleReactLightbox>
          <div className = "nav-bar">
            <TabList tabs={tabs} 
            changeTab = {this.changeTab}
            activeTab={this.state.activeTab}/>
          </div>
          <div className = "main-body">
            <Body activeTab={this.state.activeTab}/>
          </div>
        </SimpleReactLightbox>
      </div>
    );
  }
}
export default App;



