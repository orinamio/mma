import * as React from 'react';
import { Image } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import AvatarItemList from './index';

const profileData = [
  {
    id: 'x',
    fullName: 'Elon Musk',
    imageUrl:
      'https://ori-emma.s3.eu-west-2.amazonaws.com/images/avatars/Allan+Munger%402x.png',
  },
  {
    id: 'y',
    fullName: 'Nikola Tesla',
    imageUrl:
      'https://ori-emma.s3.eu-west-2.amazonaws.com/images/avatars/Allan+Munger%402x.png',
  },
];

// avatar list render item
const renderItem = ({ item, index }) => (
  <Image
    source={{
      uri: item?.imageUrl,
    }}
    accessibilityRole="imagebutton"
  />
);

// tests
test('AvatarListItem should rendered', () => {
  const { getByTestId } = render(<AvatarItemList data={profileData} />);

  const avatarList = getByTestId('avatar-list');
  expect(avatarList).toBeDefined();
});

test('when AvatarItemList has "data" containing two profiles, it should show two profile images', () => {
  const { getAllByA11yRole } = render(
    <AvatarItemList data={profileData} renderItem={renderItem} />
  );

  const imageComponents = getAllByA11yRole('imagebutton');
  expect(imageComponents).toHaveLength(2);
});