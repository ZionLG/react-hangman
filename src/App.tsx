import { useState } from 'react'
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import words from "./wordList.json"
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className=' max-w-3xl flex flex-col gap-8 mx-auto my-0 items-center'>
      <div className='text-3xl text-center'>
        Lose
        Win
      </div>
      <HangmanDrawing/>
      <HangmanWord/>
      <Keyboard/>
    </div>
  )
}

export default App
