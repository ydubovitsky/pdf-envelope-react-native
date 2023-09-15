import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "../screen/camera/camera.screen";
import DocsScreen from "../screen/docs/docs.screen";
import AboutScreen from "../screen/about/about.screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import StartScreen from "../screen/start/start.screen";

const Stack = createStackNavigator<any>();

const MainStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Старт"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#FFFFFF" },
    }}
  >
    <Stack.Screen name="Старт" component={StartScreen} />
    <Stack.Screen name="Камера" component={BottomTabNavigation} />
  </Stack.Navigator>
);

//! BottomTabNavigator
const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={BottomTabScreenOptions}>
      <Tab.Screen
        name="Камера"
        component={CameraScreen}
        options={{
          tabBarLabel: "Камера",
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <AntDesign name="camera" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Docs"
        component={DocsScreen}
        options={{
          tabBarLabel: "Docs",
          tabBarIcon: ({ color }) => (
            <Entypo name="images" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="О приложении"
        component={AboutScreen}
        options={{
          tabBarLabel: "О приложении",
          tabBarIcon: ({ color }) => (
            <Entypo name="info-with-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabScreenOptions = {
  headerShown: false,
};

export default MainStackNavigator;
