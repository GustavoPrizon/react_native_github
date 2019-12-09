import styled from "styled-components";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const MenuText = styled.Text`
  font-size: 16px;
  color: #222;
  font-weight: bold;
  text-align: center;
`;

export const MenuButtons = styled(RectButton)`
  flex: 1;
  margin-top: -470px;
  flex-direction: column;
  justify-content: center;
`;

export const UserButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  align-self: stretch;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const TextUserButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const RepoButton = styled(RectButton)`
  margin-top: 10px;
  border-radius: 4px;
  align-self: stretch;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const TextRepoButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
