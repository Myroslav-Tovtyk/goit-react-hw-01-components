import styled from '@emotion/styled';

export const Sectio = styled.section`
  padding-top: ${props => props.theme.spacing(20)};
  padding-bottom: ${props => props.theme.spacing(20)};
`;

export const StatisticTitle = styled.h2`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  text-align: center;
`;
