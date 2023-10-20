import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

export const StyledStatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledStatisticsItem = styled.li`
  font-size: 20px;
  color: ${props => {
    if (props.$good) {
      return 'green';
    } else if (props.$neutral) {
      return 'orange';
    } else if (props.$bad) {
      return 'red';
    } else if (props.$total) {
      return 'blue';
    } else {
      return 'black';
    }
  }};
`;
