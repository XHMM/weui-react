import React, { useState } from "react";
import {
  WeUIButton,
  WeUIForm,
  WeUIFormRadio,
  WeUIFormRadioGroup,
  useTopTips
} from "../build";

const Page = function() {
  const [sex, setSex] = useState("male");
  const showTopTips = useTopTips();
  function onSexChange(ev: any): void {
    showTopTips('性别切换成功', {
      type: 'warn'
    })
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

export default Page;
