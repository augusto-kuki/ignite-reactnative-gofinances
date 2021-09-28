import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "../../components/Form/Button";
import { categories } from "../../utils/categories";
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

interface Category {
  name: string;
  key: string;
}

interface CategorySelectProps {
  category: Category;
  setCategory(item: Category): void;
  closeSelectCategory(): void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: CategorySelectProps) {
  function handleCategorySelect(item: Category): void {
    setCategory(item);
  }

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item: Category) => item.key}
        style={{ flex: 1, width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Category
              onPress={() => handleCategorySelect(item)}
              isActive={category.key === item.key}
            >
              <Icon name={item.icon} />

              <Name>{item.name}</Name>
            </Category>
          );
        }}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
