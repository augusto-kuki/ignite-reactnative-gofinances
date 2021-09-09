import React from "react";

import HighlightCard from "../../components/HighlightCard";

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
} from "./styles";

const Dashboard: React.FC = () => {
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

      <HighlightCard />
    </Container>
  );
};

export default Dashboard;
