import React, { FC } from 'react';
import { WeUIButton } from "@xhmm/weui-react";
import Area from '../components/Area';

interface Props {}
const WeUiButtonDoc: FC<Props> = ({}) => {
  return <Area title="WeUIButton" demo={<>
    <WeUIButton>页面主操作</WeUIButton>
    <WeUIButton loading>页面主操作</WeUIButton>
    <WeUIButton disabled>页面主操作</WeUIButton>

    <WeUIButton type="default">页面次要操作</WeUIButton>
    <WeUIButton type="default" loading>页面次要操作</WeUIButton>
    <WeUIButton type="default" disabled>页面次要操作</WeUIButton>

    <WeUIButton type="warn">警告类操作</WeUIButton>
    <WeUIButton type="warn" loading>警告类操作</WeUIButton>
    <WeUIButton type="warn" disabled>警告类操作</WeUIButton>

    <div style={{marginTop: '16px'}}>
      <WeUIButton size="cell" type='default'>普通行按钮</WeUIButton>
      <WeUIButton size="cell" type='primary'>强调行按钮</WeUIButton>
      <WeUIButton size="cell">强调行按钮</WeUIButton>
      <WeUIButton size="cell" type='warn'>警告行按钮</WeUIButton>
    </div>

    <div style={{marginTop: '16px', display: 'flex'}}>
      <WeUIButton size="mini">按钮</WeUIButton>
      <WeUIButton size="mini" type='default'>按钮</WeUIButton>
      <WeUIButton size="mini" type='warn'>按钮</WeUIButton>
    </div></>} />;
};

export default WeUiButtonDoc;
