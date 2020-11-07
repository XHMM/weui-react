import React from 'react'
import { useTopTips,WeUIButton } from '@xhmm/weui-react'
import Area from '../components/Area';

const UseTopTipsDoc = function() {
  const showTopTips = useTopTips();
  return (<Area title="useTopTips (hooks)" props={[{
    name:'content',
    type: 'string',
    default:'""'
  },
    {
      name:'config',
      type: "{ type: 'warn' &#124; 'primary', duration: number }",
      default:"{ type: 'warn', duration: 2000 }"
    }
  ]} demo={<><WeUIButton onClick={() => {showTopTips("content", { type: 'primary', duration: 5000})}} >show primary</WeUIButton>
    <WeUIButton type="warn" onClick={() => {showTopTips("content")}}>show warning</WeUIButton></>} code={`const showTopTips = useTopTips();\nshowTopTips("content", { type: 'primary', duration: 5000})}`}/>)
}

export default UseTopTipsDoc
