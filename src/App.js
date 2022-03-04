import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import UseStateHooksWithObject from './UseStateHooksWithObject';
import HooksWithPreviousState from './HooksWithPreviousState';
import UseEffectOne from './UseEffectOne';
import UseEffectMouseEventListner from './UseEffectMouseEventListner';
import ContainerForUnmounting from './ContainerForUnmounting';

function App() {
  return (
    <div className="App">
      {/* Uncomment Below for Use state hook example */}
      {/*
      <Counter/>
      <UseStateHooksWithObject/>
      <HooksWithPreviousState/>
      */
      }

      {/* Uncomment Below for Use state hook example */}
      <UseEffectOne/>
      <UseEffectMouseEventListner/>
      <ContainerForUnmounting/>

    </div>
  );
}

export default App;
