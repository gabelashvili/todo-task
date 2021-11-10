/* eslint-disable no-unused-vars */
import { faUser, faEnvelope, faCalendar } from '@fortawesome/fontawesome-free-solid';
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
      birthDate: {
        required: true,
        value: null,
        isFocused: false,
      },
      aboutMe: {
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
      <Title>Add New User</Title>
      <Desc>Please Fill All Required FIelds</Desc>
      <Form>
        <NameWrapper>
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
        </NameWrapper>
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
        <TextInput
          type="date"
          icon={faCalendar}
          value={values.birthDate.value}
          onChange={(e) => handleInputChange(e, 'birthDate')}
          isValid={checkInputs.birthDate(values.birthDate).isValid}
          errorMsg={checkInputs.birthDate(values.birthDate).msg}
          onFocus={() => handleInputFocus('birthDate')}
          isFocused={values.birthDate.isFocused}
        />
        <Checkbox
          label="Hide Email?"
        />
        <Textarea
          placeholder="About me"
          value={values.aboutMe.value}
          onChange={(e) => handleInputChange(e, 'aboutMe')}
        />
        <Button type="button" onClick={handleSave}>Add New User</Button>
      </Form>
    </Div>
  );
};

export default NewUser;
