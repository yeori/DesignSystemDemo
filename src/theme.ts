import themeData from '../theme.json';

/**
 * Resolves token references in the format {path.to.token}
 */
function resolveTokens(obj: any, source: any = themeData): any {
  if (typeof obj === 'string' && obj.startsWith('{') && obj.endsWith('}')) {
    const path = obj.slice(1, -1).split('.');
    let current = source;
    for (const key of path) {
      if (current[key] === undefined) return obj;
      current = current[key];
    }
    return resolveTokens(current, source);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => resolveTokens(item, source));
  }
  
  if (typeof obj === 'object' && obj !== null) {
    const resolved: any = {};
    for (const key in obj) {
      resolved[key] = resolveTokens(obj[key], source);
    }
    return resolved;
  }
  
  return obj;
}

const resolvedTheme = resolveTokens(themeData);

export const theme = resolvedTheme;

export const tokens = {
  global: theme.global,
  alias: theme.alias
};

export const layout = {
  headerHeight: '64px',
  sidebarWidth: '256px',
  mainPadding: '24px',
  containerMaxWidth: '1024px'
};
