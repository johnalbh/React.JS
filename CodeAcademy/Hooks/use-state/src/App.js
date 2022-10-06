import './App.css';
import ColorPicker from './Components/ColorPicker';
import Counter from './Components/Counter';
import TextInput from './Components/TextInput';
import ToogleLoading from './Components/TootgleLoading';
import logo from './logo.svg';

function App() {
  return (
    <div className='App App-header'>
      <header>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <ColorPicker />
        <ToogleLoading />
        <TextInput />
        <Counter />
      </main>
    </div>
  );
}

export default App;
