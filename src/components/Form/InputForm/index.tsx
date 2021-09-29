import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";

import { Container, Error } from "./styles";

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({ control, name, error, ...rest }: InputFormProps) {
  return (
    <Container>
      {error && <Error>{error}</Error>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input {...rest} onChangeText={onChange} value={value} />
        )}
      />
    </Container>
  );
}
