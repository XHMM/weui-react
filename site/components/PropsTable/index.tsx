import React, { FC } from 'react';
import css from './index.module.css'
import Markdown from '../Markdown';

export interface PropsTableProps {
  props: Array<{
    name:string
    type:string
    default: string

  }>
}
const PropsTable: FC<PropsTableProps> = ({props}) => {
  return <div className={css.container}><Markdown>{
    props.reduce((acc, cur) => {
      acc = acc +`\n|${cur.name}|${cur.type}|${cur.default}|`;
      return acc;
    }, '**Props**\n|params|type|default|\n|:---:|:---:|:---:|')
  }</Markdown></div>;
};

export default PropsTable;
