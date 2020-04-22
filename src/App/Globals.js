import React from 'react'
import cssConstants from './Globals.scss'

const Size = Object.assign({}, ...Object.entries(cssConstants).map(([key, val]) => ({ [key]: parseInt(val.match(/\d+/)[0]) })))
const  QuestionContext = React.createContext();


export default Size;
export {QuestionContext}