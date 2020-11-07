import React, { FC } from 'react';
import css from './index.module.css'

interface Props {}
const Demo: FC<Props> = ({children}) => {
  return <div className={css.container}>{children}</div>;
};

export default Demo;
