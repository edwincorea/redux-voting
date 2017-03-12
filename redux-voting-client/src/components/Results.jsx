import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const VOTE_WIDTH_PERCENT = 8;

export class Results extends Component {    
  constructor(props){
      super(props);      
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

      this._getPair = this._getPair.bind(this);
      this._getVotes = this._getVotes.bind(this);
      this._getVotesBlockWidth = this._getVotesBlockWidth.bind(this);
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

  _getVotesBlockWidth(entry) {
    return (this._getVotes(entry) * VOTE_WIDTH_PERCENT) + '%';
  }

  render() {
    return this.props.winner 
      ? <Winner ref="winner" winner={this.props.winner} /> 
      : <div className="results">
          <div className="tally">
            {this._getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
                <div className="voteVisualization">
                  <div className="votesBlock"
                      style={{width: this._getVotesBlockWidth(entry)}}>
                  </div>
              </div>                
                <div className="voteCount">
                  {this._getVotes(entry)}
                </div>          
              </div>
            )}
          </div>
          <div className="management">
            <button ref="restart"
                    onClick={this.props.restart}>
                    Restart
            </button>            
            <button ref="next"
                    className="next"
                    onClick={this.props.next}>
              Next
            </button>
          </div>      
        </div>;
  }

}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);