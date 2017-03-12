import React, {Component} from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Vote extends Component {    
  constructor(props){
      super(props);      
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

      this._getPair = this._getPair.bind(this);
      this._isDisabled = this._isDisabled.bind(this);
      this._hasVotedFor = this._hasVotedFor.bind(this);
  }

  _getPair() {
    return this.props.pair || [];
  }

  _isDisabled() {
    return !!this.props.hasVoted;
  }

  _hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }    

  render() {
    return <div className="voting">
      {this._getPair().map(entry =>
        <button key={entry}
                className={classNames({voted: this._hasVotedFor(entry)})}
                disabled={this._isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this._hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null}
        </button>
      )}
    </div>;      
  }
}