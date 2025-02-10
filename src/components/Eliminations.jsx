import {useState} from 'react'
import { languages } from '../languages'
import {nanoid} from 'nanoid'
const language = languages.map((lang)=>{
 return <span className='lang' key={nanoid()} style={{backgroundColor:lang.backgroundColor,color:lang.color}}>{lang.name}</span>
})


function Eliminations(props) {
  return (
    <>
    <section className="notice">
        <p>"FareWell HTML & CSS"🫡</p>
    </section>
    <section className='eliminations'>
      {language}
    </section>
    </>
    
  )
}

export default Eliminations