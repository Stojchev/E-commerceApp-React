import { useEffect } from 'react'
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
width: 25%;
background-color: white;
border-radius: 20px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`
const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color: #ededed;
cursor: pointer;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 20px;
text-decoration:underline;
cursor: pointer;
`
const LogIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      <Wrapper>
        <Title>
          Sign in
        </Title>
        <Form>
          <Input placeholder="username or email"/>
          <Input placeholder="password"/>
          <Button>Log In</Button>
          <Link>You dont remember the password?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default LogIn
