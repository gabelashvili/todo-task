export const checkInputs = {
  firstName: ({ value, required }) => {
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    } if (required && value && value.length < 3) {
      return {
        isValid: false,
        msg: 'Min length 3 characters.',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
  lastName: ({ value, required }) => {
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    } if (required && value && value.length < 3) {
      return {
        isValid: false,
        msg: 'Min length 3 characters.',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
  email: ({ value, required }) => {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    } if (required && value && !regex.test(value)) {
      return {
        isValid: false,
        msg: 'Email is incorrect.',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
};