import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
width:100vw;
height: 100vh;
background:  linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url('https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') ;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content:center;
align-items: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
border-radius: 20px;
`
const Form = styled.form`
  display: flex;
  flex-wrap:wrap;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 25px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: #ededed;
cursor: pointer;

`
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Create Account
        </Title>
        <Form>
          <Input placeholder="name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY and POLICY</b>
          </Agreement>
          <Button>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register