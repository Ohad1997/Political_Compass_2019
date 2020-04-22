import React from 'react'

const  Mark=(props)=>{
    return (
        <>
        <circle cx={props.cx} cy={props.cy} r={props.r} fill={"rgb(46, 161, 238)"} onMouseOver={props.onMouseOver} style={props.style}/>
        <circle cx={props.cx} cy={props.cy} r={parseInt(props.r)+23} fill="transparent" onMouseOver={props.onMouseOver}/>
        </>
    )

}

export default Mark