import '../App.css';
import logo from '../logo.svg';
import AppClass from './AppClass';
import AppFunction from './AppFunction';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h3>Class Components</h3>
        <AppClass />
        <AppFunction />
      </header>
    </div>
  );
}

export default App;
