import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { addPhoto, lastPhotoSelector } from "../../redux/features/photos.slice";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/store";
import { PhotoEntity } from "../../types";

// https://docs.expo.dev/versions/latest/sdk/camera/#usage
// https://stackoverflow.com/questions/52707002/how-to-snap-pictures-using-expo-react-native-camera

type CameraScreenProps = {
  navigation: any
}

const CameraScreen: React.FC<CameraScreenProps> = ({ navigation }): JSX.Element => {
  const dispatch = useAppDispatch();
  const lastPhoto: PhotoEntity = useAppSelector<PhotoEntity>(lastPhotoSelector);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const ref = useRef<Camera>(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = (): void => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async (): Promise<void> => {
    if (ref.current !== null) {
      const photo: CameraCapturedPicture = await ref.current.takePictureAsync();
      dispatch(addPhoto(photo));
    }
  };

  const navigateToDocsScreen = () : void => {
    navigation.navigate('Docs')
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          {lastPhoto !== undefined ? (
            <TouchableOpacity style={styles.button} onPress={() => navigateToDocsScreen()}>
              <Image source={lastPhoto.data.uri} style={styles.lastPhoto} />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <AntDesign name="camera" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialCommunityIcons
              name="rotate-3d-variant"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.2)",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "20%",
    gap: 40,
    width: "100%",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 30,
  },
  lastPhoto: {
    width: 60,
    height: 60,
    opacity: 0.8,
    borderRadius: 30,
  },
  text: {},
});

export default CameraScreen;
