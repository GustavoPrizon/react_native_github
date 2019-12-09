import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Container,
  MenuText,
  MenuButtons,
  UserButton,
  TextUserButton,
  RepoButton,
  TextRepoButton
} from "./styles";

export default class Menu extends Component {
  static navigationOptions = {
    title: "Menu"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  handleNavigateUser = () => {
    const { navigation } = this.props;

    navigation.navigate("Main");
  };

  handleNavigateRepo = () => {
    const { navigation } = this.props;

    navigation.navigate("Repositories");
  };

  render() {
    return (
      <Container>
        <MenuText> Excolha a opção:</MenuText>
        <MenuButtons>
          <UserButton onPress={this.handleNavigateUser}>
            <TextUserButton> Users </TextUserButton>
          </UserButton>
          <RepoButton onPress={this.handleNavigateRepo}>
            <TextRepoButton> Repositórios </TextRepoButton>
          </RepoButton>
        </MenuButtons>
      </Container>
    );
  }
}
