import { ReactElement } from 'react';
// import crypto from 'crypto';

function makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function addKeysToReactElements(
  array?: Array<ReactElement>,
  name?: string
): Array<ReactElement> {
  const mapName =
    name ?? makeid(6); /* (Math.random() + 1).toString(36).substring(6) */

  if (!array) {
    return [];
  }

  return array.map<ReactElement>((item) => ({
    ...item,
    key: `${mapName}-${
      /* crypto.randomBytes(64).toString('hex') */ makeid(18)
    }`,
  }));
}
