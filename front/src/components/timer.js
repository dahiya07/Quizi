import React,{Component} from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
}

  tick() {
    const { check,duration, } = this.props;
    if (this.state.seconds == duration) {
      check();
    } else {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const  duration  = this.props.duration;
    let timeLeft = duration - this.state.seconds;
    return <span>Total Time Left: {timeLeft}</span>;
  }
}