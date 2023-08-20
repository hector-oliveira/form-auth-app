import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${() => css`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${ ({ theme }) => theme.colors.shape };
    margin-bottom: 8px;
  `}
`;

export const Title = styled.Text`
  ${() => css`
    font-size: 15px;
    color: ${ ({ theme }) => theme.colors.color_shape };
  `}
`;