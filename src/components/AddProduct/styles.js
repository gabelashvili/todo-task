import styled from 'styled-components';

export const Div = styled.div`
    padding: 50px 20px;
`;

export const Title = styled.h2`
    line-height: 1.6;
    color: #222;
`;

export const Desc = styled.p`
    color: #555;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 50px;
`;

export const Form = styled.form`
    display: grid;
    grid-row-gap: 35px;
`;

export const NameWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
    width: 100%:
`;

export const Button = styled.button`
    width: 140px;
    height: 50px;
    color: #fff;
    background: #4966b1;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    overflow-y: scroll;
`;

export const Thead = styled.thead`
    background-color: #95A5A6;
`;

export const Tr = styled.tr`
    text-align: left;
    box-shadow: 0px 0px 9px 0px rgb(0 0 0 / 10%);
`;

export const Th = styled.th`
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-weight: 300;
    padding: 20px 30px;
`;

export const Td = styled.td`
    text-align: left;
    padding: 25px 30px;
`;

export const Tbody = styled.tbody`
    text-align: left;
    background-color: #ffffff;
    & > tr {
        margin-top: 20px;
    };
    & > tr > td {
        padding: 15px 30px;
    };
`;

export const TableWrapper = styled.div`
    max-height: 250px;
    overflow: auto;
    margin-top: 10px;
`;
