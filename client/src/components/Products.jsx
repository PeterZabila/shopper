import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat? `http://localhost:5000/api/products?category=${cat}` : 'http://localhost:5000/api/products')
      } catch (err) {
        console.log(err)
      }
    }
    getProducts();
  }, [cat])

  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
