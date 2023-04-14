import React from 'react';
import styled from 'styled-components';

import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
const Container = styled.div`
  height: 60px;

`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
`
const Logo = styled.div`
  font-weight: bold;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightrgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const MenuItem = styled.div`
  font-size: 14px;
  cusor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ENG</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Center><Logo>PZabila.</Logo></Center>
        <Right>
          <MenuItem>RGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
