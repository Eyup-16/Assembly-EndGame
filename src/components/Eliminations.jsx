import { languages } from '../languages'
import clsx from 'clsx'
import { getFarewellText } from '../utilis'

function Eliminations(props) {
  const lastEliminated = props.mistakes > 0 ? languages[props.mistakes - 1] : null;
  const fareWellText = lastEliminated && props.isLastGuessIncorrect ? getFarewellText(lastEliminated.name) : "";  
  const noticeClass =clsx('notice',{
    correct:props.won,
    incorrect:props.lost,
    farewell:!props.gameOver && props.isLastGuessIncorrect
  })

  const language = languages.map((lang,index)=>{
    return <span className={index+1 <= props.mistakes?'lang lost':'lang'} key={lang.name} style={{backgroundColor:lang.backgroundColor,color:lang.color}}>{lang.name}</span>
  })
  // We need to design the fareWellText
  return (
    <>
    <section className={noticeClass}>
        <h1>{props.lost? 'Game over!': props.won? 'You Win!':null}</h1>
        <p>{props.lost?'You lose! Better start learning Assembly 😭':props.won?'Well Done🎉':fareWellText}</p>
    </section>
    <section className='eliminations'>
      {language}
    </section>
    </>
    
  )
}

export default Eliminations
