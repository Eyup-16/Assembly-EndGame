import {useState} from 'react'

function Board() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = alphabet.split('')

  const keyboard = alphabetArray.map((letter,index)=> {
    return <button key={index} className='board-letter'>{letter.toUpperCase()}</button>
  })
  return (
    <section className='keyboard-container'>
      {keyboard}
    </section>
  )
}

export default Board