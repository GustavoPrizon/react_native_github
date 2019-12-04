import Reactotron from "reactotron-react-native";

// configurando o Reactotron para rodar em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
