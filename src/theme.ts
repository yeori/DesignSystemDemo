import themeData from '../theme.json';

export const theme = themeData;

export const tokens = {
  colors: theme.colors,
  typography: theme.typography,
  spacing: theme.spacing,
  radius: theme.radius
};

export const layout = {
  headerHeight: '64px',
  sidebarWidth: '256px',
  mainPadding: '24px',
  containerMaxWidth: '1024px'
};
