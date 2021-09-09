import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

const HighlightCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R% 17.000,00</Amount>
        <LastTransaction>Última entrada no dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;
