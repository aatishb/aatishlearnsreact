const name = 'Aatish Bhatia';

const element = (
  <div>
    <p>Hello, {name}</p>
    <p>How are you?</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);