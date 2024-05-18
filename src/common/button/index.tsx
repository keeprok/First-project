import { FC } from 'react';

import type { ButtonVoid } from '../../types/common';
import { ButtonVariants } from '../../types/variants';

const Button: FC<ButtonVoid> = ({ shape, color, children, ...props }) => {
  return (
    <button className={ButtonVariants({ shape, color })} {...props}>
      {children}
    </button>
  );
};
export default Button;
