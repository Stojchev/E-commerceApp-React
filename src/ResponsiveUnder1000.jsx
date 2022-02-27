import {css} from 'styled-components'

export const responsive1 = (props) =>{
    return css`
       @media only screen and (max-width:1000px){
        ${props}
      }
    `;
}
