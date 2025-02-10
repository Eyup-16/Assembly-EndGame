import {useState} from 'react'

function Letters(props) {
  const [currentWord,setCurrentWord] = useState(props.word)
  // console.log(props.word);
  const wordArray = currentWord.split('')
console.log('child',currentWord);
  const wordElements = wordArray.map((letter,index)=>{
   return <span key={index} 
                className='letter'>
              {props.guessedLetters.includes(letter)?letter.toUpperCase():'-'}
          </span>
  })
  return (
    <section className='letters-container'>
      {wordElements}
    </section>
  )
}

export default Letters