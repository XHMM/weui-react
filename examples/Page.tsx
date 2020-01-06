import React, { useState } from "react";
import {
  WeUIButton,
  WeUIForm,
  WeUIFormRadio,
  WeUIFormRadioGroup,
  useTopTips,
  WeUIFormSelect
} from "../build";

const Page = function() {
  const [sex, setSex] = useState("male");
  const showTopTips = useTopTips();
  function onSexChange(ev: any): void {
    showTopTips('性别切换成功', {
      type: 'primary'
    })
    setSex(ev.target.value);
  }
  
  function submit(): void {
    showTopTips('提交失败')
  }
  return (
    <div>
      <WeUIForm>
        <WeUIFormRadioGroup title="性别设置" onChange={onSexChange} value={sex}>
          <WeUIFormRadio label="我是男的" value="male" />
          <WeUIFormRadio label="我是女的" value="female" />
        </WeUIFormRadioGroup>

        <WeUIFormSelect
          label="停放时间"
          options={new Array(12).fill(0).map((_, idx) => ({ label: `${idx + 1}`, value: `${idx + 1}` }))}
          onChange={() => {}}
          value={3+""}
          adornment="个月"
        />
      </WeUIForm>
      <WeUIButton value="确定修改" onClick={submit} />
    </div>
  );
};

export default Page;
