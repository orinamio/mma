import { DEVICE_PIXEL_RATIO } from '../constants/image';
import { AWS_AVATAR_ENDPOINT } from '../constants/url';

export const getAvatarUrl = (fullName: string): string => {
  const resourceName: string = fullName.split(' ').join('+');
  const imageDensities: { [key: string]: string } = {
    '1': '',
    '2': '%402x',
    '3': '%403x',
  }; // e.g. https://ori-emma.s3.eu-west-2.amazonaws.com/images/avatars/Allan+Munger%402x.png
  const imageDensity =
    imageDensities[`${DEVICE_PIXEL_RATIO}`] || imageDensities['1'];

  return `${AWS_AVATAR_ENDPOINT}${resourceName}${imageDensity}.png`;
};
