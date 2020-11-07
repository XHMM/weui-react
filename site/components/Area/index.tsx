import React, { FC, ReactNode } from 'react';
import css from './index.module.css'
import Demo from '../Demo';
import PropsTable, { PropsTableProps } from '../PropsTable';
import Notice from '../Notice';
import Code from '../Code';

interface Props {
  title: string
  notice?: string
  demo?: ReactNode
  props?: PropsTableProps['props']
  code?:string
  children?: never
}
const Area: FC<Props> = ({title,notice, props,code,demo}) => {
  return <div className={css.container}>
    <div className={css.title}>{title}</div>
    {notice && <Notice>{notice}</Notice>}
    {props && <PropsTable props={props} />}
    {demo && <Demo>{demo}</Demo>}
    {code && <Code code={code}/>}
  </div>;
};

export default Area;
