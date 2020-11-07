import React, { FC, useState } from 'react';
import Area from '../components/Area';
import { WeUIDialog, useTopTips, WeUIButton } from '@xhmm/weui-react';

interface Props {}
const WeUIDialogDoc: FC<Props> = ({}) => {
  const showTopTips  = useTopTips()
  const [show ,setShow] = useState(false)
  
  return <Area title="WeUIDialogDoc" notice={'Caution: put this component at the most bottom, if not, you will see flick (TODO: need to fixed)'} demo={
    <>
      <WeUIButton onClick={() => setShow(true)}>open dialog</WeUIButton>
    <WeUIDialog title="title" show={show} leftText="left-text" rightText="right-text" onLeftClick={() => {
      showTopTips('left click', {
        type: 'primary'
      })
      setShow(false)

    }
    } onRightClick={
      () => {
        showTopTips('right click', {
          type: 'primary'
        })
        setShow(false)
      }
    }>Hi</WeUIDialog></>
  }/>;
};

export default WeUIDialogDoc;
 
