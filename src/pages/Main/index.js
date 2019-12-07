import React, { Component } from "react";
import PropTypes from "prop-types";
import { Keyboard, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "../../services/api";

import {
  Container,
  Form,
  Input,
  Buttons,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  ExcludeButton,
  ExcludeButtonText
} from "./styles";

Icon.loadFont();

export default class Main extends Component {
  static navigationOptions = {
    title: "Usuários"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    newUser: "",
    users: [],
    loading: false,
    userNotFound: false
  };

  async componentDidMount() {
    const users = await AsyncStorage.getItem("users");

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { users } = this.state;

    if (prevState.usres !== users) {
      AsyncStorage.setItem("users", JSON.stringify(users));
    }
  }

  handleAddUser = async () => {
    const { users, newUser } = this.state;

    this.setState({ loading: true });

    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url
      };

      this.setState({
        users: [...users, data],
        newUser: "",
        loading: false
      });
    } catch (error) {
      this.setState({
        newUser: "",
        loading: false,
        userNotFound: true
      });
    }

    Keyboard.dismiss();
  };

  handleExclude = item => {
    const { users } = this.state;

    this.setState({
      users: users.filter(e => e.login !== item.login)
    });
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate("User", { user });
  };

  render() {
    const { users, newUser, loading, userNotFound } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCaptalize={false}
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyLabel="send"
            onSubmitEditing={this.handleAddUser}
            userNotFound={userNotFound}
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <Buttons>
                <ProfileButton onPress={() => this.handleNavigate(item)}>
                  <ProfileButtonText>Ver Perfil</ProfileButtonText>
                </ProfileButton>
                <ExcludeButton onPress={() => this.handleExclude(item)}>
                  <ExcludeButtonText>Excluir</ExcludeButtonText>
                </ExcludeButton>
              </Buttons>
            </User>
          )}
        />
      </Container>
    );
  }
}
