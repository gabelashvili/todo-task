import styled from 'styled-components';

const Div = styled.div`
    display: block;
    position: relative;
    & >label:before {
        content:'';
        -webkit-appearance: none;
        background-color: transparent;
        border: 2px solid #0079bf;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        padding: 10px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
    };
    & input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 9px;
        width: 6px;
        height: 14px;
        border: solid #0079bf;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    };
`;
const Input = styled.input`
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
`;
const Label = styled.label`
    position: relative;
    cursor: pointer;
`;

const Desc = styled.p`
    font-size: 14px;
    margin-top: 5px;
    opacity: 0.7;
`;

const Checkbox = ({ label }) => (
  <Div>
    <Input id="checkbox" type="checkbox" />
    <Label for="checkbox">{label}</Label>
    <Desc>Enable if you want to hide your email.</Desc>
  </Div>
);

export default Checkbox;
