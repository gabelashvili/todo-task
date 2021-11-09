import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    & :nth-child(2) {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-100%,-50%);
    };
    & :nth-child(3) {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(50%,-50%);
    }
`;
export const Input = styled.input`
    border-radius: 5px;
    width: 100%;
    display: block;
    ${({ isError, isValid }) => {
    if (isError) {
      return 'border: 1px solid red';
    }
    if (isValid) {
      return 'border: 1px solid green';
    }
    return 'border: 1px solid #ebebeb;';
  }};
    height: 50px;
    box-sizing: border-box;
    padding: 0 50px 0 40px;
    color: #222;
    font-weight: bold;
    &:focus {
        outline: none;
    };
`;

export const ErrorTextWrapper = styled.div`
    position: absolute;
    width: 100%;
    transform: translateY(20%);
`;

export const ErrorText = styled.div`
    position: relative;
    border-radius: 5px;
    border: 1px solid red;
    width: 100%;
    padding: 5px 20px;
    box-sizing: border-box;
    color: red;
    font-size: 13px;
`;

export const TriangleWrapper = styled.div`
   position: absolute;
   top: 0;
   transform: rotate(0deg) translate(100%, -80%);
`;

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-right: 13px solid red;
    position:relative;
    transform: rotate(90deg);
    &::before {
        content:'';
        width: 0; 
        height: 0; 
        border-top: 21px solid transparent;
        border-bottom: 21px solid transparent;
        border-right: 21px solid white;  
        position:absolute;
        top:-21px;
        left:1px;
    }
`;
