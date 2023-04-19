import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
      New sale now. Dont get late for the last prices


    </Container>
  )
}

export default Announcement

