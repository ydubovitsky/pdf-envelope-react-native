import { PhotoEntity } from "../types";
import { manipulateAsync } from "expo-image-manipulator";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";

export const saveToMemory = (pdf: any) => {
  // Save to phone memory
  // https://docs.expo.dev/versions/latest/sdk/media-library/
  MediaLibrary.saveToLibraryAsync(pdf);
};

//TODO Упростить
export const printImagesToPdfFile = async (photosList: PhotoEntity[], selectedPhotos: number[]): Promise<void> => {
  const imagesToPrint: PhotoEntity[] = photosList.filter((photoEntity) =>
    selectedPhotos.includes(photoEntity.id)
  );

  const promises = imagesToPrint.map(
    async (image) =>
      await manipulateAsync(image.data.uri ?? image.data.uri, [], {
        base64: true,
      })
  );

  await Promise.all(promises)
    .then((images) =>
      images.map(
        (image) =>
          `<img src="data:image/jpeg;base64,${image.base64}" style="width: 90vw; height: 90vh" />`
      )
    )
    .then(
      (imagesArray) =>
        `<html style="margin: 0; padding: 0">${imagesArray}</html>`
    )
    .then((html) => Print.printAsync({ html }));
};

export const printImagesToTextFile = () => {}