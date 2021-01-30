import { Profile } from '../../screens/Home/index.t';

export type ProfileInfoItemProps = {
  profile: Profile;
  /**
   * Number of lines to render for profile bio
   */
  bioNumberOfLines?: number | undefined;
};
