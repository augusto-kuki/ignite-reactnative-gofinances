import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TransactionsTypeButton } from "../../components/TransactionsTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
export function Register() {
  const [transactionType, setTransactionType] = useState("up");

  function handleTransctionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionsTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransctionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionsTypeButton
              type="down"
              title="Saída"
              onPress={() => handleTransctionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>
        </Fields>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  );
}
