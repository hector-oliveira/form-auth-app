import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Input, InputProps } from '@components/Input/Input'

type ControlledInputsProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

import { Error } from "./ControlledInputsStyles"

export function ControlledInputs({ control, name, error, ...rest }: ControlledInputsProps) {
  return(
    <>
      <Controller 
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      { error && <Error>{error.message}</Error> }
    </>
  );
}

