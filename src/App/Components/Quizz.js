import React,{useContext, useEffect} from 'react'
import {withRouter } from 'react-router-dom'
import {QuestionContext} from '../Globals'
import questions,{questionsLength,answers,parties} from '../Questions'

const Quizz = withRouter(({ history,match})=>{
    const paramId=parseInt(match.params.id)
    const { questionIndex, setQuestion } = useContext(QuestionContext)

    useEffect(()=> {
        if (questionIndex === undefined || questionIndex < paramId - 1 ||
             (questionIndex>0 && answers[questionIndex-1]===undefined)) {
            history.push('/')
        }
        setQuestion(paramId)
    }, [paramId,history,questionIndex,setQuestion])

    const Advance=()=>{
        if(paramId+1>questionsLength-1){
            setQuestion(-2)
            const partiesScores=new Array(questionsLength).fill(0);
            for (let i = 0; i < Object.keys(parties).length; i++) { 
              answers.map((answer, index)=>{
                if(parties[i].answers[index]===answer){
                  partiesScores[i]+=1;
                }
              })
            }
            let finalIndex = partiesScores.indexOf(Math.max(...partiesScores));
            history.push(`/result/${finalIndex}`)
        }
        else{
            history.push(`/quizz/${paramId+1}`)
        }
    }
    return (
        questionIndex !==undefined && questionIndex >= paramId - 1 &&
        <>
        <div className={"question"}>{questions[paramId]}</div>
        <div className='counter-container'>
            <div className='counter'>
                {`שאלה ${paramId+1} מתוך ${questionsLength}`}
            </div>
        </div>
        <div className={'options-container'}>
            <div className={"click-options"}>
                <div className={"answer-option in-favor click"} onClick={()=>{
                    answers[paramId]=0
                    Advance()
                }}>{`מסכים`}</div>    
                <div className={"answer-option neutral click"}onClick={()=>{
                    answers[paramId]=1
                    Advance()
                }}>{`נייטרלי`}</div>
                <div className={"answer-option against click"}onClick={()=>{
                    answers[paramId]=2
                    Advance()
                }}>{`לא מסכים`}</div>
            </div> 
        </div>
        </>
    )
})


export default Quizz