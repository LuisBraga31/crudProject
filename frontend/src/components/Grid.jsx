/* eslint-disable react/prop-types */

import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export default function Grid({ users }) {
  return (
    <Table>
        <Thead>
            <Tr>
                <Th> Nome </Th>
                <Th> Email </Th>
                <Th onlyWeb> Fone </Th>
                <Th>  </Th>
                <Th>  </Th>
            </Tr>
        </Thead>
        <Tbody>
            {users.map((user, index) => (
                <Tr key={index}>
                    <Td width="30%"> {user.nome} </Td>
                    <Td width="30%"> {user.email} </Td>
                    <Td width="20%" onlyWeb> {user.fone} </Td>
                    <Td style={{ textAlign: 'center' }} width="5%"> <FaEdit/> </Td>
                    <Td style={{ textAlign: 'center' }} width="5%"> <FaTrash/> </Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
  )
}
