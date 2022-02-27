import { FavoriteBorder, FavoriteTwoTone, ImageSearch, KeyboardArrowLeft, Search, SearchSharp, SearchTwoTone, ShoppingCart, ShoppingCartOutlined, ShoppingCartTwoTone } from '@material-ui/icons'
import styled from 'styled-components'

const Info= styled.div`
  opacity: 0;
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  z-index:3;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease ;
  cursor:pointer;
`

const Conatiner = styled.div`
  flex:1;
  margin:5px;
  height: 350px;
  min-width: 400px;
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle= styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image= styled.img`
  height: 75%;
  z-index:2;
`
const Icon= styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin:10px;
  transition: all 0.5s ease;
  &:hover{
    
    transform: scale(1.1)
  }

`
const Product = ({item}) => {
  return (
    <Conatiner>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{height:'25px',width:'25px'}}/>
        </Icon>
        <Icon>
          <SearchSharp style={{height:'25px',width:'25px'}}/>
        </Icon>
        <Icon>
          <FavoriteBorder style={{height:'25px',width:'25px'}}/>
        </Icon>
      </Info>
    </Conatiner>
  )
}

export default Product