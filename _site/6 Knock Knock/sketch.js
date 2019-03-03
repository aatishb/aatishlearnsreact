class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggled: true,
    };
  }

  toggleState = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.isToggled ? 'Knock Knock' : 'Potato'}</h1>
        <button onClick={this.toggleState}>
          {this.state.isToggled ? 'Who\'s There?': 'Potato Who?'}
        </button>
      </div>
    );
  }

}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
