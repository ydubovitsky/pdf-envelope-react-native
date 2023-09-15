import { AntDesign, Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  photosListSelector,
  removePhoto,
} from "../../redux/features/photos.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PhotoEntity } from "../../types";
import NotFoundComponent from "./components/not-found.component";
import {
  printImagesToPdfFile,
  printImagesToTextFile,
} from "../../service/image.service";

type DocsScreenProps = {
  navigation: any;
};

const DocsScreen: React.FC<DocsScreenProps> = ({ navigation }): JSX.Element => {
  const dispatch = useAppDispatch();
  const photosList: PhotoEntity[] = useAppSelector(photosListSelector);
  const [selectedPhotos, setSelectedPhotos] = useState<number[]>([]);

  const selectImageHandler = (id: number): void => {
    const isContain: boolean = selectedPhotos.includes(id);
    if (isContain) {
      setSelectedPhotos(selectedPhotos.filter((photos) => photos !== id));
    } else {
      setSelectedPhotos([...selectedPhotos, id]);
    }
  };

  const removeImageHandler = (id: number): void => {
    dispatch(removePhoto(id));
  };

  const showPhotosElement = () => {
    return photosList.map((rs, idx) => (
      <View key={rs.id} style={[styles.imageWrapper, styles.shadowProp]}>
        {selectedPhotos.includes(idx) ? (
          <AntDesign
            name="checkcircleo"
            size={24}
            color="black"
            style={styles.check}
          />
        ) : null}
        <TouchableOpacity onPress={() => selectImageHandler(idx)}>
          <Image source={rs.data.uri} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.photoInfo}>
          <Text>{rs.name}</Text>
          <Text style={{ color: "silver", fontSize: 12 }}>{rs.createdAt}</Text>
          <View style={styles.icons}>
            <AntDesign
              name="delete"
              size={24}
              color="black"
              onPress={() => removeImageHandler(rs.id)}
            />
            <Entypo name="share" size={24} color="black" />
            <AntDesign name="save" size={24} color="black" />
          </View>
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {photosList.length > 0 ? (
          <>
            <ScrollView>
              <View style={styles.imagesContainer}>{showPhotosElement()}</View>
            </ScrollView>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.printTextBtn}
                onPress={() => printImagesToTextFile()}
              >
                <AntDesign name="filetext1" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.printPdfBtn}
                onPress={() => printImagesToPdfFile(photosList, selectedPhotos)}
              >
                <Entypo name="print" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <NotFoundComponent navigation={navigation} />
        )}
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
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  imagesContainer: {
    display: "flex",
    padding: 10,
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  imageWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  photoInfo: {
    display: "flex",
    height: 100,
    justifyContent: "space-around",
  },
  icons: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
  },
  shadowProp: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  check: {
    position: "absolute",
    zIndex: 100,
    right: 5,
    bottom: 5,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  printPdfBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#0071F2",
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 30,
  },
  printTextBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: "#0071F2",
    borderWidth: 1,
    borderColor: "silver",
    borderRadius: 30,
  },
});

export default DocsScreen;
