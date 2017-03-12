import React, {Component} from 'react';
import {ConnectionStateContainer} from './ConnectionState';

export default class App extends Component {    
  render() {
    return (<div>
      <ConnectionStateContainer />
      {this.props.children}
    </div>);  
  }
}