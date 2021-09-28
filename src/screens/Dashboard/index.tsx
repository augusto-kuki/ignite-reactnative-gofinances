import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  User,
  Photo,
  UserInfo,
  UserGretting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export function Dashboard() {
  const data: Array<TransactionCardProps> = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 17.000,00",
      category: {
        name: "Desenvolvimento",
        icon: "dollar-sign",
      },
      date: "10/02/2021",
    },
    {
      id: "2",
      type: "positive",
      title: "Aluguel",
      amount: "R$ 1.000,00",
      category: {
        name: "Moradia",
        icon: "home",
      },
      date: "10/02/2021",
    },
    {
      id: "3",
      type: "negative",
      title: "Mercado",
      amount: "R$ 500,00",
      category: {
        name: "Mercado",
        icon: "shopping-cart",
      },
      date: "12/02/2021",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/25992161?v=4",
              }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Augusto</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="17.000,00"
          lastTransaction="Última entrada no dia 6 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="5.000,00"
          lastTransaction="Última saída no dia 17 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="12.000,00"
          lastTransaction="Abril 2021"
        />
      </HighlightCards>

      <Transactions>
        <Title>Transações</Title>

        <TransactionsList
          data={data}
          keyExtractor={(item: TransactionCardProps) => item.id}
          renderItem={({ item }) => {
            return <TransactionCard data={item} />;
          }}
        />
      </Transactions>
    </Container>
  );
}
