function Hello(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}

function Welcome() {
  return (
    <div>
      <Hello name="John" />
      <Hello name="Paul" />
      <Hello name="George" />
      <Hello name="Ringo" />
    </div>
  );
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);