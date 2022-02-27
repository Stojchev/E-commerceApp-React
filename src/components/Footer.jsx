import { Facebook, Instagram, Twitter, EditLocation, Dialpad, Email } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { responsive1 } from '../ResponsiveUnder1000'
import  { responsive2 }  from '../ResponsiveUnder740'
const Container = styled.div`
  display: flex;
  background-color: #ebebeb;
  ${responsive1({fontSize:'15px'})}
  ${responsive2({flexDirection:'column'})}
`
// Left Part!!!
const Left = styled.div`
  flex:1;
  display:flex;
  flex-direction: column;
  padding:20px;
  font-size:25px;
`
const Logo = styled.h1`
  ${responsive1({fontSize:'20px'})}
`
const Description = styled.p`
  margin:30px 0px;
  font-size:20px;
  ${responsive1({fontSize:'15px'})}
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 50px;
  height:50px;
  border-radius: 50%;
  background-color: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`
// Right Part!!!
const Right = styled.div`
  padding:20px;
  ${responsive1({fontSize:'15px'})}
  ${responsive2({flex:'2',width:'40%'})}
`

// Center Part!!!
const Center = styled.div`
  padding:20px;
  ${responsive2({flex:'2',width:'50%'})}
`
const Title=styled.h3`
  margin-bottom:30px;
  ${responsive1({fontSize:'20px'})}
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type:none;
  display: flex;
  flex-wrap:wrap;
  ${responsive2({width:'40%'})}
`
const ListItem = styled.li`
  width:50%;
  ${responsive2({width:'100%'})}
  margin-bottom:10px;
  ${responsive1({fontSize:'15px'})}
`
const ContactItem = styled.p`
  margin:30px 0px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size:20px;
  ${responsive1({fontSize:'15px'})}
  ${responsive2({width:'60%'})}
`
const Payment = styled.img`
height: 50px;
`
const RightAndCenter = styled.div`
  flex:2;
  display: flex;

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>\LamaDrama/</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla tortor massa, congue ac pulvinar nec, auctor eget mi.
          Morbi imperdiet dui vitae efficitur facilisis.
          Nunc quis sodales nibh, eu fringilla ex. In vitae purus
          facilisis, sagittis eros non, ultricies mauris.
          In non sem et lorem sodales fermentum non eget orci.
          Maecenas
        </Description>
        <SocialContainer>
          <SocialIcon color='3b5998'>
            <Facebook style={{ height: '25px', color: 'white' }}/>
          </SocialIcon>
          <SocialIcon color='dd2a7b'>
            <Instagram style={{ height: '25px', color: 'white' }} />
          </SocialIcon>
          <SocialIcon color='00acee'>
            <Twitter style={{ height: '25px', color: 'white' }}/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <RightAndCenter>
      <Center>
        <Title>
          Useful Links
        </Title>
        <List>
          <ListItem>
            Home
          </ListItem>
          <ListItem>
            Cart
          </ListItem>
          <ListItem>
            Man Fashion
          </ListItem>
          <ListItem>
            Woman Fashion
          </ListItem>
          <ListItem>
            Acessories
          </ListItem>
          <ListItem>
            My account
          </ListItem>
          <ListItem>
            Order Tracking
          </ListItem>
          <ListItem>
            Whishlist
          </ListItem>
          <ListItem>
            Terms
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Dialpad style={{marginRight:"10px"}}/>
          +(269) 270-3193
        </ContactItem>
        <ContactItem>
          <EditLocation  style={{marginRight:"10px"}}/>
          Kalamazoo, Michigan(MI), 49006
        </ContactItem>
        <ContactItem>
          <Email  style={{marginRight:"10px"}}/>
          contactDramaLama@gmail.com
        </ContactItem>
        <Payment src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFR8wbINyi5JFz2iLqBESvb1Q8uELsPnYN5C41t_fCh0hJLceTR5FHVsIuVMpSomkig&usqp=CAU'/>
      </Right>
      </RightAndCenter>
    </Container>
  )
}

export default Footer
