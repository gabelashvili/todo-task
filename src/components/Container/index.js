import { useState } from 'react';
import styled from 'styled-components';
import Content from '../Content';
import NavBar from '../NavBar';

const Wrapper = styled.div`
    height: 80vh;
    background: white;
    margin: auto;
    width: 80%;
    display: grid;
    grid-template-columns: 1.5fr 5fr;
`;

const Container = () => {
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <Wrapper>
      <NavBar selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
      <Content selectedStep={selectedStep} />
    </Wrapper>
  );
};

export default Container;
