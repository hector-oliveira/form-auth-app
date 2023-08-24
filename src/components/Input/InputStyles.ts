import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  ${() => css`
    height: 55px;
    width: 55px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    background-color: ${ ({ theme }) => theme.colors.light[900] };
    `}
    
    ${( { isFocused }: Props ) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${ ({ theme }) => theme.colors.shape };   
  `};
`;

export const InputText = styled(TextInput)<Props>`
  ${() => css`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.light[900] };
    color: ${ ({ theme }) => theme.colors.custom[800] };
    padding: 0 23px;
  `}

  ${( { isFocused }: Props ) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: ${ ({ theme }) => theme.colors.shape };    
  `};
`;