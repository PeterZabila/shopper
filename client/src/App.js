import Home from './pages/Home';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`

const App = () => {
  return (
  <Container>
    <Home/>
  </Container>
  )
};

export default App
