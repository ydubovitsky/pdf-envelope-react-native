import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CameraCapturedPicture } from 'expo-camera';
import { PhotoEntity } from '../../types';
import * as Crypto from "expo-crypto";

// Define a type for the slice state
interface PhotosState {
  lastId: number | null
  list: PhotoEntity[]
}

// Define the initial state using that type
const initialState: PhotosState = {
  lastId: null,
  list: [],
}

export const photosSlice = createSlice({
  name: 'photos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<CameraCapturedPicture>) => {
      state.lastId === null ? state.lastId = 0 : state.lastId = state.lastId + 1;
      state.list.push({ id: state.lastId, name: Crypto.randomUUID().substring(0, 10), createdAt: new Date().toUTCString(), data: action.payload })
    },
    removePhoto: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(photoEntity => photoEntity.id !== action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    update: (state) => {
    },
  },
})

export const { addPhoto, removePhoto, update } = photosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const photosListSelector = (state: RootState): PhotoEntity[] => state.photos.list
export const lastPhotoSelector = (state: RootState): PhotoEntity => state.photos.list[state.photos.list.length - 1];

export default photosSlice.reducer