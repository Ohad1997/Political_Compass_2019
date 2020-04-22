import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Size,{useWindowSize} from '../Globals'


const BackgroundImage=(props)=>{
    const requireHandler= (image,device)=>{
        try{
            return require(`../../Assets/${image}_${device}.jpg`)
        }catch{
            return false
        }
      }
    return(
    <div key={props.image} className={`background-image ${props.className?props.className:''}`} css={css`
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${requireHandler(props.image,'desktop')}, sizingMethod='scale');
            background-image: url(${requireHandler(props.image,'desktop')});
            @media (min-width:${Size.maxSupportWidth}px),(min-height:${Size.maxSupportHeight}px) {
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${requireHandler(props.image,'mobile')}, sizingMethod='scale');
                background-image: url(${requireHandler(props.image,'desktop')});
                background-size:cover;
            }
            @media (max-width:${Size.tablet}px) {
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${requireHandler(props.image,'mobile')}, sizingMethod='scale');
                background-image: url(${requireHandler(props.image,'tablet')});
            }
            @media (max-width:${Size.tablet}px) and (min-height:${Size.maxSupportHeight}) {
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${requireHandler(props.image,'mobile')}, sizingMethod='scale');
                background-image: url(${requireHandler(props.image,'tablet')});
                background-size:100% 100%;
            }
            @media (max-width:${Size.mobile}px) {
                filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${requireHandler(props.image,'mobile')}, sizingMethod='scale');
                background-image: url(${requireHandler(props.image,'mobile')});
                background-size:100% 100%;
            }
        `}>
          {props.children}
        </div>
    )
  }

  export default BackgroundImage