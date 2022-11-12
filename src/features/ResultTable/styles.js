import styled, { css } from 'styled-components';

const Button = styled.button``;

const Container = styled.div`
  margin: 15px;
`;

const GoBackContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: auto;
`;

const PartyNameContainer = styled.div`
  display: flex;
`;

const PartyName = styled.span`
  font-size: 2.25rem;
  font-weight: 600;
  color: #0055a0;
  margin: 15px;
  white-space: nowrap;
`;

const Table = styled.table`
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const borderWithPadding = css`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TBody = styled.tbody``;

const THead = styled.thead``;

const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #0055a0;
  color: white;
  ${borderWithPadding}
`;

const Td = styled.td`
  ${borderWithPadding}
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: rgba(0, 85, 160, 0.4);
    color: #ffffff;
  }
`;

export {
  Button,
  Container,
  GoBackContainer,
  PartyNameContainer,
  PartyName,
  Table,
  TBody,
  THead,
  Td,
  Th,
  Tr
};
