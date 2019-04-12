class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numCarrots: 0,
      carrots: []
    };

  }

  addCarrot = () => {
    this.setState({
      numCarrots : this.state.numCarrots + 1,
      carrots: [...this.state.carrots, <li>🥕</li>]
    });
  }

  subtractCarrot = () => {
    if (this.state.numCarrots > 0) {
      this.setState({
        numCarrots : this.state.numCarrots - 1,
        carrots: this.state.carrots.slice(0, -1)
      });
    }
  }

  render() {
    return (
      <div>
        <h1> I Have {this.state.numCarrots} Carrots </h1>
        <ul>{this.state.carrots}</ul>
        <button onClick={this.addCarrot}> Add Carrot </button>
        <button onClick={this.subtractCarrot}> Subtract Carrot </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);