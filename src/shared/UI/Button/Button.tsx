import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  black?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={`button ${className ? className : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
