import React from "react";

import { HighlightCard } from "../../components/HighlightCard";

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
} from "./styles";

export function Dashboard() {
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
    </Container>
  );
}
