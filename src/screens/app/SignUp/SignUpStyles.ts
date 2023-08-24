import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  ${() => css`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.light[600]};
    padding: 24px;
  `}
`;