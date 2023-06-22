import LoadIcon from '../assets/icons/Load';

export const buttonsInitialData = [
  {
    variant: 'primary',
    shape: 'round',
    size: 'large',
    children: 'Primary button',
  },
  {
    variant: 'default',
    size: 'medium',
    children: 'Default button',
  },
  {
    variant: 'dashed',
    shape: 'round',
    size: 'small',
    children: 'Dashed button',
  },
  {
    variant: 'danger',
    shape: 'round',
    size: 'large',
    children: 'Danger button',
  },
  {
    variant: 'primary',
    shape: 'round',
    size: 'medium',
    icon: <LoadIcon />,
    children: 'Download',
  },
  {
    variant: 'primary',
    size: 'medium',
    shape: 'circle',
    icon: <LoadIcon />,
  },
];
