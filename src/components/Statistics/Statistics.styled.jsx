import styled from 'styled-components';

export const StatSect = styled.section`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background-color: #f0f0f0;
`;

export const StatListEl = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItemEl = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #008e63;
  padding: 8px;

  background-color: ${props => getNewColor(props.perc)};
`;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getNewColor(percentage) {
  if (percentage <= 25) {
    return getRandomColor();
  } else if (percentage > 25 && percentage <= 50) {
    return getRandomColor();
  } else if (percentage > 50 && percentage <= 75) {
    return getRandomColor();
  } else {
    return getRandomColor();
  }
}
