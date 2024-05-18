import { VariantProps } from 'class-variance-authority';
import { ButtonVariants } from './variants';

export type ButtonProps = {
  shape: string;
  color: string;
};

export type ButtonVoid = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    children?: React.ReactNode;
  };
