/* eslint-disable no-unused-vars */
import { faFile, faDollarSign, faCalculator } from '@fortawesome/fontawesome-free-solid';
import { useState } from 'react';
import TextInput from '../Inputs/TextInput';
import {
  Div, Title, Desc, Form, NameWrapper, Button,
} from './styles';
import { checkInputs } from '../../helpers/checkInputs';
import Textarea from '../Inputs/Textarea';
import Checkbox from '../Inputs/Checkbox';

const NewUser = () => {
  const [values, setValues] = useState(
    {
      productName: {
        required: true,
        value: null,
        isFocused: false,
      },
      productPrice: {
        required: true,
        value: null,
        isFocused: false,
      },
      productQuantity: {
        value: null,
      },
    },
  );

  const handleInputChange = (e, inputName) => {
    setValues({
      ...values,
      [inputName]: {
        ...values[inputName],
        value: e.target.value.trim().length > 0 ? e.target.value : null,
      },
    });
  };

  const handleInputFocus = (inputName) => {
    setValues({
      ...values,
      [inputName]: {
        ...values[inputName],
        isFocused: true,
      },
    });
  };

  const handleSave = () => {
    let isError = false;
    const data = Object.keys(values).reduce((acc, cur) => {
      if (checkInputs[cur] && !checkInputs[cur](values[cur]).isValid) {
        isError = true;
      }
      return {
        ...acc,
        [cur]: { ...values[cur], isFocused: values[cur].required },
      };
    }, {});
    setValues(data);
    console.log(isError);
  };

  return (
    <Div>
      <Title>Add New Product</Title>
      <Desc>Please Fill The FIelds</Desc>
      <Form>
        <TextInput
          icon={faFile}
          value={values.productName.value}
          onChange={(e) => handleInputChange(e, 'productName')}
          isValid={checkInputs.productName(values.productName).isValid}
          errorMsg={checkInputs.productName(values.productName).msg}
          onFocus={() => handleInputFocus('productName')}
          isFocused={values.productName.isFocused}
          placeHolder="Product Name"
        />
        <TextInput
          type="number"
          icon={faDollarSign}
          value={values.productPrice.value}
          onChange={(e) => handleInputChange(e, 'productPrice')}
          isValid={checkInputs.productPrice(values.productPrice).isValid}
          errorMsg={checkInputs.productPrice(values.productPrice).msg}
          onFocus={() => handleInputFocus('productPrice')}
          isFocused={values.productPrice.isFocused}
          placeHolder="Product Price"
        />
        <TextInput
          type="number"
          icon={faCalculator}
          value={values.productQuantity.value}
          onChange={(e) => handleInputChange(e, 'productQuantity')}
          placeHolder="Product Qunatity"
        />
        <Button type="button" onClick={handleSave}>Add Product</Button>
      </Form>
    </Div>
  );
};

export default NewUser;
