import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
  width: 100%;
`
const Title = styled.h1`
  color:white;
  margin-bottom:20px;
  font-size:40px;
  font-weight:800;
`
const Button = styled.button`
  border:none;
  padding:10px;
  background-color:white;
  color:gray;
  cursor:pointer;
  font-weight:400;
`
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  `
const Info = styled.div`
  position:absolute;
  font-size:50px;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

`



const CategoryItem = ({item}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>
          {item.title}
        </Title>
        <Button>
          <Link to='/products'>
          Shop Now
          </Link>
        </Button>
      </Info>
    </Container>
  )
}

export default CategoryItem