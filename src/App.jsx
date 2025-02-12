import {useState} from "react"
import Header from "./components/Header"
import Eliminations from "./components/Eliminations"
import Letters from "./components/Letters"
import Board from "./components/Board"
import { getRandomWord } from "./utilis"
import Confetti from "react-confetti"

export default function Hangman() {
    const [guessedLetter,setGuessedLetter]=useState([])
    const [word,setWord] =useState(()=>getRandomWord()) // avoiding unnecessary re-renders
    const [mistake,setMistake]=useState(0)
    // derived variables
    const maxMistakes = 8;
    const correctLetter =word.split('').filter((letter)=>guessedLetter.includes(letter)) // will return an array
    const correctLetter2=word.split('').every((letter)=>guessedLetter.includes(letter)) // will return true or false
    const isGameLost = mistake>= maxMistakes;
    const isGameWon = correctLetter.length === word.length;
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetter[guessedLetter.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !word.includes(lastGuessedLetter)
    // const MissedsLetter = word.split('').filter((letter)=>!correctLetter.includes(letter)) // Available for use


    function addGuessedLetter (letter){
        if (guessedLetter.includes(letter) || isGameOver) return 
        setGuessedLetter(prev => [...prev, letter]);
    
        // Update mistakes if the guess is wrong
        if (!word.includes(letter)) {
          setMistake(prev => prev + 1);
          // console.log(mistake);
        }

      };
      // Reset Game function
      function restGame() {
        setMistake(0)
        setGuessedLetter([])
        setWord(getRandomWord())
      }
    return (
        <main>
            {isGameWon && <Confetti />}
            <Header/>
            <Eliminations mistakes={mistake} lost={isGameLost} won={isGameWon} gameOver={isGameOver}  isLastGuessIncorrect={isLastGuessIncorrect}/>
            {/* Try to see another solution to re-render in place of key prop that forcing rerendering */}
            <Letters key={word} word={word} guessedLetters={guessedLetter} gameLost={isGameLost}/>
            <Board  word={word} guessedLetters= {guessedLetter} OnLetterClick={addGuessedLetter} disable={isGameOver}/>
            {isGameOver && <button onClick={restGame} className="new-game">New Game</button>}
        </main>
    )
}
