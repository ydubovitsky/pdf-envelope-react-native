import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

type ButtonComponentProps = {
  title: string;
  backgroundColor?: string;
  color?: string;
  child?: JSX.Element;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  backgroundColor,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 30
  },
  text: {
    fontSize: 16,
    color: "white"
  }
});

export default ButtonComponent;
