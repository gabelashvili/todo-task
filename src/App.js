import styled from 'styled-components';
import Container from './components/Container';

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <Div>
      <Container />
    </Div>
  );
}

export default App;
