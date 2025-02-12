import clsx from 'clsx'

function Board(props) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArray = alphabet.split('')

  const keyboard = alphabetArray.map((letter)=> {
    const isGuessed = props.guessedLetters.includes(letter)
    const isCorrect = isGuessed &&  props.word.includes(letter)
    const isWrong = isGuessed && !props.word.includes(letter) 
    // console.log(isGuessed , '+', isCorrect , '+' , isWrong);
    return <button disabled={isGuessed || props.disable}
                   onClick={()=> props.OnLetterClick(letter)}
                   key={letter}
                   className={clsx('keyboardBtn',{
                    correct:isCorrect,
                    incorrect:isWrong
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
