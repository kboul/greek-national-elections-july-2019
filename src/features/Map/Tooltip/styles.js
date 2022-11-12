import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  margin: 8px;
  padding: 0px 10px 10px;
  background: #ffffff;
  color: #000000;
  min-width: 100px;
  min-height: 100px;
  max-width: 300px;
  font-size: 14px;
  z-index: 9;
  pointer-events: none;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Td = styled.td`
  padding-right: 10px;
`;

export { Container, Td };
