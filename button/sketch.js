class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: false,
    };

  }

  toggleState = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    return (
      <button onClick={this.toggleState}>
        {this.state.isToggled ? 'on': 'off'}
      </button>
    );
  }

}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
