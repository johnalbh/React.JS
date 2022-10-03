import '../App.css';
import logo from '../logo.svg';
import AppClass from './AppClass';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h3>Class Components</h3>
        <AppClass />
      </header>
    </div>
  );
}

export default App;
