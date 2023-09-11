import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./src/navigation/bottom-tab.navigation";

export default function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
}

