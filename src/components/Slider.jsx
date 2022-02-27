import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { setState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { sliderItems } from '../data'
import { responsive1 } from '../ResponsiveUnder1000'
const Container = styled.div`
  height:100vh;
  display:flex;
  width: 100%;
  position:relative;
  overflow:hidden;
  ${responsive1({height:'150vh'})}
`

const Wrapper = styled.div`
  height:100%;
  margin-top:50px;
  display:flex;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  transform:translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100%;
    background-color:#${props => props.bg};
    ${responsive1({flexDirection:'column'})}
  `
const ImageContainer = styled.div`
    flex:1;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    ${responsive1({height:'60%'})}
  `
const InfoContainer = styled.div`
    flex:1;
    padding:50px;
    text-align:left;
    margin:auto 0;
    ${responsive1({padding:'20px'})}
  `

const Image = styled.img`
  height:80%;
`

const Title = styled.h1`
  font-size:70px;
`
const Description = styled.p`
  margin:50px 0;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button = styled.button`
  padding:10px;
  font-size:25px;
  background-color:transparent;
  cursor:pointer;
`

const Arrow = styled.div`
  width:80px;
  height:80px;
  background-color:#fff7f7;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left:${props => props.direction === 'left' && "10px"};
  right:${props => props.direction === 'right' && "10px"};
  margin:auto;
  cursor:pointer;
  opacity:0.8;
  z-index:2;
`



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'right') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Link to='/products'>
                  <Button>Shop Now</Button>
                </Link>
              </InfoContainer>
            </Slide>
          ))
        }

      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlined onClick={() => handleClick('left')} />
      </Arrow>
    </Container>
  )
}

export default Slider
