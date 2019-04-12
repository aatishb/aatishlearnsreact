class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <p>The time is {this.state.date.toLocaleTimeString()}</p>
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

function Clocks() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}


ReactDOM.render(
  <Clocks />,
  document.getElementById('root')
);
