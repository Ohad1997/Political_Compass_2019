import React,{useState,useEffect} from 'react'
import Mark from '../Parties/Mark'
import Party0 from '../Parties/Party0'
import Party1 from '../Parties/Party1'
import Party2 from '../Parties/Party2'
import Party3 from '../Parties/Party3'
import Party4 from '../Parties/Party4'
import Party5 from '../Parties/Party5'
import Party6 from '../Parties/Party6'
import Party7 from '../Parties/Party7'
import Party8 from '../Parties/Party8'
import Party9 from '../Parties/Party9'
import Party10 from '../Parties/Party10'
import BirdSvg from '../Parties/BirdSvg'
const Compass=(props)=>{
  const [hover,setHover]=useState(false)
  const [party,setParty]=useState(false)
  useEffect(()=> {
      setParty(props.resultParty)
}, [props.resultParty])
 
  return (
  <svg className="result-compass" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="521px" height="521px" viewBox="0 0 521 521">
          <defs>
            <g id="Layer5_0_FILL">
              <path fill="#333333" stroke="none" d="
  M 352.45 73.65
  Q 339.8 67.5 324 64.15 313 61.85 299.65 60.65 290.3 57.95 280 56.65 256.8 53.7 230.85 57.9 220 59.65 210.3 62.4 202.35 63.45 194.75 65.7 183.55 67.85 173 72.65 161.7 77.85 152.2 85.6 146.4 88.85 141.05 92.95 135.8 96.95 131.2 101.55 124.95 105.45 119.35 110.3 108.95 119.3 99.5 132.75 96.45 137.1 93.1 142.5 92.55 142.35 91.95 142.6 91.1 142.9 90.55 143.6 90.15 144.15 89.8 145.1 89.55 145.65 89.15 146.7 88.35 148.55 86.2 150.75 82.8 154.3 82.65 154.45 81 156.45 79 160.35 76.65 164.95 75.6 166.45 74.4 168.15 73.8 169.05 72.75 170.55 72.3 171.8 72 172.75 71.75 174.35 71.5 176.3 71.35 176.95 71.25 177.4 68.7 183.4 68.45 184.05 68.25 184.7 68.15 184.65 68.1 184.6 67.25 184.15 66.45 185 65.9 185.65 66.1 186.75 66.2 187.1 66.45 187.75 66.65 188.3 66.6 188.7 66.5 189.2 66.05 189.7
  L 64.55 192.4
  Q 63.15 195.4 62.95 196.65 62.9 197.05 62.9 198.7 62.85 200 62.65 200.75 62.5 201.2 62.3 201.8 61.85 201.85 61.6 202.2 61.15 202.75 61.2 204.35 61.05 204.9 60.4 206 59.25 208.05 58.55 212.4 58.05 215.5 58.1 217.1 58.1 218.45 57.8 218.9 57.6 219.2 57 219.85 56.6 220.65 57.35 221.4 57.7 221.65 58.2 221.85 58.15 221.85 58.15 221.9 53.65 240 52.35 256.7 52.3 257.15 52.25 257.6 51.15 272.15 52.4 285.65 53.95 302.15 59.05 317.05 62.8 327.95 68.3 337.4 67.65 338.1 67.7 339.05 67.7 340.55 69 343.15
  L 72 349.05
  Q 74.05 353.2 75.7 355.2 75.85 355.35 77.45 357 78.5 358.1 79.05 358.95 79.65 359.8 80.3 361.15 80.7 361.95 81.4 363.5 81.6 363.85 81.8 364.25 92.1 387.4 115.8 410.75 144.4 438.95 172.75 447.9 174.5 448.45 176.3 448.95 187.3 454.1 199.9 457.5 221.3 463.25 244.25 463.1 256.05 465 268 464.2 281.4 463.65 295.15 460.6 300.95 460.6 306.8 459.95 311.3 459.45 315.7 458.6 338 455.85 357.65 445.1 373.5 436.4 386.55 423.15 389.3 420.35 391.85 417.45 394.15 415.7 396.4 413.9 415.05 398.95 426.35 381.9 432.8 373.5 438 363.8 438.2 363.45 438.4 363.1 447.2 352.75 452.7 340.1 458.1 327.7 460.75 311.95 461.2 309.3 461.6 306.5 461.95 305.7 461.95 304.6 462 303.65 462.05 302.75 462.35 299.85 462.65 296.75 463.1 293.55 464.15 289.1
  L 465.4 283.4
  Q 466.5 278.1 467.45 275.7 468.3 273.5 468 272.45 467.8 271.6 466.95 271.2 466.5 271 466.15 271.05 467.4 264.3 467.65 257.35 468.55 234.7 459.25 209.3 458.7 206.3 458.05 203.3 450.7 168.25 433.7 145.8 428.1 138.45 421.35 132.3 407 111.85 382.05 93.85 379.6 92.05 377.15 90.4 366.05 80.25 352.45 73.65
  M 75 172.6
  Q 74.9 172.8 74.85 173 74.95 172.35 75.3 171.95 75.35 171.9 75.4 171.9 75.2 172.25 75 172.6 Z" />
            </g>
            <g id="Layer1_0_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 261.75 498.7
  L 257.3 506.65 265.9 506.75 261.75 498.7
  M 12.3 260.3
  L 20.25 255.85 12.2 251.7 12.3 260.3
  M 254.35 10.75
  L 258.8 18.7 262.95 10.65 254.35 10.75
  M 507.05 260.6
  L 506.95 252 499 256.45 507.05 260.6 Z" />
            </g>
            <g id="Layer1_1_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 508.45 252.2
  Q 507.65 252.65 507.65 253.55
  L 507.65 253.8 507 254.5 506.35 255.75
  Q 506.2 256.2 506.3 256.8 506.45 257.35 506.9 257.65 507.4 258.05 508.1 257.9 508.7 257.75 509.05 257.15 509.25 256.8 509.6 256.15
  L 510.2 255.75 510.65 255.15
  Q 510.9 254.7 510.95 254.3 511.1 253.75 510.85 253.2 510.6 252.45 509.9 252.15 509.15 251.8 508.45 252.2 Z" />
            </g>
            <g id="Layer1_2_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 510.95 256.25
  Q 510.65 255.9 510.25 255.65
  L 509.9 255.4
  Q 509.4 255 509.1 254.9 508.55 254.65 507.4 254.55 506.95 254.5 506.5 254.55 506.05 254.65 505.7 254.9 505.35 255.2 505.25 255.75 505.15 256.3 505.4 256.75 505.65 257.25 506.15 257.4 506.45 257.55 507.1 257.55
  L 507.75 257.65 508.3 258
  Q 509 258.6 509.6 258.65 510.55 258.75 511.05 257.9 511.5 257 510.95 256.25 Z" />
            </g>
            <g id="Layer1_3_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 507.4 254.75
  L 506.95 254.7 505.05 254.1 504.95 254.15
  Q 503.95 254.15 503.6 255.1
  L 503.5 255.55
  Q 503.5 255.9 503.65 256.2 503.9 256.9 504.95 257.3
  L 505.55 257.5 506.75 257.75 507.4 257.7
  Q 508.15 257.55 508.45 256.9 508.75 256.25 508.45 255.55 508.15 254.9 507.4 254.75 Z" />
            </g>
            <g id="Layer1_4_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.05 253.15
  Q 508.7 252.65 507.9 252.65
  L 506.5 252.9 505.8 253.1
  Q 505.45 253.2 504.95 253.55
  L 504.6 253.8
  Q 503.85 254.5 504.3 255.5 504.6 256.05 505 256.2 505.35 256.4 505.8 256.4 506.45 256.3 506.7 256.15
  L 507.25 255.85 508.1 255.7 508.65 255.5
  Q 509.3 255.1 509.45 254.3 509.55 253.65 509.05 253.15 Z" />
            </g>
            <g id="Layer1_5_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 508.45 252.2
  Q 507.65 252.65 507.65 253.55
  L 507.65 253.8 507 254.5 506.35 255.75
  Q 506.2 256.2 506.3 256.8 506.45 257.35 506.9 257.65 507.4 258.05 508.1 257.9 508.7 257.75 509.05 257.15 509.25 256.8 509.6 256.15
  L 510.2 255.75 510.65 255.15
  Q 510.9 254.7 510.95 254.3 511.1 253.75 510.85 253.2 510.6 252.45 509.9 252.15 509.15 251.8 508.45 252.2 Z" />
            </g>
            <g id="Layer1_6_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.9 255.4
  Q 509.4 255 509.1 254.9 508.55 254.65 507.4 254.55 506.95 254.5 506.5 254.55 506.05 254.65 505.7 254.9 505.35 255.2 505.25 255.75 505.15 256.3 505.4 256.75 505.65 257.25 506.15 257.4 506.45 257.55 507.1 257.55
  L 507.75 257.65 508.3 258
  Q 509 258.6 509.6 258.65 510.55 258.75 511.05 257.9 511.5 257 510.95 256.25 510.65 255.9 510.25 255.65
  L 509.9 255.4 Z" />
            </g>
            <g id="Layer1_7_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 507.4 254.75
  L 506.95 254.7 505.05 254.1 504.95 254.15
  Q 503.95 254.15 503.6 255.1
  L 503.5 255.55
  Q 503.5 255.9 503.65 256.2 503.9 256.9 504.95 257.3
  L 505.55 257.5 506.75 257.75 507.4 257.7
  Q 508.15 257.55 508.45 256.9 508.75 256.25 508.45 255.55 508.15 254.9 507.4 254.75 Z" />
            </g>
            <g id="Layer1_8_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.05 253.15
  Q 508.7 252.65 507.9 252.65
  L 506.5 252.9 505.8 253.1
  Q 505.45 253.2 504.95 253.55
  L 504.6 253.8
  Q 503.85 254.5 504.3 255.5 504.6 256.05 505 256.2 505.35 256.4 505.8 256.4 506.45 256.3 506.7 256.15
  L 507.25 255.85 508.1 255.7 508.65 255.5
  Q 509.3 255.1 509.45 254.3 509.55 253.65 509.05 253.15 Z" />
            </g>
            <g id="Layer1_9_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 508.45 252.2
  Q 507.65 252.65 507.65 253.55
  L 507.65 253.8 507 254.5 506.35 255.75
  Q 506.2 256.2 506.3 256.8 506.45 257.35 506.9 257.65 507.4 258.05 508.1 257.9 508.7 257.75 509.05 257.15 509.25 256.8 509.6 256.15
  L 510.2 255.75 510.65 255.15
  Q 510.9 254.7 510.95 254.3 511.1 253.75 510.85 253.2 510.6 252.45 509.9 252.15 509.15 251.8 508.45 252.2 Z" />
            </g>
            <g id="Layer1_10_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.9 255.4
  Q 509.4 255 509.1 254.9 508.55 254.65 507.4 254.55 506.95 254.5 506.5 254.55 506.05 254.65 505.7 254.9 505.35 255.2 505.25 255.75 505.15 256.3 505.4 256.75 505.65 257.25 506.15 257.4 506.45 257.55 507.1 257.55
  L 507.75 257.65 508.3 258
  Q 509 258.6 509.6 258.65 510.55 258.75 511.05 257.9 511.5 257 510.95 256.25 510.65 255.9 510.25 255.65
  L 509.9 255.4 Z" />
            </g>
            <g id="Layer1_11_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 507.4 254.75
  L 506.95 254.7 505.05 254.1 504.95 254.15
  Q 503.95 254.15 503.6 255.1
  L 503.5 255.55
  Q 503.5 255.9 503.65 256.2 503.9 256.9 504.95 257.3
  L 505.55 257.5 506.75 257.75 507.4 257.7
  Q 508.15 257.55 508.45 256.9 508.75 256.25 508.45 255.55 508.15 254.9 507.4 254.75 Z" />
            </g>
            <g id="Layer1_12_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.05 253.15
  Q 508.7 252.65 507.9 252.65
  L 506.5 252.9 505.8 253.1
  Q 505.45 253.2 504.95 253.55
  L 504.6 253.8
  Q 503.85 254.5 504.3 255.5 504.6 256.05 505 256.2 505.35 256.4 505.8 256.4 506.45 256.3 506.7 256.15
  L 507.25 255.85 508.1 255.7 508.65 255.5
  Q 509.3 255.1 509.45 254.3 509.55 253.65 509.05 253.15 Z" />
            </g>
            <g id="Layer1_13_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 508.45 252.2
  Q 507.65 252.65 507.65 253.55
  L 507.65 253.8 507 254.5 506.35 255.75
  Q 506.2 256.2 506.3 256.8 506.45 257.35 506.9 257.65 507.4 258.05 508.1 257.9 508.7 257.75 509.05 257.15 509.25 256.8 509.6 256.15
  L 510.2 255.75 510.65 255.15
  Q 510.9 254.7 510.95 254.3 511.1 253.75 510.85 253.2 510.6 252.45 509.9 252.15 509.15 251.8 508.45 252.2 Z" />
            </g>
            <g id="Layer1_14_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.9 255.4
  Q 509.4 255 509.1 254.9 508.55 254.65 507.4 254.55 506.95 254.5 506.5 254.55 506.05 254.65 505.7 254.9 505.35 255.2 505.25 255.75 505.15 256.3 505.4 256.75 505.65 257.25 506.15 257.4 506.45 257.55 507.1 257.55
  L 507.75 257.65 508.3 258
  Q 509 258.6 509.6 258.65 510.55 258.75 511.05 257.9 511.5 257 510.95 256.25 510.65 255.9 510.25 255.65
  L 509.9 255.4 Z" />
            </g>
            <g id="Layer1_15_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 507.4 254.75
  L 506.95 254.7 505.05 254.1 504.95 254.15
  Q 503.95 254.15 503.6 255.1
  L 503.5 255.55
  Q 503.5 255.9 503.65 256.2 503.9 256.9 504.95 257.3
  L 505.55 257.5 506.75 257.75 507.4 257.7
  Q 508.15 257.55 508.45 256.9 508.75 256.25 508.45 255.55 508.15 254.9 507.4 254.75 Z" />
            </g>
            <g id="Layer1_16_FILL">
              <path fill="#E7D7D7" stroke="none" d="
  M 509.05 253.15
  Q 508.7 252.65 507.9 252.65
  L 506.5 252.9 505.8 253.1
  Q 505.45 253.2 504.95 253.55
  L 504.6 253.8
  Q 503.85 254.5 504.3 255.5 504.6 256.05 505 256.2 505.35 256.4 505.8 256.4 506.45 256.3 506.7 256.15
  L 507.25 255.85 508.1 255.7 508.65 255.5
  Q 509.3 255.1 509.45 254.3 509.55 253.65 509.05 253.15 Z" />
            </g>
            <path id="Layer4_0_1_STROKES" stroke="#c4b3b3" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" fill="none" d="
  M 336.05 70
  L 333.95 70 333.95 106.65 371.7 106.75 371.75 87.85
  M 298.1 57
  L 298.1 69.75 333.95 70 333.95 67.95
  M 398.75 106.85
  L 371.7 106.75 371.6 145.5 408.8 145.6 408.7 116.8
  M 333.95 145.35
  L 333.95 106.65 298.1 106.5 298.1 145.25 333.95 145.35 371.6 145.5 371.5 181.75 408.95 181.65 408.8 145.6 431.6 145.65
  M 371.5 181.75
  L 333.95 181.85 333.95 218.7 371.4 218.9 371.5 181.75 Z
  M 298.1 145.25
  L 298.1 181.9 333.95 181.85 333.95 145.35
  M 408.95 181.65
  L 446.55 181.55 446.55 170.55
  M 451.5 181.5
  L 446.55 181.55 446.55 219.25 464.45 219.3
  M 466.45 293
  L 446.55 292.95 446.55 329.8 453.5 329.8
  M 409.05 219.05
  L 409.35 292.85 446.55 292.95 446.55 219.25 409.05 219.05 371.4 218.9 371.15 292.8 409.35 292.85 409.45 329.8 446.55 329.8 446.55 352.7
  M 371.15 292.8
  L 333.95 292.7 333.95 329.8 371.05 329.8 371.15 292.8 Z
  M 333.95 292.7
  L 333.95 218.7 298.1 218.55 298.1 292.6 333.95 292.7 Z
  M 370.95 368.5
  L 333.95 368.4 333.95 404.95 370.85 405.2 370.95 368.5 371.05 329.8 409.45 329.8 409.6 368.6 433.6 368.65
  M 333.95 368.4
  L 333.95 329.8 298.1 329.8 298.1 368.3 333.95 368.4 Z
  M 409.7 402.45
  L 409.6 368.6 370.95 368.5
  M 409.05 219.05
  L 408.95 181.65
  M 149.9 87.95
  L 149.85 105.95 185.85 106.1 185.75 69 184.75 69
  M 185.75 69
  L 223.55 69.25 223.55 56.1
  M 223.35 145.05
  L 223.45 106.25 185.85 106.1 185.95 144.95 223.35 145.05 298.1 145.25
  M 223.3 182.1
  L 186.05 182.2 186.15 218 223.2 218.15 223.3 182.1 223.35 145.05
  M 186.05 182.2
  L 185.95 144.95 149.75 144.85 149.65 182.3 186.05 182.2 Z
  M 223.45 106.25
  L 298.1 106.5 298.1 69.75 223.55 69.25 223.45 106.25 Z
  M 223.2 218.15
  L 298.1 218.55 298.1 181.9 223.3 182.1
  M 57.35 217.35
  L 74.55 217.45 74.35 182.5 70.3 182.5
  M 74.35 182.5
  L 74.25 169.55
  M 111.1 114.8
  L 111.1 144.7 149.75 144.85 149.85 105.95 124.05 105.85
  M 74.35 182.5
  L 111.1 182.4 111.1 144.7 90.2 144.65
  M 149.65 182.3
  L 111.1 182.4 111.1 217.65 149.55 217.8 149.65 182.3 Z
  M 149.35 292.25
  L 111.1 292.15 111.1 329.8 149.25 329.8 149.35 292.25 149.55 217.8 186.15 218 186.35 292.35 223.05 292.45 223.2 218.15
  M 111.1 292.15
  L 111.1 217.65 74.55 217.45 74.95 292.05 111.1 292.15 Z
  M 62.3 329.8
  L 75.15 329.8 74.95 292.05 56.35 292
  M 75.25 351.7
  L 75.15 329.8 111.1 329.8 111.1 367.75 149.1 367.85 149.25 329.8 186.45 329.8 186.35 292.35 149.35 292.25
  M 111.1 400.5
  L 111.1 367.75 81.25 367.65
  M 222.85 368.05
  L 222.95 329.8 186.45 329.8 186.55 367.95 222.85 368.05 298.1 368.3 298.1 404.7 333.95 404.95 333.95 440.3 360.95 440.3
  M 222.95 329.8
  L 298.1 329.8 298.1 292.6 223.05 292.45 222.95 329.8 Z
  M 186.55 367.95
  L 149.1 367.85 149 403.7 186.65 403.95 186.55 367.95 Z
  M 298.1 440.3
  L 298.1 404.7 222.75 404.2 222.65 440.3 298.1 440.3 333.95 440.3 333.95 454.05
  M 298.1 461
  L 298.1 440.3
  M 158.85 440.3
  L 186.75 440.3 186.65 403.95 222.75 404.2 222.85 368.05
  M 186.75 453.25
  L 186.75 440.3 222.65 440.3 222.6 462.2
  M 148.9 436.3
  L 149 403.7 112.1 403.45
  M 370.75 436.15
  L 370.85 405.2 409.7 405.45" />
            <path id="Layer3_0_1_STROKES" stroke="#FBB702" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" fill="none" d="
  M 467.5 256.05
  Q 467.55 258.2 467.55 260.35 467.55 345.5 406.8 405.7 346.45 465.55 261.3 466 260.7 466 260.05 466 174 466 113.25 405.7 52.45 345.5 52.45 260.35 52.45 257.7 52.5 255.05
  M 260.3 54.75
  Q 346.1 54.85 406.8 114.9 466 173.65 467.5 256.05
  M 52.5 255.05
  Q 54.35 173.3 113.25 114.9 174 54.75 260.05 54.75 260.2 54.75 260.3 54.75" />
            <path id="Layer3_0_2_STROKES" stroke="#FBB702" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" fill="none" d="
  M 52.5 255.05
  L 51.5 255.05
  M 467.9 256.05
  L 467.5 256.05 260.8 255.55 261.3 466
  M 260.3 54.05
  L 260.3 54.75 260.8 255.55 52.5 255.05" />
            <path id="Layer2_0_1_STROKES" stroke="#E7D7D7" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" fill="none" d="
  M 509.2 259.05
  Q 509.2 362.65 436.1 435.9 362.9 509.3 259.45 509.3 155.9 509.3 82.75 435.9 9.6 362.65 9.6 259.05 9.6 155.45 82.75 82.05 155.9 8.9 259.45 8.9 362.9 8.9 436.1 82.05 439.85 85.8 443.35 89.6 443.65 89.9 443.9 90.2 509.2 161.15 509.2 259.05 Z" />
            <path id="Layer1_0_1_STROKES" stroke="#E7D7D7" strokeWidth={1} strokeLinejoin="round" strokeLinecap="round" fill="none" d="
  M 499 256.45
  L 507.05 260.6 506.95 252 499 256.45 Z
  M 258.8 18.7
  L 262.95 10.65 254.35 10.75 258.8 18.7 Z
  M 20.25 255.85
  L 12.2 251.7 12.3 260.3 20.25 255.85 Z
  M 261.75 498.7
  L 265.9 506.75 257.3 506.65 261.75 498.7 Z" />
          </defs>
          <g id="Layer_5">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer5_0_FILL" />
            </g>
          </g>
          <g id="Layer_4">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer4_0_1_STROKES" />
            </g>
          </g>
          <g id="Layer_2">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer3_0_2_STROKES" />
            </g>
          </g>
          <circle cx="260" cy="260" r="206" fill="rgba(0, 0, 0, 0.9)" style={hover?{}:{display:"none"}} />
          <g id="Layer_2">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer3_0_1_STROKES" />
            </g>
          </g>
          <g id="Layer_13">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer2_0_1_STROKES" />
            </g>
          </g>
          <g id="Layer_1">
            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
              <use xlinkHref="#Layer1_0_FILL" />
              <use xlinkHref="#Layer1_0_1_STROKES" />
            </g>
            <g transform="matrix( 0.7870330810546875, 0.0185089111328125, 0, 1.1466827392578125, 105.15,-45.75) ">
              <use xlinkHref="#Layer1_1_FILL" />
            </g>
            <g transform="matrix( 0.7870330810546875, 0.0185089111328125, 0, 1.1466827392578125, 105.15,-45.75) ">
              <use xlinkHref="#Layer1_2_FILL" />
            </g>
            <g transform="matrix( 0.7870330810546875, 0.0185089111328125, 0, 1.1466827392578125, 105.15,-45.75) ">
              <use xlinkHref="#Layer1_3_FILL" />
            </g>
            <g transform="matrix( 0.7870330810546875, 0.0185089111328125, 0, 1.1466827392578125, 105.15,-45.75) ">
              <use xlinkHref="#Layer1_4_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, -0.7870330810546875, 1.14666748046875, 0, -43.4,412.55) ">
              <use xlinkHref="#Layer1_5_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, -0.7870330810546875, 1.14666748046875, 0, -43.4,412.55) ">
              <use xlinkHref="#Layer1_6_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, -0.7870330810546875, 1.14666748046875, 0, -43.4,412.55) ">
              <use xlinkHref="#Layer1_7_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, -0.7870330810546875, 1.14666748046875, 0, -43.4,412.55) ">
              <use xlinkHref="#Layer1_8_FILL" />
            </g>
            <g transform="matrix( -0.7870330810546875, -0.0185089111328125, 0, -1.14666748046875, 414.1,558.05) ">
              <use xlinkHref="#Layer1_9_FILL" />
            </g>
            <g transform="matrix( -0.7870330810546875, -0.0185089111328125, 0, -1.14666748046875, 414.1,558.05) ">
              <use xlinkHref="#Layer1_10_FILL" />
            </g>
            <g transform="matrix( -0.7870330810546875, -0.0185089111328125, 0, -1.14666748046875, 414.1,558.05) ">
              <use xlinkHref="#Layer1_11_FILL" />
            </g>
            <g transform="matrix( -0.7870330810546875, -0.0185089111328125, 0, -1.14666748046875, 414.1,558.05) ">
              <use xlinkHref="#Layer1_12_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, 0.7870330810546875, 1.14666748046875, 0, -40.45,104.85) ">
              <use xlinkHref="#Layer1_13_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, 0.7870330810546875, 1.14666748046875, 0, -40.45,104.85) ">
              <use xlinkHref="#Layer1_14_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, 0.7870330810546875, 1.14666748046875, 0, -40.45,104.85) ">
              <use xlinkHref="#Layer1_15_FILL" />
            </g>
            <g transform="matrix( 0.0185089111328125, 0.7870330810546875, 1.14666748046875, 0, -40.45,104.85) ">
              <use xlinkHref="#Layer1_16_FILL" />
            </g>
            
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="290" y="20" width="21" height="21" viewBox="0 0 32 32" style={hover===1?{fill:"#eccb0b"}:{fill:"#FFFFFF"}} xmlSpace="preserve">
            <g>
              <path d="M17.962,24.725l1.806,0.096v2.531h-7.534v-2.406l1.045-0.094c0.568-0.063,0.916-0.254,0.916-1.014v-8.801
                c0-0.699-0.188-0.92-0.791-0.92l-1.106-0.062v-2.626h5.666L17.962,24.725L17.962,24.725z M15.747,4.648
                c1.394,0,2.405,1.047,2.405,2.374c0,1.331-1.014,2.313-2.438,2.313c-1.454,0-2.404-0.982-2.404-2.313
                C13.31,5.695,14.26,4.648,15.747,4.648z M16,32C7.178,32,0,24.822,0,16S7.178,0,16,0c8.82,0,16,7.178,16,16S24.82,32,16,32z M16,3
                C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z"/>
            </g>
            </svg>
            <Mark cx="382" cy="145" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(10)} style={hover?{display:"none"}:{}}/>
            <Mark cx="392" cy="348" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(9)} style={hover?{display:"none"}:{}}/>
            <Mark cx="290" cy="318" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(8)} style={hover?{display:"none"}:{}}/>
            <Mark cx="132" cy="324" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(7)} style={hover?{display:"none"}:{}}/>
            <Mark cx="282" cy="363" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(6)} style={hover?{display:"none"}:{}}/>
            <Mark cx="212" cy="400" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(5)} style={hover?{display:"none"}:{}}/>
            <Mark cx="354" cy="294" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(4)} style={hover?{display:"none"}:{}}/>
            <Mark cx="162" cy="290" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(3)} style={hover?{display:"none"}:{}}/>
            <Mark cx="366" cy="214" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(2)} style={hover?{display:"none"}:{}}/>
            <Mark cx="302" cy="274" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(1)} style={hover?{display:"none"}:{}}/>
            <Mark cx="302" cy="236" r="10" fill="rgba(82, 122, 184, 0.945)" onMouseOver={()=>setParty(0)} style={hover?{display:"none"}:{}}/>

            
            <Party10 tooltip={'זהות'} x={350} y={71} className={`party-icon ${!hover && party===10?'':'hide'}`}/>
            <Party9 tooltip={'עוצמה יהודית'} x={360} y={274} className={`party-icon ${!hover && party===9?'':'hide'}`}/>
            <Party8 tooltip={'יהדות התורה'} x={258} y={244} className={`party-icon ${!hover && party===8?'':'hide'}`}/>
            <Party7 tooltip={'הרשימה המשותפת'} x={100} y={250} className={`party-icon ${!hover && party===7?'':'hide'}`}/>
            <Party6 tooltip={'ש"ס'} x={250} y={289} className={`party-icon ${!hover && party===6?'':'hide'}`}/>
            <Party5 tooltip={'העבודה'} x={180} y={326} className={`party-icon ${!hover && party===5?'':'hide'}`}/>
            <Party4 tooltip={'ישראל ביתנו'} x={322} y={220} className={`party-icon ${!hover && party===4?'':'hide'}`}/>
            <Party3 tooltip={'המחנה הדמוקרטי'} x={130} y={216} className={`party-icon ${!hover && party===3?'':'hide'}`}/>
            <Party2 tooltip={'ימינה'} x={334} y={140} className={`party-icon ${!hover && party===2?'':'hide'}`}/>
            <Party1 tooltip={'כחול לבן'} x={270} y={200} className={`party-icon ${!hover && party===1?'':'hide'}`}/>
            <Party0 tooltip={'הליכוד'} width={800} x={270} y={162} className={`party-icon ${!hover && party===0?'':'hide'}`}/>

            
            <circle style={party===11 && !hover && props.resultParty===11?{}:{display:"none"}} 
            cx={188} cy={147} r={80} fill="transparent" onMouseOver={()=>setParty(11)}/>
            <BirdSvg className={`click spin ${props.resultParty!==11?'not-shown':''} ${hover?'hide':''}`} width={82} height={390}
            x={131} y={-115} fill={"rgb(240, 184, 0)"}
            onMouseOver={()=>setParty(11)}
            onClick={()=>{window.open('https://www.facebook.com/groups/1474333926143050/','_blank')}}/>
            <g style={party===11 && !hover && props.resultParty===11?{}:{display:"none"}}>
             <rect x={105} y={199} width={160} height={38} className="party-tooltip-rect-back"></rect>
             <rect x={105} y={199} width={160} height={38} className="party-tooltip-rect-front"></rect>
             <text textAnchor="middle" className={`party-tooltip`} clipPath="url(#Mask_Mask_3)" 
               writingMode="lr"><tspan x="185" y="225" baselineShift="0%" fontSize={24}  xmlSpace="preserve">{'חופש לכולנו'}</tspan></text>
            </g>
            


            <circle cx="300.5" cy="30.5" r="10.6" fill="transparent" style={{cursor:"help"}}  onMouseEnter={()=>setHover(1)} onMouseLeave={()=>{setHover(false)}}/>
            <g transform="matrix( 1, 0, 0, 1, 225.55,16.95) " onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(false)}>
              <text className="result-text" style={hover===1?{fill:"#eccb0b"}:{fill:"#FFFFFF"}}  clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="62" y="25.75" baselineShift="0%" fontSize={24}  xmlSpace="preserve">{'ליברלי'}</tspan></text>
            </g>
            <g transform="matrix( 1, 0, 0, 1, 230.3,468) " onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(false)}>
              <text className="result-text" clipPath="url(#Mask_Mask_2)" writingMode="lr"><tspan x="74" y="23.75" baselineShift="0%" fontSize={24}  xmlSpace="preserve">{'סמכותני'}</tspan></text>
            </g>
            <g transform="matrix( 0.01385498046875, -0.9998779296875, 0.9998779296875, 0.01185498046875, 14.8,302.6) " onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover(false)}>
              <text className="result-text" clipPath="url(#Mask_Mask_4)" writingMode="lr"><tspan x="64" y="26.75" baselineShift="0%" fontSize={24}  xmlSpace="preserve">{'יוני'}</tspan></text>
            </g>
            <g transform="matrix( 0.0124053955078125, 0.999908447265625, -0.999908447265625, 0.0124053955078125, 503.25,211.2) " onMouseEnter={()=>setHover(4)} onMouseLeave={()=>setHover(false)}>
              <text className="result-text" clipPath="url(#Mask_Mask_3)" writingMode="lr"><tspan x="62" y="25.75" baselineShift="0%" fontSize={24}  xmlSpace="preserve">{'ניצי'}</tspan></text>
            </g>
            <g className="inner-circle-text" style={hover===1?{}:{display:"none"}}>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="110" baselineShift="0%" xmlSpace="preserve">{'ליברלים מאמינים'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="140" baselineShift="0%" xmlSpace="preserve">{'בחירות הפרט, ובמינימום'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="170" baselineShift="0%" xmlSpace="preserve">{'התערבות ממשלתית.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="200" baselineShift="0%" xmlSpace="preserve">{'בראייה הליברלית המדינה'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="230" baselineShift="0%" xmlSpace="preserve">{'אינה צריכה להתערב בדת, בכלכלה,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="260" baselineShift="0%" xmlSpace="preserve">{'וביחסים מרצון בין אנשים בוגרים.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="290" baselineShift="0%" xmlSpace="preserve">{'ליברלים מאמינים שאינטראקציות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="320" baselineShift="0%" xmlSpace="preserve">{'וולנטריות בין אנשים הן הדרך'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="350" baselineShift="0%" xmlSpace="preserve">{'הטובה ביותר למקסם את הרווחה'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="380" baselineShift="0%" xmlSpace="preserve">{'של החברה ככלל ושל'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="410" baselineShift="0%" xmlSpace="preserve">{'החלשים ביותר בפרט.'}</tspan></text>
            </g>
            <g className="inner-circle-text" style={hover===2?{}:{display:"none"}}>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="125" baselineShift="0%" xmlSpace="preserve">{'סמכותנים מאמינים'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="155" baselineShift="0%" xmlSpace="preserve">{'בזכויות חברתיות, ובהתערבות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="185" baselineShift="0%" xmlSpace="preserve">{'נרחבת של הממשלה.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="215" baselineShift="0%" xmlSpace="preserve">{'בראייה הסמכותנית, אינטראקציות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="245" baselineShift="0%" xmlSpace="preserve">{'וולנטריות בלבד עלולות לפגוע'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="275" baselineShift="0%" xmlSpace="preserve">{'בחלשים ביותר בחברה ובהתקדמות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="305" baselineShift="0%" xmlSpace="preserve">{'החברתית ככלל,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="335" baselineShift="0%" xmlSpace="preserve">{'ולכן ראוי להקריב חלק מזכויות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="365" baselineShift="0%" xmlSpace="preserve">{'הפרט כדי להשיג'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="395" baselineShift="0%" xmlSpace="preserve">{'תועלת חברתית.'}</tspan></text>
            </g>
            <g className="inner-circle-text" style={hover===3?{}:{display:"none"}}>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="125" baselineShift="0%" xmlSpace="preserve">{'אנשים בעלי עמדות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="155" baselineShift="0%" xmlSpace="preserve">{'יוניות מאמינים שמשא ומתן,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="185" baselineShift="0%" xmlSpace="preserve">{'הידברות והימנעות משלטון על '}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="215" baselineShift="0%" xmlSpace="preserve">{'אוכלוסיה זרה הן הדרכים הטובות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="245" baselineShift="0%" xmlSpace="preserve">{'והיעילות ביותר להשיג ביטחון.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="275" baselineShift="0%" xmlSpace="preserve">{'הם מתנגדים לשליטה הישראלית'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="305" baselineShift="0%" xmlSpace="preserve">{'והימנעות מפגיעה באוכלוסיה אזרחית.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="335" baselineShift="0%" xmlSpace="preserve">{'יוניים מעדיפים להימנע מפעולות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="365" baselineShift="0%" xmlSpace="preserve">{'צבאיות אלא כשיש בהן'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="395" baselineShift="0%" xmlSpace="preserve">{'צורך ברור וחד משמעי.'}</tspan></text>
            </g>
            <g className="inner-circle-text" style={hover===4?{}:{display:"none"}}>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="125" baselineShift="0%" xmlSpace="preserve">{'אנשים בעלי עמדות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="155" baselineShift="0%" xmlSpace="preserve">{'ניציות מאמינים שכוח והרתעה'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="185" baselineShift="0%" xmlSpace="preserve">{'הן הדרכים הטובות והיעילות'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="215" baselineShift="0%" xmlSpace="preserve">{'ביותר להשיג ביטחון. הם תומכים'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="245" baselineShift="0%" xmlSpace="preserve">{'בשליטה הישראלית בשטחים,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="275" baselineShift="0%" xmlSpace="preserve">{'ומאמינים בתגובה צבאית חזקה,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="305" baselineShift="0%" xmlSpace="preserve">{'לכל איום קטן או גדול.'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="335" baselineShift="0%" xmlSpace="preserve">{'ניצים מאמינים שיציאה משטחים'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="365" baselineShift="0%" xmlSpace="preserve">{'היא סכנה בטחונית,'}</tspan></text>
              <text textAnchor="middle" clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="260" y="395" baselineShift="0%" xmlSpace="preserve">{'ואסור להסכים לה.'}</tspan></text>
            </g>
          </g>
        </svg>
  )}

export default Compass