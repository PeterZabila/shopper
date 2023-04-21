import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    color: gray;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </Link>
      
    </Container>
  )
}

export default CategoryItem
