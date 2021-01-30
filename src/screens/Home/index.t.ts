export type Profile = {
  id: string;
  fullName: string;
  role: string;
  longBio: string;
  imageUrl: string;
};

export type AvatarItemProps = {
  profile: Profile;
  index: number;
  isActive: boolean;
  onAvatarPress: (index: number) => void;
  onAvatarLongPress?: (index: number, profile: Profile) => void;
};

export type RenderProfileItemProps = {
  item: Profile;
  index: number;
};
