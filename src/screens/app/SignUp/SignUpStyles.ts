import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px;
  `}
`;