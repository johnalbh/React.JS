import './App.css';
import ColorPicker from './Components/ColorPicker';
import Counter from './Components/Counter';
import QuizNavBar from './Components/QuizNavBar';
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
        <QuizNavBar questions={['Pregunta 1', 'Pregunta2']} />
      </main>
    </div>
  );
}

export default App;
