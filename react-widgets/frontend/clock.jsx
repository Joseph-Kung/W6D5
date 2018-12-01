import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
    this.tick = this.tick.bind(this);
  }
  
  tick (event) {
    this.setState({
      currentTime: new Date()
    });
  } 
  
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    return (
      <section className="clock">
      <div><h1>Time:</h1></div>
      <div>
        <h1>{this.state.currentTime.getHours()}:
            {this.state.currentTime.getMinutes()}:
            {this.state.currentTime.getSeconds()}
        </h1>
      </div>
      <br />
      
      <div><h1>Date:</h1></div>
      <div>
        <h1>{this.state.currentTime.getMonth() + 1}/
            {this.state.currentTime.getDate()}/
            {this.state.currentTime.getFullYear()}
        </h1>
      </div>
      
      </section>
    );
  }
}

export default Clock;