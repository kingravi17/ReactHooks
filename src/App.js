import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import UseStateHooksWithObject from './UseStateHooksWithObject';
import HooksWithPreviousState from './HooksWithPreviousState';

function App() {
  return (
    <div className="App">
      <Counter/>
      <UseStateHooksWithObject/>
      <HooksWithPreviousState/>
    </div>
  );
}

export default App;
