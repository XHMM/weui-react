import React, { FC } from 'react';
import Markdown from '../../components/Markdown';
import Area from '../../components/Area';

interface Props {}
const WeUiFormDoc: FC<Props> = ({}) => {
  return <Area title="WeUIForm" demo={<Markdown>This component should use with `WeUIFormXXX` such as `WeUIFormSelect`</Markdown>} />;
};

export default WeUiFormDoc;
