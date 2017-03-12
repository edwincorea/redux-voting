import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Map} from 'immutable';

export class ConnectionState extends Component {
  constructor(props){
      super(props);      
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

      this._isVisible = this._isVisible.bind(this);
      this._getMessage = this._getMessage.bind(this);      
  }
  
  _isVisible() {
    return !this.props.connected;
  }
  
  _getMessage() {
    return `Not connected (${this.props.state})`;
  }

  render() {
    return <div className="connectionState"
                style={{display: this._isVisible() ? 'block' : 'none'}}>
      {this._getMessage()}
    </div>
  }
}

export const ConnectionStateContainer = connect(state => state.get('connection', Map()).toJS())(ConnectionState);