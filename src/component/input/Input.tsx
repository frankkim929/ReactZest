import React, { ChangeEvent } from "react";
import "./Input.css";

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  className = "", // className의 기본값은 빈 문자열로 설정.
  type = "text", // type 속성의 기본값은 "text".
  placeholder = "", // placeholder 속성의 기본값은 빈 문자열.
  value = "", // value 속성의 기본값은 빈 문자열.
  onChange, // onChange 핸들러는 선택.
  disabled = false, // disabled 속성의 기본값은 false로 설정.
}) => {
  return (
    <input
      className={`custom-input ${className}`} // 기본적으로 "custom-input" 클래스를 사용하고, 추가적으로 전달된 className이 있다면 함께 적용.
      type={type} // type 속성에 전달된 값을 input 요소의 type으로 설정.
      placeholder={placeholder} // placeholder 속성에 전달된 값을 input 요소의 placeholder로 설정.
      value={value} // value 속성에 전달된 값을 input 요소의 현재 값으로 설정.
      onChange={onChange} // onChange 핸들러가 전달되었다면, input 요소의 onChange 이벤트에 연결됩니다.
      disabled={disabled} // disabled 속성에 따라 input 요소를 비활성화.
    />
  );
};

export default CustomInput;
