import React from 'react';

import { 
  Keyboard, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback 
} from 'react-native';

import { 
  Form,
  Header
} from '@components/allComponents';

import { Container } from './SignUpStyles';

export function SignUp() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header />
          <Form />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}