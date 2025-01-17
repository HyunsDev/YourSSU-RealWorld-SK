import { IGetUser } from '@src/types/user';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userAtom = atom<IGetUser | null>({
  key: 'userAtom',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const userPw = atom<string>({
  key: 'userPw',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
