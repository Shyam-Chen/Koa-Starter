// @flow

import { IApp } from './types';

export const INITIAL: IApp = {
  theme: localStorage.getItem('theme') || 'light',
  navigation: [
    { icon: 'face', text: 'helloWorld', route: '/hello-world' },
  ],
  drawer: false || null,
  languages: [
    { key: 'en', country: 'us', label: 'English' },
    { key: 'zh', country: 'cn', label: '中文' },
    { key: 'ja', country: 'jp', label: '日本語' },
  ],
};
