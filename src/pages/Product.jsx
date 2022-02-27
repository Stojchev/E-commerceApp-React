import { AddCircleOutline,  RemoveCircleOutline } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImageContainer = styled.div`
flex:1;
`
const InfoCotainer = styled.div`
flex:1;
padding: 0px 50px;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const Title = styled.h1`
font-weight: 200;
`
const Price = styled.p`
font-weight:100;
font-size: 50px;
`
const Description = styled.p`
margin: 30px 0px;
`

const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
`
const FilterColor = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
margin-left:10px;
background-color: ${props => props.color};
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
font-size: 20px;
padding: 5px;
`
const FilterSizeOption = styled.option`
font-size: 20px;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:30% ;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
margin:5px;
`
const Button = styled.button`
padding: 15px;
border: 1px solid black;
background-color: white;
cursor: pointer;
&:hover{
    background-color: #ededed;
  }
`



const Product = () => {


  const [count, setCount] = useState(1)

  const clickHandler = (e) => {
    if (count === 0 && e === 'decrement')
      return

    if (e === 'increment')
      setCount(count + 1)
    else setCount(count - 1)
  }

  return (
    <Container>
      <NavBar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <Image src='https://static.zara.net/photos///2022/V/0/1/p/2730/101/330/2/w/613/2730101330_1_1_1.jpg?ts=1645693235831' />
        </ImageContainer>
        <InfoCotainer>
          <Title>
            Guess Jumpsuit
          </Title>
          <Description>
            Curabitur rutrum ut lacus a accumsan.
            Morbi vitae augue et massa efficitur varius
            eu laoreet risus. Nullam quis mauris et urna
            posuere sagittis. Ut vel metus sit amet nisl
            blandit tempus sed vel augue. Praesent at libero
            vehicula, imperdiet velit ut, fringilla nibh.
            Integer euismod, ante ac ornare tincidunt,
            magna urna tempor eros, id feugiat erat mi
            sed nisi. Pellentesque lorem libero, facilisis
            eu feugiat eu, pellentesque sed massa.
          </Description>
          <Price>
            $20
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='darkblue' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutline onClick={() => clickHandler('decrement')} />
              <Amount>{count}</Amount>
              <AddCircleOutline onClick={() => clickHandler('increment')} />
            </AmountContainer>
            <Button>Add to Card</Button>
          </AddContainer>
        </InfoCotainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product