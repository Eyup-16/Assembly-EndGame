import {useState} from 'react'



function Letters() {
  const [currentWord,setCurrentWord] = useState('Belkis')
  const wordArray = currentWord.split('')

  const wordElements = wordArray.map((letter,index)=>{
   return <span key={index} className='letter'>{letter.toUpperCase()}</span>
  })
  return (
    <section className='letters-container'>
      {wordElements}
    </section>
  )
}

export default Letters