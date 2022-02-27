import { useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from './../data'
import Product from './Product'
const Conatiner = styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
`

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Conatiner>
      {popularProducts.map((item) => (

        <Product item={item} key={item.id} />

      ))}
    </Conatiner>
  );
}

export default Products