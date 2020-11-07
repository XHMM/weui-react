import React, { FC } from 'react';
import css from './index.module.css'

interface Props {}
const ComponentNotice: FC<Props> = ({children}) => {
  return <div className={css.container}>{children}</div>;
};

export default ComponentNotice;
