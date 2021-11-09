import {
  Div, Ul, Li, Step,
} from './styles';

const NavBar = ({ selectedStep, setSelectedStep }) => (
  <Div>
    <Ul>
      <Li onClick={() => setSelectedStep(1)} active={selectedStep === 1}>
        <Step>1 </Step>
        Add New User
      </Li>
      <Li onClick={() => setSelectedStep(2)} active={selectedStep === 2}>
        <Step>2 </Step>
        Content
      </Li>
    </Ul>
  </Div>
);

export default NavBar;
