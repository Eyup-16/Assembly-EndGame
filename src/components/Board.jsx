import {useEffect, useRef, useState} from 'react'

function Board(props) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = alphabet.split('')

  const keyboard = alphabetArray.map((letter,index)=> {
    return <button disabled={props.guessedLetters.includes(letter) || props.disable}
                   onClick={()=> props.OnLetterClick(letter)}
                   style={props.guessedLetters.includes(letter)?{backgroundColor:'green'}:{}}
                   key={index}
                   className='board-letter'
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