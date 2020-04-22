import React,{useState} from 'react';
import AppRouter from './AppRouter'
import './App.scss';
import Header from './Components/Header'
import {QuestionContext} from './Globals'
import BackgroundImage from './Components/BackgroundImage'
const App=()=> {
  const [questionIndex, questionState] = useState(-1);
  return (
    <QuestionContext.Provider value={{
      questionIndex,
      nextQuestion:()=>{ questionState(q => q + 1)},
      setQuestion:(q)=>{ questionState(q)},
      prevQuestion:()=>{ questionState(q => q - 1)},
      }}>
      <div className='background-image'></div>
      {questionIndex!==-2 && 
      <>
      <BackgroundImage className={'hide-me'} key={questionIndex +1 } image={questionIndex +1 }/>
      <BackgroundImage className={'hide-me'} key={questionIndex +2 } image={questionIndex +2 }/>
      </>}
      <BackgroundImage key={ questionIndex } image={questionIndex}>
        <Header/>
        <AppRouter/>
      </BackgroundImage>
    </QuestionContext.Provider>
  );
}

export default App;


