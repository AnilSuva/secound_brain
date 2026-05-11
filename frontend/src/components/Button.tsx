
import type { ReactNode } from 'react';

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

const sizeStyles = {
  sm: {
    width: "100px",
    fontSize: "12px",
    padding: "4px 8px",
    margin: "0px 5px",
    iconSize: "10px"
  },
  md: {
    width: "160px",
    fontSize: "16px",
    padding: "8px 16px",
    margin: "0px 6px",
    iconSize: "14px"
  },
  lg: {
    width: "200px",
    fontSize: "20px",
    padding: "12px 24px",
    margin: "0px 7px",
    iconSize: "18px"
  }
};

function Button(props: ButtonProps) {
  const backgroundColor = props.variant === "primary" ? "blue" : "lightBlue";
  const textColor = props.variant === "primary" ? "white" : "blue";
  const borderColor = "blue";
  const buttonSize = sizeStyles[props.size];


  return (
    <button
      onClick={props.onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        backgroundColor: backgroundColor,
        color: textColor,
        border: `0px solid ${borderColor}`,
        borderRadius: '7px',
        fontSize: buttonSize.fontSize,
        width: buttonSize.width,
        padding: buttonSize.padding,
        margin: buttonSize.margin,
        cursor: 'pointer'
      }}
    >
      {props.startIcon && (
        <span style={{ display: 'inline-flex', width: buttonSize.iconSize, height: buttonSize.iconSize, alignItems: 'center' }}>
          {props.startIcon}
        </span>
      )}

      <span>{props.text}</span>

      {props.endIcon && (
        <span style={{ display: 'inline-flex', width: buttonSize.iconSize, height: buttonSize.iconSize, alignItems: 'center' }}>
          {props.endIcon}
        </span>
      )}
    </button>
  );
}

export default Button;