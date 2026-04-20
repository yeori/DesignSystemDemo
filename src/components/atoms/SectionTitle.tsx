import { theme } from '../../theme';

interface SectionTitleProps {
  title: string;
  icon: any;
}

const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: theme.global.spacing.sm, 
    marginBottom: theme.global.spacing.md, 
    borderBottom: `1px solid ${theme.alias.color.border.subtle}`, 
    paddingBottom: theme.global.spacing.sm 
  }}>
    <div style={{ 
      padding: '6px', 
      backgroundColor: theme.alias.color.action.primaryGhost, 
      borderRadius: theme.global.radius.sm, 
      border: `1px solid ${theme.global.color.indigo['100']}`, 
      color: theme.alias.color.action.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon size={18} />
    </div>
    <h2 style={{ 
      fontSize: theme.global.font.size.xs, 
      fontWeight: theme.global.font.weight.bold, 
      textTransform: 'uppercase', 
      letterSpacing: '0.1em', 
      color: theme.alias.color.text.caption,
      margin: 0
    }}>{title}</h2>
  </div>
);

export default SectionTitle;
