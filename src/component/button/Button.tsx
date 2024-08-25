import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: string; // "primary" | "secondary" | "danger"; 사용할 스타일 옵션
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children, // 부모에서 사용할 때 <Button> children </Button> 으로 text가 전달됨
  onClick,
  variant = "primary", // 'primary', 'secondary', 'danger' 등의 스타일 선택
  className = "", // 스타일링에 따라 클래스 변경 사용할 때
  disabled = false, // disabled 효과
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
