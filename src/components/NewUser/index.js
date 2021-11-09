/* eslint-disable no-unused-vars */
import { faUser, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { useState } from 'react';
import TextInput from '../Inputs/TextInput';
import {
  Div, Title, Desc, Form,
} from './styles';
import { checkInputs } from '../../helpers/checkInputs';

const NewUser = () => {
  const [values, setValues] = useState(
    {
      firstName: {
        required: true,
        value: null,
        isFocused: false,
      },
      lastName: {
        required: true,
        value: null,
        isFocused: false,
      },
      email: {
        required: true,
        value: null,
        isFocused: false,
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

  return (
    <Div>
      <Title>Add New User</Title>
      <Desc>Please Fill All Required FIelds</Desc>
      <Form>
        <TextInput
          icon={faUser}
          value={values.firstName.value}
          onChange={(e) => handleInputChange(e, 'firstName')}
          isValid={checkInputs.firstName(values.firstName).isValid}
          errorMsg={checkInputs.firstName(values.firstName).msg}
          onFocus={() => handleInputFocus('firstName')}
          isFocused={values.firstName.isFocused}
          placeHolder="First name"
        />
        <TextInput
          icon={faUser}
          value={values.lastName.value}
          onChange={(e) => handleInputChange(e, 'lastName')}
          isValid={checkInputs.lastName(values.lastName).isValid}
          errorMsg={checkInputs.lastName(values.lastName).msg}
          onFocus={() => handleInputFocus('lastName')}
          isFocused={values.lastName.isFocused}
          placeHolder="Last name"
        />
        <TextInput
          icon={faEnvelope}
          value={values.email.value}
          onChange={(e) => handleInputChange(e, 'email')}
          isValid={checkInputs.email(values.email).isValid}
          errorMsg={checkInputs.email(values.email).msg}
          onFocus={() => handleInputFocus('email')}
          isFocused={values.email.isFocused}
          placeHolder="E-mail"
        />
      </Form>
    </Div>
  );
};

export default NewUser;
