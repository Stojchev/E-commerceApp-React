import {css} from 'styled-components'

export const responsive2 = (props) =>{
    return css`
       @media only screen and (max-width:740px){
        ${props}
      }
    `;
}
