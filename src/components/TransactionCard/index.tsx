import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  TransactionDate,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  id: string;
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface TransactionCardComponentProps {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: TransactionCardComponentProps) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <TransactionDate>{data.date}</TransactionDate>
      </Footer>
    </Container>
  );
}
