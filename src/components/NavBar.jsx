import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { responsive1 } from '../ResponsiveUnder1000'
import { responsive2 } from '../ResponsiveUnder740'

const CartIcon=styled(ShoppingCartOutlined)`
size:2000px;
`


const Container = styled.div` 
    height: 60px;
    font-size:20px;
    ${responsive1({maxWidth:'1000px'})}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
  `

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
  `

const Language = styled.span`
    font-size:20px;
    cursor:pointer;
    ${responsive1({display:'none'})}

  `

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    padding:5px;
    align-items:center;
    margin-left:25px;
  `

const Center = styled.div`
    flex:1;
    text-align:center;
  `

const Logo = styled.h1`
    font-weight:bold;
    ${responsive2({fontSize:'25px'})}
  `

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${responsive1({fontSize:'20px'})}
  `

const Input = styled.input`
  border:none;
  ${responsive1({width:'100px'})}
`

const MenuItem = styled.div`
  cursor:pointer;
  margin-left:25px;
  font-size: 23px;
  text-decoration:none;
  ${responsive1({fontSize:'20px',marginLeft:"10px"})}
  ${responsive2({fontSize:'15px',marginLeft:"5px"})}

`
const MenuItemIcon = styled.div`
`

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
            <Link to='/'>
            <Logo>
              \LamaDrama/
              </Logo>
            </Link>
        </Center>
        <Right>
            <Link to='/register' >
            <MenuItem>
              Register
              </MenuItem>
            </Link>
            <Link to='/login'>
            <MenuItem>
              Sign in
              </MenuItem>
            </Link>
            <Link to='/cart'>
            <MenuItem>
            <MenuItemIcon>
                <CartIcon />
            </MenuItemIcon>
            </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
