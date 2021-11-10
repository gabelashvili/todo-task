import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Container from './components/Container';
import rootReducer from './store/rootReducer';

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Div>
        <Container />
      </Div>
    </Provider>
  );
}

export default App;
