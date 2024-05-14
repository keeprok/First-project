import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from '../../libs/tailwind-css/utils';

const ButtonVariants = cva(` bg-r w-48 h-48 text-center px-[1rem] py-[0.5rem] text-white`, {
  variants: {
    shape: {
      rectangular: 'rounded-none',
      roundSqure: 'rounded-lg',
    },
    color: {
      red: 'bg-red-400',
      blue: 'bg-blue-400',
    },
  },
  defaultVariants: {
    shape: 'rectangular',
    color: 'red',
  },
});
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    children?: React.ReactNode;
  };

const Button: FC<ButtonProps> = ({ shape, color, children, ...props }) => {
  return (
    <button className={cn(ButtonVariants({ shape, color }))} {...props}>
      {children}
    </button>
  );
};
export default Button;
