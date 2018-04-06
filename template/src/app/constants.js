// @flow

export interface Navigation {
  icon?: string;
  text?: string;
  route?: string;
  disabled?: boolean;
  subheader?: string;
  children?: Navigation[];
}

export interface IApp {
  theme: string;
  navigation: Navigation[];
  drawer: boolean | null;
  languages?: Array<{ key: string, label: string }>;
}

export interface IComponent {}

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
