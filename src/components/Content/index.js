import NewUser from '../NewUser';
import { Div } from './styles';

const Content = ({ selectedStep }) => {
  console.log('con');
  return (
    <Div>
      {selectedStep === 1 && <NewUser />}
    </Div>
  );
};

export default Content;
