import React, {
  ButtonHTMLAttributes,
  ElementType,
  FC,
  memo,
  useCallback,
  FocusEvent,
  MouseEvent,
} from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  buttonType?:
    | "primary"
    | "positive"
    | "negative"
    | "warning"
    | "muted"
    | "naked";
  loading?: boolean;
  isActive?: boolean;
  size?: "small" | "medium" | "large";
}

const defaultProps: Partial<ButtonProps> = {
  buttonType: "primary",
  disabled: false,
  isActive: false,
  loading: false,
  size: "medium",
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonType,
  disabled,
  loading,
  isActive,
  size,
  onBlur,
  onClick,
  ...rest
}) => {
  const classes = clsx(
    styles.Button,
    className,
    styles[`Button--${buttonType}`],
    {
      [styles["Button--disabled"]]: disabled,
      [styles[`Button--${size}`]]: size,
      [styles["Button--is-active"]]: isActive,
    }
  );

  const handleOnBlur = useCallback(
    (e: FocusEvent<HTMLButtonElement>) => {
      e.persist();
      if (onBlur && !disabled) {
        onBlur(e);
      }
    },
    [disabled, onBlur]
  );

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.persist();
      if (onClick && !disabled && !loading) {
        onClick(e);
      }
    },
    [disabled, loading, onClick]
  );

  return (
    <button
      className={classes}
      onBlur={handleOnBlur}
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default memo(Button);
