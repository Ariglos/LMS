export enum Theme {
  Light = 'light-theme.css',
  Dark = 'dark-theme.css'
}

export namespace Theme {
  export function parse(theme: string): Theme | null {
    if (theme === Theme.Light) {
      return Theme.Light;
    } else if (theme === Theme.Dark) {
      return Theme.Dark;
    }
    return null;
  }
}
