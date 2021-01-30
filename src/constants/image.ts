import { PixelRatio } from "react-native";

export const DEVICE_PIXEL_RATIO = PixelRatio.get();
export const MAX_AVATAR_DENSITY = 3;
// if pixel density is 3.5 or 3, use 3, if 2 or 1.5 use 2, if 1, use 1
export const IMAGE_DENSITY_NUMBER = Math.min(
  Math.round(DEVICE_PIXEL_RATIO),
  MAX_AVATAR_DENSITY
);