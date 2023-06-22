import { FC } from 'react';
import styles from '../../styles/button.module.css';
import { ButtonProps } from '../../interfaces';

const defaultClassName = styles.button;

const Button: FC<ButtonProps> = ({
  variant,
  children,
  icon,
  disabled,
  size,
  shape,
}) => {
  const variantClass = styles[variant];
  const sizeClass = styles[size];
  const shapeClass = shape ? styles[shape] : '';

  const arr = [variantClass, sizeClass, shapeClass];

  return (
    <button
      disabled={disabled}
      className={`${defaultClassName} ${arr.join(' ')}`}
    >
      <span className={styles.buttonElements}>
        {icon && icon}
        {children && children}
      </span>
    </button>
  );
};

export default Button;
