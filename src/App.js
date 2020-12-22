import {Route} from 'react-router-dom';
import './App.css';
import Sandbox from './components/Sandbox';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Sandbox} />
    </div>
  );
}

export default App;
