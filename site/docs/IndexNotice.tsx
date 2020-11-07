import React, { FC } from 'react';
import Markdown from '../components/Markdown';
import Area from '../components/Area';

interface Props {}
const IndexNoticeDoc: FC<Props> = ({}) => {
  return <Area title="Install" notice={    <Markdown>
    {
      `Currently, this library use [weui](https://github.com/Tencent/weui)  v2.3.0

Install as below:

1. \`npm i @xhmm/weui-react\`
1. import needed css file: \`import "@xhmm/weui-react/build/index.css"\``
    }
  </Markdown>} />
};

export default IndexNoticeDoc;
