import './App.css';
import ColorPicker from './Components/ColorPicker';
import logo from './logo.svg';

function App() {
  return (
    <div className='App App-header'>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <ColorPicker />
      </main>
    </div>
  );
}

export default App;
