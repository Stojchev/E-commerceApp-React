import { useEffect } from "react"
import styled from "styled-components"
import {categories} from '../data'
import CategoryItem from "./CategoryItem"
import React from "react"
const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    width: 94vw;
    margin:0 auto;
    flex:1;
  `


const Categories = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container>
        {categories.map((item)=>(
          <CategoryItem item={item} key={item.id}/>
        ))}
      </Container>
    </div>
  )
}

export default Categories
