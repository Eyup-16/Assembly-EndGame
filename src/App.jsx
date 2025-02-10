import {useState} from "react"
import Header from "./components/Header"
import Eliminations from "./components/Eliminations"
import Letters from "./components/Letters"
import Board from "./components/Board"
import { getRandomWord } from "./utilis"

export default function Hangman() {
    const [guessedLetter,setGuessedLetter]=useState([])
    const [word,setWord] =useState(()=>getRandomWord())
    const [mistake,setMistake]=useState(0)
console.log('parent',word);
    // derived variables
    const maxMistakes = 8;
    const correctLetter = word.split('').filter((letter)=>guessedLetter.includes(letter)) // if letter exist on gussed array
    const isGameLost = mistake>= maxMistakes;
    const isGameWon = correctLetter.length === word.length;
    const isGameOver = isGameWon || isGameLost
    // const isGameWon = a
    // console.log(typeof(correctLetter));

    function addGuessedLetter (letter){
        if (guessedLetter.includes(letter) || isGameOver) return 
        setGuessedLetter(prev => [...prev, letter]);
    
        // Update mistakes if the guess is wrong
        if (!word.includes(letter)) {
          setMistake(prev => prev + 1);
          console.log(mistake);
        }

        const className = clsx('board-letter',{
          correct:guessedLetter.includes(letter),
          incorrect:!guessedLetter.includes(letter)
         })

      };

      function restGame() {
        setMistake(0)
        setGuessedLetter([])
        setWord(getRandomWord())
      }
    return (
        <main>
            <Header/>
            <Eliminations mistakes={mistake}/>
            {/* Try to see another solution to re-render in place of key  prop that forcing rerendering */}
            <Letters key={word} word={word} guessedLetters={guessedLetter}/>
            <Board  guessedLetters= {guessedLetter} OnLetterClick={addGuessedLetter} disable={isGameOver}/>
            {isGameOver && <button onClick={restGame} className="new-game">New Game</button>}
            {isGameWon && <p>You win! 🎉</p>}
             {isGameLost && <p>You lose! The word was: {word}</p>} 
        </main>
    )
}
