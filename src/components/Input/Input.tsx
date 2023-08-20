import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Container, IconContainer, InputText } from './InputStyles';

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  secureTextEntry?: boolean;
}

export function Input({ icon, value, secureTextEntry, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const handleInputFocus = () => setIsFocused(true);

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value); 
  }

  const handlePasswordVisibilityChange = () => setIsPasswordVisible(!isPasswordVisible);
  
  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#DC1637' : '#AEAEB3'}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        secureTextEntry={isPasswordVisible}
        {...rest}
      />

      {secureTextEntry &&
        <IconContainer isFocused={isFocused}>
          <Feather
            name={!isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={(isFocused) ? '#DC1637' : '#AEAEB3'}
            onPress={handlePasswordVisibilityChange}
          />
        </IconContainer>
      }
    </Container>
  );
}