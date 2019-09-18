import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button title={"최신순"} />
      <Button isDefault={false} label={"국가"} title={"한국"} />
      <Button isDefault={true} label={"지역"} title={"전국"} />
      <Button isDefault={false} label={"경력"} title={"신입"} />
    </div>
  );
}

export default App;
