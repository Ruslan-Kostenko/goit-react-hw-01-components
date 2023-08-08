import styled from 'styled-components';

export const ListEl = styled.ul`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: #f0f0f0;
`;

export const ItemEl = styled.li`
  width: 360px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 8px;
  background-color: #ffffff;

  box-shadow: 0 0 5px rgba(133, 133, 133, 0.5);
`;

export const SpanEl = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${friend => (friend.isOn ? 'green' : 'red')};
`;
