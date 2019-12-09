import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Menu from "./pages/Menu";
import Main from "./pages/Main";
import User from "./pages/User";
import Repository from "./pages/Repository";
import Repositories from "./pages/Repositories";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Menu,
      Main,
      User,
      Repository,
      Repositories
    },
    {
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1"
        },
        headerTintColor: "#fff"
      }
    }
  )
);

export default Routes;
