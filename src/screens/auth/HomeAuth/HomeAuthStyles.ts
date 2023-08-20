import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
  `}

`;

export const Text = styled.Text`
  ${() => css`
    font-size: 24px;
    color: #000;
  `}
`;