import { Box, AlertCircle } from 'lucide-react';
import { theme } from '../../theme';
import Button from '../atoms/Button';
import SectionTitle from '../atoms/SectionTitle';

const ComponentsSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: theme.global.spacing.xl }}>
      <section style={{ backgroundColor: theme.alias.color.bg.card, border: `1px solid ${theme.alias.color.border.regular}`, borderRadius: theme.global.radius.xl, padding: theme.global.spacing.lg, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
        <SectionTitle title="Atoms / Button" icon={Box} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.global.spacing.xl }}>
          {/* Variants */}
          <div>
            <h3 style={{ fontSize: theme.global.font.size.xs, fontWeight: theme.global.font.weight.bold, color: theme.alias.color.text.caption, textTransform: 'uppercase', marginBottom: theme.global.spacing.md }}>Variants</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.global.spacing.md }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 style={{ fontSize: theme.global.font.size.xs, fontWeight: theme.global.font.weight.bold, color: theme.alias.color.text.caption, textTransform: 'uppercase', marginBottom: theme.global.spacing.md }}>Sizes</h3>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: theme.global.spacing.md }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <h3 style={{ fontSize: theme.global.font.size.xs, fontWeight: theme.global.font.weight.bold, color: theme.alias.color.text.caption, textTransform: 'uppercase', marginBottom: theme.global.spacing.md }}>States</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.global.spacing.md }}>
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button variant="danger" leftIcon={<AlertCircle size={16} />}>With Icon</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsSection;
