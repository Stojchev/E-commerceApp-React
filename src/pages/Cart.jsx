import Announcment from '../components/Announcment'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { useState } from 'react'
const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300px;
text-align: center;
`
// TOP!!!
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
 padding: 10px;
 cursor: pointer;
font-weight: 300;
border:${props => props.type === 'filled' && 'none'};
background-color:${props => props.type === 'filled' ? "black" : "transparent"};
color:${props => props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`


// BOTTOM!!!
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex:3;
`
//PRODUCT PART!!!
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
  flex:2;
  display: flex;
`
const Image = styled.img`
width: 400px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
`
const ProductName = styled.span`
margin-bottom: 20px;
`
const ProductID = styled.span`
margin-bottom: 20px;
`
const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
margin-bottom: 20px;
background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmmountCotainer= styled.div`
display: flex;
align-items: center;
`
const ProductAmmount= styled.div`
font-size: 30px;
margin: 5px;
`
const ProductPrice= styled.div`
margin-top: 20px;
font-size:30px;
font-weight: 600;
`
const Hr = styled.hr`
height:1px;
background-color: #eee;
border: none;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius: 10px;
padding:20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==='total' && '700'};
`
const SummaryTitleText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  color:white;
  font-weight: 800;
background-color: black;
`
const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [countOne,setCountOne]=useState(1)
  const [countTwo,setCountTwo]=useState(1)
  const [PriceOne]=useState(59.99)
  const [PriceTwo]=useState(79.99)

  const HandleClick=(e,f)=>{

    if(f==='decrement' 
    && e==='first' 
    && countOne==0
    )return;
    if(f==='decrement' 
    && e==='second' 
    && countTwo===0
    )return;

    if(e==='first'){
      if(f==='increment')
        setCountOne(countOne+1)
      else setCountOne(countOne-1)
    }
    else{
      if(f==='increment')
      setCountTwo(countTwo+1)
    else setCountTwo(countTwo-1)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Your Bag
        </Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag(2)
            </TopText>
            <TopText>
              Your Wishlis(0)
            </TopText>
          </TopTexts>
          <TopButton type='filled'>Check out Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://www.fashiongroup.com.mk/files/thumbs/files/images/slike_proizvoda/thumbs_600/27091086-43_600_840px.jpg'/>
                <Details>
                  <ProductName><b>Product:</b> Guess Jacket</ProductName>
                  <ProductID><b>ID:</b> 221319 </ProductID>
                  <ProductColor color='green'/>
                  <ProductSize><b>Size:</b>M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountCotainer>
                  <Remove onClick={()=>HandleClick('first','decrement')}/>
                  <ProductAmmount>
                    {countOne}
                  </ProductAmmount>
                  <Add onClick={()=>HandleClick('first','increment')}/>
                </ProductAmmountCotainer>
                <ProductPrice>
                  $ {Math.round((PriceOne*countOne) * 100) / 100}
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src='https://www.fashiongroup.com.mk/files/thumbs/files/images/slike_proizvoda/thumbs_600/V2RL00WO06Y-F9DN_600_840px.jpg'/>
                <Details>
                  <ProductName><b>Product:</b> Guess Trainers</ProductName>
                  <ProductID><b>ID:</b> 22222 </ProductID>
                  <ProductColor color='#e3e3e3'/>
                  <ProductSize><b>Size:</b>S</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountCotainer>
                  <Remove onClick={()=>HandleClick('second','decrement')}/>
                  <ProductAmmount>
                    {countTwo}
                  </ProductAmmount>
                  <Add onClick={()=>HandleClick('second','increment')}/>
                </ProductAmmountCotainer>
                <ProductPrice>
                  $ {Math.round((PriceTwo*countTwo) * 100) / 100}
                </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>
              Order Summary
            </SummaryTitle>
            <SummaryItem>
              <SummaryTitleText>
                Subtotal:
              </SummaryTitleText>
              <SummaryTitleText>
                $ {PriceOne*countOne + PriceTwo*countTwo}
              </SummaryTitleText>
            </SummaryItem>
            <SummaryItem>
              <SummaryTitleText>
                Estimated Shipping
              </SummaryTitleText>
              <SummaryTitleText>
                + $50 
              </SummaryTitleText>
            </SummaryItem>
            <SummaryItem>
              <SummaryTitleText>
                Shipping Discount
              </SummaryTitleText>
              <SummaryTitleText>
                - $23
              </SummaryTitleText>
            </SummaryItem>
            <SummaryItem  type='total'>
              <SummaryTitleText >
                Total
              </SummaryTitleText>
              <SummaryItemPrice>
                $ {
                Math.round((PriceOne*countOne + PriceTwo*countTwo +50 -23) * 100) / 100
                } 
              </SummaryItemPrice>
            </SummaryItem>
            <Button>
              Check out now!
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart