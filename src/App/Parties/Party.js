import React from 'react'
const Party=(props)=>{

    const textRef = React.useRef(null)
    const rectRef = React.useRef(null)
    const rectRef2 = React.useRef(null)
    const plus = 20

    React.useEffect(()=> {
      if (textRef.current !== null && rectRef.current !== null) {
        const SVGRect = textRef.current.getBBox()
        rectRef.current.setAttribute('x', SVGRect.x - plus / 2)
        rectRef.current.setAttribute('y', SVGRect.y +1)
        rectRef.current.setAttribute('width', SVGRect.width + plus)
        rectRef.current.setAttribute('height', SVGRect.height)
        rectRef2.current.setAttribute('x', SVGRect.x - plus / 2)
        rectRef2.current.setAttribute('y', SVGRect.y +1)
        rectRef2.current.setAttribute('width', SVGRect.width + plus)
        rectRef2.current.setAttribute('height', SVGRect.height)
      }
    }, [])
    return (

<svg  overflow="visible" className={props.className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={`${props.x}px`} y={`${props.y}px`}>
        <path fill="#FFFFFF" d="M15.7,38.7L31.7,64l13.8-26.4c3.4-5.3,6.5-9.5,6.5-15.6c0-12.2-9.9-22-22-22s-22,9.9-22,22
	C8.1,28.7,12.4,32.9,15.7,38.7z" />
        <g id="XMLID_3_">
          <defs>
            <circle id="XMLID_1_" cx="30.1" cy="21.9" r="19.8" />
          </defs>
          <clipPath id="XMLID_9_">
            <use xlinkHref="#XMLID_1_" style={{overflow: 'visible'}} />
          </clipPath>
          <g style={{clipPath: 'url(#XMLID_9_)'}}>
            {props.children}
          </g>
        </g>
        <g>
          <rect ref={rectRef} className="party-tooltip-rect-back"></rect>
          <rect ref={rectRef2} className="party-tooltip-rect-front"></rect>
          <text ref={textRef} textAnchor="middle" className={`party-tooltip`} clipPath="url(#Mask_Mask_3)" 
          writingMode="lr"><tspan x="34" y="111" baselineShift="0%" fontSize={22}  xmlSpace="preserve">{props.tooltip}</tspan>             </text>
        </g>
      </svg>

)
}
export default Party