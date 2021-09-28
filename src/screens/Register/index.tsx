import React, { useState } from "react";
import { Modal } from "react-native";
import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { TransactionsTypeButton } from "../../components/Form/TransactionsTypeButton";
import { CategorySelect } from "../CategorySelect";

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

  const [category, setCategory] = useState({
    key: "category",
    name: "Categorias",
  });
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransctionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Cadastrar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}
