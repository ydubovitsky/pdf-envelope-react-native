import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OuterSpaceSvg from "./svg/outer-space";
import ButtonComponent from "../../common/button/button.component";

type StartScreenProps = {
  navigation: any;
};

const StartScreen: React.FC<StartScreenProps> = ({
  navigation,
}): JSX.Element => {
  const navigateToScreen = (screenName: string): void => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <OuterSpaceSvg />
        </View>
        <Text style={styles.description}>
          Преобразуйте ваши изображения в красивые PDF-документы или текст, с легкостью и
          стилем!
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            backgroundColor="#0071F2"
            title="Начать"
            onPress={() => navigateToScreen("Навигация по нижней вкладке")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  svgContainer: {
    flex: 3,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: "20%",
  },
});

export default StartScreen;
