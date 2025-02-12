function Letters(props) {
  const wordArray = props.word.split('')
  const wordElements = wordArray.map((letter,index)=>{
    const isGuessed = props.guessedLetters.includes(letter)
    const isMissed = !isGuessed && props.gameLost
   return <span key={index}
              style={{color:isMissed&&'#d62727'}} 
             className='letter'>
             {isGuessed
             ?letter.toUpperCase()
             :props.gameLost?
             letter.toUpperCase()
             :'-'}
          </span>
  })
  return (
    <section className='letters-container'>
      {wordElements}
    </section>
  )
}
export default Letters
