import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  WeUIButton,
  WeUIForm,
  WeUIFormRadio,
  WeUIFormRadioGroup
} from "../build";
import "../build/index.css";

const App = function() {
  const [sex, setSex] = useState("male");

  function onSexChange(ev: any): void {
    setSex(ev.target.value);
  }
  return (
    <div>
      <WeUIForm>
        <WeUIFormRadioGroup title="性别" onChange={onSexChange} value={sex}>
          <WeUIFormRadio label="男" value="male" />
          <WeUIFormRadio label="女" value="female" />
        </WeUIFormRadioGroup>
      </WeUIForm>
      <WeUIButton value="确定修改" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
