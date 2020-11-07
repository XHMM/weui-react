import React, { FC } from 'react';
import { WeUIForm, WeUIFormSelect } from '@xhmm/weui-react'
import Area from '../../components/Area';

interface Props {}
const WeUiFormSelectDoc: FC<Props> = ({}) => {
  return <Area  title="WeUIFormSelect" demo={<>    <WeUIForm>
    <WeUIFormSelect
      label="time"
      options={new Array(12).fill(0).map((_, idx) => ({ label: `${idx + 1}`, value: `${idx + 1}` }))}
      onChange={() => {}}
      value={3+""}
      adornment="month(s)"
    />
  </WeUIForm></>}/>;
};

export default WeUiFormSelectDoc;
