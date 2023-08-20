import React from 'react';
import { Container, Subtitle, Title } from './HeaderStyles';

export function Header() {
  return (
    <Container>
      <Title>
        Crie sua{'\n'}conta
      </Title>

      <Subtitle>
        Faça seu cadastro de{'\n'}
        forma rápida e fácil
      </Subtitle>
    </Container>
  )
}