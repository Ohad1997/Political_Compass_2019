import React,{useContext, useEffect} from 'react'
import {withRouter } from 'react-router-dom'
import {QuestionContext} from '../Globals'

const HomePage = withRouter(({ history})=>{
    const {setQuestion } = useContext(QuestionContext)
    useEffect(() => {
        setQuestion(-1)
    }, [setQuestion])
    return (
        <section className='home-page'>
            <div className={'grand-title'}>{'המצפן הפוליטי'}</div>
            <div className={'desc-title'}>{'יראה לך את מיקומך'}</div>
            <div className={'desc-title'}>{'על המפה הפוליטית'}</div>
            <div className={'start click'} onClick={() => {
                history.push(`/quizz/0`)}}>
                <div id="circle"></div>
                <span className={'start-text'}>{'מקם אותי מצפן!'}</span>
                </div>
                
        </section>
    )
})


export default HomePage