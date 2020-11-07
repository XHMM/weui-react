import React, { FC } from 'react';
import Markdown from '../Markdown';

interface Props {
  code:string
}
const Code: FC<Props> = ({code}) => {
  return <div><Markdown>{"```jsx\n"+code+"\n```"}</Markdown></div>;
};

export default Code;
