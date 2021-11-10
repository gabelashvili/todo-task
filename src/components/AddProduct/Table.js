/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck } from '@fortawesome/fontawesome-free-solid';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableWrapper,
} from './styles';
import TextInput from '../Inputs/TextInput';
import { checkInputs } from '../../helpers/checkInputs';

const TableComponent = () => {
  const [editItem, setEditItem] = useState({});
  const [errors, setErrors] = useState({});
  const productsList = useSelector(({ productsList }) => productsList);

  const handleAction = (e, id) => {
    const values = editItem[id] || {};
    const invalidFields = [];
    Object.keys(values).forEach((el) => {
      if (!checkInputs[el]({ value: values[el], required: true }).isValid) {
        invalidFields.push(el);
      }
    });
    setErrors({ ...errors, [id]: invalidFields });
    if (invalidFields.length === 0) {
      setEditItem({ ...editItem, [id]: !editItem[id] });
    } else {
      window.alert('Please fill all the fields');
    }
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Qunatity</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productsList.map((el) => (
            <Tr key={el.id}>
              <Td>
                <TextInput
                  disabled={!editItem[el.id]}
                  defaultValue={el.productName}
                  placeHolder="Product Name"
                  onChange={(e) => setEditItem(
                    { ...editItem, [el.id]: { ...editItem[el.id], productName: e.target.value } },
                  )}
                />
              </Td>
              <Td>
                <TextInput
                  disabled={!editItem[el.id]}
                  type="number"
                  defaultValue={el.productPrice}
                  placeHolder="Product Price"
                  onChange={(e) => setEditItem(
                    { ...editItem, [el.id]: { ...editItem[el.id], productPrice: e.target.value } },
                  )}
                />
              </Td>
              <Td>
                <TextInput
                  disabled={!editItem[el.id]}
                  type="number"
                  defaultValue={el.productQuantity}
                  placeHolder="Product Quantity"
                  onChange={(e) => setEditItem(
                    {
                      ...editItem,
                      [el.id]:
                      { ...editItem[el.id], productQuantity: e.target.value },
                    },
                  )}
                />
              </Td>
              <Td>
                <FontAwesomeIcon
                  icon={editItem[el.id] ? faCheck : faEdit}
                  size="lg"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => handleAction(e, el.id)}
                  color="green"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default TableComponent;
