import { View, Text, Linking, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ThankSvg from "./svg/thank";
import React from "react";

const AboutScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <ThankSvg />
        </View>
        <View style={styles.textContainer}>
          <ScrollView contentContainerStyle={{ rowGap: 10 }}>
            <Text style={styles.title}>Информация</Text>
            <Text style={styles.text}>
              Наше приложение для преобразования картинок в PDF предлагает
              быстрый и удобный способ создания PDF-документов из ваших любимых
              фотографий.
            </Text>
            <Text style={styles.text}>
              Просто сделайте снимок, настройте расположение и порядок страниц,
              а затем создайте качественные PDF-файлы, готовые для сохранения,
              печати или отправки.
            </Text>
            <View>
              <Text style={styles.text}>
                Я также выражаю большую благодарность, коллективу
              </Text>
              <Text
                style={{ ...styles.text, color: "blue" }}
                //TODO Change the link!
                onPress={() => Linking.openURL("https://storyset.com/people")}
              >
                storyset.com
              </Text>
              <Text style={styles.text}>
                за предоставление SVG изображений.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  textContainer: {
    flex: 4,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    padding: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: "20%",
  },
});

export default AboutScreen;
