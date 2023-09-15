import { CameraCapturedPicture } from "expo-camera"

export type PhotoEntity = {
  id: number;
  name: string;
  createdAt: string;
  data: CameraCapturedPicture
}