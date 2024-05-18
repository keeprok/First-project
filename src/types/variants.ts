import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  ` w-fit min-w-[6rem] h-fit min-h-[2.5rem]  text-center px-[1rem] py-[0.5rem] text-white `,
  {
    variants: {
      shape: {
        rectangular: 'rounded-md',
        roundSqure: 'rounded-2xl',
      },
      color: {
        red: 'bg-red-200',
        blue: 'bg-blue-200',
      },
    },
    defaultVariants: {
      shape: 'rectangular',
      color: 'red',
    },
  }
);
