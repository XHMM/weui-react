import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
// FIXME: https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/180
import Prism from 'react-syntax-highlighter/dist/esm/prism';
import {materialLight as style} from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
  code: ({language, value}: any) => {
    return <Prism style={style} language={language} children={value} />
  }
}

interface Props {
  children:string
}
const Markdown: FC<Props> = ({children}) => {
  return <div className="markdown-body"><ReactMarkdown plugins={[[gfm, {singleTilde: false}]]} renderers={renderers} children={children} /></div>;
};

export default Markdown;
