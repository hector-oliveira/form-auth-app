import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.Text`
  ${() => css`
    font-size: 40px;
    font-weight: bold;
    color: ${ ({ theme }) => theme.colors.custom[900] };
  `}
`;

export const Subtitle = styled.Text`
  ${() => css`
    font-size: 15px;
    color: ${ ({ theme }) => theme.colors.custom[800] };
    line-height: 25px;
  `}  
`;

