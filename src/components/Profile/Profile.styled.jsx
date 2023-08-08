import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: #f0f0f0;
`;

export const DescrBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8px;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 50%;

  background-color: #008e63;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 3px solid #008e63;
  padding: 5px 10px;
  width: 100px;
  text-align: center;

  background-color: #ffffff;
`;
