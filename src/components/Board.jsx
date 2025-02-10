import {useEffect, useRef, useState} from 'react'
import clsx from 'clsx'

function Board(props) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = alphabet.split('')


  const keyboard = alphabetArray.map((letter,index)=> {
    return <button disabled={props.guessedLetters.includes(letter) || props.disable}
                   onClick={()=> props.OnLetterClick(letter)}
                   key={index}
                   className={clsx('board-letter',{
                    correct:props.guessedLetters.includes(letter),
                    incorrect:props.guessedLetters.length > 0 &&!props.guessedLetters.includes(letter)
                   })}
                   aria-label={`Guess letter ${letter}`}>
                    {letter.toUpperCase()}
           </button>
  })

  return (
    <section className='keyboard-container'>
      {keyboard}
    </section>
  )
}

export default Board