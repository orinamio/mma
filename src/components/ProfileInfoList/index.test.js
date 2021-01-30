import * as React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import ProfileInfoList from './index';

const profileData = [
  {
    id: 'x',
    fullName: 'Elon Musk',
  },
  {
    id: 'y',
    fullName: 'Nikola Tesla',
  },
];

// profile list render item
const renderItem = ({ item, index }) => (
  <Text testID="fullName">{item.fullName}</Text>
);

test('ProfileInfoList should render', () => {
  const { getByTestId } = render(<ProfileInfoList data={profileData} />);

  const avatarList = getByTestId('profile-info-list');
  expect(avatarList).toBeDefined();
});

test('when ProfileInfoList has "data" containing two profiles, it should show two profiles', () => {
  const { getByText, getAllByTestId } = render(
    <ProfileInfoList data={profileData} renderItem={renderItem} />
  );

  const profileInfoList = getAllByTestId('fullName');
  expect(profileInfoList).toHaveLength(2);
});