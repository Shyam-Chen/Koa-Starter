// @flow

import { IApp } from './types';

export const INITIAL: IApp = {
  theme: localStorage.getItem('theme') || 'light',
  navigation: [
    { icon: 'face', text: 'helloWorld', route: '/hello-world' },
  ],
  drawer: false || null,
  languages: [
    { key: 'en', label: 'English' },
    { key: 'zh', label: '中文' },
    { key: 'ja', label: '日本語' },
  ],
};
