const calAge = (date) => new Date(Date.now() - new Date(date).getTime()).getFullYear() - 1970;
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
  birthDate: ({ value, required }) => {
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    } if (required && calAge(value) < 18) {
      return {
        isValid: false,
        msg: 'Min Age 18',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
  productName: ({ value, required }) => {
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
  productPrice: ({ value, required }) => {
    if (required && !value) {
      return {
        isValid: false,
        msg: 'This field is required',
      };
    }
    return {
      isValid: true,
      msg: '',
    };
  },
};
