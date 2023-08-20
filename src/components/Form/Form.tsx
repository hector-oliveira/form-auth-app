import React from 'react';
import { Button } from '../Button/Button';
import { ControlledInputs } from '../ControlledInputs/ControlledInputs';
import { Container } from './FormStyles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o seu e-mail"),
  password: yup.string().min(6, "A senha deve conter 6 dígitos").required("Informe a sua senha"),
  password_confirmation: yup.string().oneOf([yup.ref('password')], "As senhas devem ser iguais").required("Confirme a sua senha")
});

export function Form() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  
  function handleUserRegister(data: FormData) {
    console.log(data);
    
  }

  return (
    <Container>
      <ControlledInputs
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInputs
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        error={errors.email}
      />
      <ControlledInputs
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        autoCapitalize='none'
        error={errors.password}
      />
      <ControlledInputs
        name="password_confirmation"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        autoCapitalize='none'
        error={errors.password_confirmation}
      />

      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}