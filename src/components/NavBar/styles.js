import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    height: 100%;
    color: black;
    justify-contents: center;
    display: flex;
    padding: 50px 15px;
    box-sizing: border-box;
`;

export const Ul = styled.ul`
    width: 100%;
`;

export const Step = styled.div`
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;
    color: black;
    transition: all 0.3s;
   &:after {
        position: absolute;
        content: "";
        top: 105%;
        left: 50%;
        height: 50px;
        width: 2px;
        background: #ebebeb;
  }
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #999;
    font-size: 14px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 55px;
    transition: all 0.3s;
    color: ${({ active }) => (active ? '#4966b1' : '#999')}; 
    & > ${Step} {
        background: ${({ active }) => (active ? '#4966b1' : '#ebebeb')}; 
        color: ${({ active }) => active && 'white'}; 
    }
    &:last-child ${Step} {
        &:after {
            display: none;
      }
    }
`;
