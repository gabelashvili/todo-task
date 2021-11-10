import AddProduct from '../AddProduct';
import NewUser from '../NewUser';
import { Div } from './styles';

const Content = ({ selectedStep }) => {
  console.log('con');
  return (
    <Div>
      {selectedStep === 1 && <NewUser />}
      {selectedStep === 2 && <AddProduct />}
    </Div>
  );
};

export default Content;
