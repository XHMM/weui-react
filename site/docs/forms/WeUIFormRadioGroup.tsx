import React, { FC } from 'react';
import { WeUIForm, WeUIFormRadioGroup } from '@xhmm/weui-react'
import Area from '../../components/Area';

interface Props {}
const WeUiFormRadioDoc: FC<Props> = ({}) => {
  const [sex, setSex] = React.useState("male");

  function onSexChange(value: string) {
    setSex(value);
  }

  return (
    <Area title="WeUIFormRadio" demo={<><div>current selected: {sex}</div>
      <WeUIForm>
      <WeUIFormRadioGroup
      title="sex change"
      name="sex"
      onChange={onSexChange}
      value={sex}
      data={ [{label: 'male', value:'male'}, {label: 'female', value: 'female'}] }
      />
      </WeUIForm></>} notice={'Difference with official radio weui style: this component show title on left but official not has.'} />)
};

export default WeUiFormRadioDoc;
