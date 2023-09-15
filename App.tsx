import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/main-stack.navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
