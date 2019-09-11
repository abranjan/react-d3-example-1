import React, { Component } from 'react';
import ProgressArc from './ProgressArc';
import BarChart from './BarChart';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {percentComplete: 0.3,
                    data: [12, 5, 6, 6, 9, 10],
                    width: 700,
                    height: 100,
                    // id: root
                  };
     this.togglePercent = this.togglePercent.bind(this);
   }

  togglePercent() {
    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3;
    this.setState({percentComplete: percentage});
  }

  render() {
    console.log(this.state.percentComplete);
    return (
      <div>
        <div>
        <a onClick={this.togglePercent}>Toggle Arc</a>
        <ProgressArc
          height={300}
          width={300}
          innerRadius={100}
          outerRadius={110}
          id="d3-arc"
          backgroundColor="#e6e6e6"
          foregroundColor="#00ff00"
          percentComplete={this.state.percentComplete}
        />
        </div>
        
        <div>
            <span> This is a new D3.js component</span>
        </div>

        <div>
          <BarChart data={this.state.data} width={this.state.width} height={this.state.height} id={this.state.id}/>
        </div>
      </div>
    );
  }
}

export default App;
