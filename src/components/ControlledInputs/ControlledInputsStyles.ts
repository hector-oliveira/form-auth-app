import styled, { css } from 'styled-components/native';

export const Error = styled.Text`
  ${() => css`
    color: ${ ({ theme }) => theme.colors.shape };
    margin: 3px 0 16px;
  `}

`;