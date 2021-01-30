export type Profile = {
  id: string;
  fullName: string;
  role: string;
  longBio: string;
};

export type AvatarItemProps = {
  profile: Profile;
  index: number;
  currentProfileIndex: number;
  onAvatarPress: (index: number) => void;
  onAvatarLongPress?: (index: number, profile: Profile) => void;
};

export type RenderProfileItemProps = {
  item: Profile;
  index: number;
};
