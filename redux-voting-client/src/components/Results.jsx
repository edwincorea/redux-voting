import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Winner from './Winner';

export default class Results extends Component {    
  constructor(props){
      super(props);      
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

      this._getPair = this._getPair.bind(this);
      this._getVotes = this._getVotes.bind(this);
      console.log(this.props);
  }

  _getPair() {
    return this.props.pair || [];
  }

  _getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }    
    return 0;
  }  

  render() {
    return this.props.winner 
      ? <Winner ref="winner" winner={this.props.winner} /> 
      : <div className="results">
          <div className="tally">
            {this._getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
                <div className="voteCount">
                  {this._getVotes(entry)}
                </div>          
              </div>
            )}
          </div>
          <div className="management">
            <button ref="next"
                    className="next"
                    onClick={this.props.next}>
              Next
            </button>
          </div>      
        </div>;
  }

}