import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View``;
export const Header = styled.View``;
export const Title = styled.Text``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View``;
export const Amount = styled.Text``;
export const LastTransaction = styled.Text``;
