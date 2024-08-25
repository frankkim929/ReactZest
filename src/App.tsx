import { useState } from "react";
import "./App.css";
import Button from "./component/button/Button";
import Input from "./component/input/Input";

function App() {
  const handleClick = () => {
    alert("Click !");
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>버튼 컴포넌트</h1>
      <div>
        <Button onClick={handleClick} variant="primary">
          Confirm Button
        </Button>
        <Button onClick={handleClick} variant="secondary">
          secondary Button
        </Button>
        <Button onClick={handleClick} variant="danger">
          Cancel Button
        </Button>
        <Button onClick={handleClick} disabled>
          Disabled Button
        </Button>
        <Button onClick={() => alert("클릭")}>Disabled Button</Button>

        <Button onClick={() => alert("클릭")} className="custom-class">
          Custom Class Button
        </Button>
        <Button onClick={() => alert("클릭")} className="large-button">
          Large Button
        </Button>
      </div>
      <h1>커스텀 인풋 컴포넌트</h1>
      <div>
        <Input
          placeholder="Text를 입력해주세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Input Value: {inputValue}</p>

        <Input placeholder="Disabled Input" disabled />
      </div>
    </>
  );
}

export default App;
