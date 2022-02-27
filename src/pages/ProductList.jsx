import React from 'react'
import styled from 'styled-components'
import Announcment from '../components/Announcment'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
const Container = styled.div`
  font-size:20px;
`
const FilterContainer = styled.div`
  display:flex;
  justify-content: space-between;
`
const Title = styled.h1`
  margin: 20px;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size:20px;
  font-weight:600;
  margin-right: 20px;
`

const Select=styled.select`
padding: 10px;
margin-right: 20px;
`

const Option=styled.option`
`

const ProductList = () => {
  return (
    <Container>
      <NavBar/>
      <Announcment/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Lot to High</Option>
            <Option>High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products>

      </Products>
      <Footer>

      </Footer>
    </Container>
  )
}

export default ProductList
