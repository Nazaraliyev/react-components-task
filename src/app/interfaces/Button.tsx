import { ReactNode } from 'react';

export interface ButtonProps {
  variant: 'primary' | 'default' | 'danger' | 'dashed';
  size: 'small' | 'medium' | 'large';
  shape?: 'circle' | 'round' | undefined;

  icon?: ReactNode;
  children?: string;
  disabled?: true;
}
