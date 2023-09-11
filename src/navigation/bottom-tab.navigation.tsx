import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "../screen/camera.screen";
import DocsScreen from "../screen/docs.screen";
import AboutScreen from "../screen/about.screen";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabNavigation : React.FC = () : JSX.Element => {
  return (
    <Tab.Navigator screenOptions={BottomTabScreenOptions}>
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="camera" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Docs"
        component={DocsScreen}
        options={{
          tabBarLabel: "Docs",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="images" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="info-with-circle" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabScreenOptions = {
  headerShown: false,
};

export default BottomTabNavigation;
