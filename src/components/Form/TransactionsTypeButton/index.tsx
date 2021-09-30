import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Icon } from "./styles";

interface TransactionsTypeButtonProps extends RectButtonProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionsTypeButton({
  title,
  type,
  isActive,
  ...rest
}: TransactionsTypeButtonProps) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon type={type} name={icons[type]} />

      <Title>{title}</Title>
    </Container>
  );
}
