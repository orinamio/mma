import { Dimensions } from 'react-native';

import { APP_HEADER_HEIGHT } from './navigation';

// device constants
export const DEVICE_SCREEN_HEIGHT: number = Dimensions.get('screen').height;
export const DEVICE_SCREEN_WIDTH: number = Dimensions.get('screen').width;

// avatar and avatar list constants
export const AVATAR_LIST_CONTAINER_HEIGHT = 140;
export const AVATAR_CONTAINER_MARGIN = 10;
export const AVATAR_CONTAINER_HORIZONTAL_MARGIN = AVATAR_CONTAINER_MARGIN * 2; // left margin + right margin
export const AVATAR_CONTAINER_VERTICAL_MARGIN = AVATAR_CONTAINER_MARGIN * 2; // top margin + bottom margin
export const AVATAR_CONTAINER_PADDING = 4; // top, right, bottom, left
export const AVATAR_CONTAINER_PADDING_VERTICAL = AVATAR_CONTAINER_PADDING * 2;
export const AVATAR_HEIGHT = 72;
export const AVATAR_CONTAINER_WITH_PADDING_HEIGHT: number =
  AVATAR_HEIGHT + AVATAR_CONTAINER_PADDING_VERTICAL;
export const AVATAR_CONTAINER_WITH_MARGIN_HEIGHT: number =
  AVATAR_CONTAINER_WITH_PADDING_HEIGHT + AVATAR_CONTAINER_VERTICAL_MARGIN;
export const AVATAR_CONTAINER_WIDTH: number = AVATAR_CONTAINER_WITH_MARGIN_HEIGHT; // since it's a square container use "AVATAR_CONTAINER_WITH_MARGIN_HEIGHT"
export const AVATAR_CONTAINER_HALF_WIDTH: number = AVATAR_CONTAINER_WIDTH / 2;
export const AVATAR_LIST_CENTER_POINT: number =
  DEVICE_SCREEN_WIDTH - AVATAR_CONTAINER_WIDTH / 2;

// profile info constants
export const MIN_PROFILE_INFO_VIEW_HEIGHT: number =
  DEVICE_SCREEN_HEIGHT - AVATAR_LIST_CONTAINER_HEIGHT + APP_HEADER_HEIGHT;
export const PROFILE_CONTAINER_PADDING = 20;
