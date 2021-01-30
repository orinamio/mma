import * as React from 'react';
import { render } from '@testing-library/react-native';
import ProfileInfoItem from './index';

const profile = {
  id: 'x',
  fullName: 'Elon Musk',
  role: 'Engineer',
  longBio: 'Tesla, Space X, Hyperloop, Neuralink, Solarcity',
};

test('ProfileInfoItem should display full profile information', () => {
  const { getByText, queryByText } = render(
    <ProfileInfoItem profile={profile} />
  );

  const fullName = queryByText(profile.fullName);
  expect(fullName).toBeDefined();

  const role = getByText(profile.role);
  expect(role).toBeDefined();

  const longBio = getByText(profile.longBio);
  expect(longBio).toBeDefined();
});
