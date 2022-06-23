function App(props) {
  return (
    <div className="class">
      <SomeComponent title={props.title} />
    </div>
  );
}

function SomeComponent(props) {
  return (
    <h1 className={props.title}>
      {' '}
      {props.title}
      {' '}
    </h1>
  );
}

export default App;
