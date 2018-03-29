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
  drawer: boolean;
  navigation: Navigation[];
}

export const INITIAL: IApp = {
  drawer: true,
  navigation: [
    { icon: 'face', text: 'Hello World', route: '/hello-world' },
  ],
};
