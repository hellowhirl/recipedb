import React, {Component} from 'react';

class ResultCounter extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="resultsContainer">
          <h1>RECIPES</h1>
          <div className="resultsCounter">8 Results</div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultCounter;
