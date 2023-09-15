import { StyleSheet, View, Text } from "react-native";
import NotFoundSvg from "../svg/not-found";
import ButtonComponent from "../../../common/button/button.component";

type NotFoundComponentProps = {
  navigation: any
}

const NotFoundComponent: React.FC<NotFoundComponentProps> = ({ navigation }): JSX.Element => {

  const navigateToScreenHandler = (screenName: string) => {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <NotFoundSvg />
      </View>
      <Text style={styles.description}>
        Вы еще не сделали ни одной фотографии
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          backgroundColor="#0071F2"
          title="Сделать снимки"
          onPress={() => navigateToScreenHandler("Камера")}
        />
      </View>
    </View>
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
    paddingHorizontal: "20%"
  }
});

export default NotFoundComponent;
