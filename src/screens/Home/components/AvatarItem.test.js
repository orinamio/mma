import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AvatarItem from './AvatarItem';

const profile = {
  id: 'x',
  fullName: 'Elon Musk',
  imageUrl:
    'https://ori-emma.s3.eu-west-2.amazonaws.com/images/avatars/Allan+Munger%402x.png',
};

test('AvatarItem should have an image component to display image', () => {
  const { getByA11yRole } = render(<AvatarItem profile={profile} />);

  const imageComponent = getByA11yRole('imagebutton');
  expect(imageComponent).toBeDefined();
});

test('On press avatar, event is invoked', () => {
  const onAvatarPressMock = jest.fn();
  const { getByTestId } = render(
    <AvatarItem profile={profile} onAvatarPress={onAvatarPressMock} />
  );

  const imageButton = getByTestId('image-button');
  fireEvent.press(imageButton);
  expect(onAvatarPressMock).toHaveBeenCalled();
});
