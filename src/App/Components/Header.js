import React,{useState} from 'react'
import bird from '../../Assets/bird.png'

const openSocials=()=>{
    window.open('https://www.facebook.com/hofeshku','_blank')
}
const Header=()=>{
    const [birdAnimation,setBirdAnimation]=useState(false)
    return (
    <header className='App-header'>
        <div className='wrapper click' onClick={()=>openSocials()}
        onMouseEnter={()=>setBirdAnimation(true)}
        onAnimationEnd={()=>setBirdAnimation(false)}>
        <img className={`bird-white-small ${birdAnimation?'header-bird-fly':''}`} alt='logo' src={bird}></img>
        <div className={'text-container'}>
            <div className={'freedom-text'} >{'חופש'}</div>
            <div>{'לכולנו الحرية لنا جميعاً'}</div>
        </div>
        </div>
    </header>
    )
}

export default Header