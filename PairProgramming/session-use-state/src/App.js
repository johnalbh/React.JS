import "./App.css"
import QuizNav from "./QuizNav"

function App() {
  const questions = ["Pregunta 1", "Pregunta 2", "Pregunta 3"]

  return <QuizNav questions={questions} />
}

export default App
