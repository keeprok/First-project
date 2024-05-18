import { FC } from 'react';
import { cn } from '../../libs/tailwind-css/utils';
import type { ButtonVoid } from '../../types/common';
import { ButtonVariants } from '../../types/variants';

const Button: FC<ButtonVoid> = ({ shape, color, children, ...props }) => {
  return (
    <button className={cn(ButtonVariants({ shape, color }))} {...props}>
      {children}
    </button>
  );
};
export default Button;
