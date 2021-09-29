import React, { useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button } from "../../components/Form/Button";
import { InputForm } from "../../components/Form/InputForm";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { TransactionsTypeButton } from "../../components/Form/TransactionsTypeButton";

import { CategorySelect } from "../CategorySelect";

import { useForm } from "react-hook-form";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";

interface FormData {
  name: string;
  amount: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor numérico")
    .positive("O valor deve ser positivo")
    .required("O valor é obrigatório"),
});

export function Register() {
  const [transactionType, setTransactionType] = useState("up");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categorias",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleTransctionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo de transação");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione uma categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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

          <Button title="Cadastrar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
