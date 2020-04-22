/** @jsx jsx */
import { jsx } from '@emotion/core'
import React,{useContext, useEffect,useState} from 'react'
import {withRouter } from 'react-router-dom'
import {QuestionContext} from '../Globals'
import {parties} from '../Questions'
import Compass from './Compass'
import Refresh from '../../Assets/refresh.svg'

import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
  } from 'react-share';

const Result =withRouter(({ history,match})=>{
    const paramId=parseInt(match.params.id)
    const { questionIndex,setQuestion} = useContext(QuestionContext)
    const [resultParty, setResultParty]=useState('')
    const [refreshAnimation, setRefreshAnimation]=useState(false)
    const [twitterAnimation,setTwitterAnimation]=useState(false)
    const [facebookAnimation,setFacebookAnimation]=useState(false)
    const [whatsappAnimation,setWhatsappAnimation]=useState(false)
    const [donateAnimation,setdonateAnimation]=useState(false)
    useEffect(()=> {
        setQuestion(-2)
        setResultParty(parties[paramId].name)
    }, [history, questionIndex,paramId,setQuestion])

    return(
       <React.Fragment>
      {questionIndex===-2 && resultParty &&
      <div onClick={()=>void(0)}>
      <div className={'set-up-text'}>
      <img className={`refresh click ${refreshAnimation?'spin':''}`} alt={'refresh'} 
      onMouseEnter={()=>setRefreshAnimation(true)} onAnimationEnd={() => setRefreshAnimation(false)}
      src={Refresh} onClick={()=>{history.push('/')}}></img>
      {paramId===11?'אין לך למי להצביע...':'המפלגה הכי קרובה לדעותיך היא...'}</div>
      <div className={'party-name'}>{paramId===11?'יצאת חופ"ל!':resultParty}</div>
       < Compass resultParty={paramId}/>
       <div className={'alignment-dummy'}>
        <div className={'organization-info'}>
          <div>{'חופש לכולנו היא תנועה ליברלית'}</div>
          <div>{'הפועלת לקידום חופש הפרט'}</div>
          <div>{'ולצמצום כבלי השלטון'}</div>
          <div onMouseEnter={()=>setdonateAnimation(true)}
          className={`donation-container ${donateAnimation?'donate':''} click`}
           onClick={()=>{window.open('https://app.upay.co.il/API6/clientsecure/redirectpage.php?msg=U2FYcEo3cW5UTUFKSDQyM2hGaHMxUFhjQmVyQzREREFHOWFXQ3lyMzBtQjNEYUZvM1d1cmxnZ3dJUmo3NlRkYnR0Y041K0JveURRSHZ2bmFBTCsyMC9wWWljcGtTbjNRZ0JlOHpZY0ZzcEE9&fbclid=IwAR2IDtuBZls5W02jfWLRIImIl25G4sZDOx5ewqNCCFrnsfwwOZYGwDGE88E','_blank')}}
          onAnimationEnd={() => setdonateAnimation(false)}>
            <div className={'donate-text'}>{'עזרו לנו לגדול'}</div>
          </div>
          <div className={'share-text'}>{'שתפו את התוצאה שלכם'}</div>
          <div className={'share-container'}>

          <div onMouseEnter={()=>setWhatsappAnimation(true)}
            onAnimationEnd={() => setWhatsappAnimation(false)}>
            <WhatsappShareButton
                url={`אני יצאתי ${resultParty}, מה איתך?
                ${window.location.href}`}
                className={`social ${whatsappAnimation?'whatsapp':''} click`}>
                <WhatsappIcon
                  size={52}
                  borderRadius={12}/>
            </WhatsappShareButton></div>

            <div onMouseEnter={()=>setTwitterAnimation(true)}
            onAnimationEnd={() => setTwitterAnimation(false)}>
            <TwitterShareButton
                title={`אני יצאתי ${resultParty} ואתם?
                ${window.location.href}`}
                url={window.location.href}
                className={`social ${twitterAnimation?'twitter':''} click`}>
                <TwitterIcon
                  size={52}
                  borderRadius={12}/>
            </TwitterShareButton>
            </div>

            <div onMouseEnter={()=>setFacebookAnimation(true)}
            onAnimationEnd={() => setFacebookAnimation(false)}>
            <FacebookShareButton
                url={window.location.href }
                quote={`אני יצאתי ${resultParty} ואתם?`}
                className={`social ${facebookAnimation?'facebook':''} click`}>
                <FacebookIcon
                  size={52}
                  borderRadius={12}/>
            </FacebookShareButton>
            </div>

          </div>
        </div>
       </div>
       </div>}
       </React.Fragment>
    )
})
export default Result