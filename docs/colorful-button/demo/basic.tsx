import React from 'react';
import { ColorfulButton } from 'ssr-materials';

export default { title: 'ColorfulButton' };

export const Basic = () => {

  return (
    <div>
      basic demo
      <ColorfulButton color="red"/>
    </div>
  );
}

Basic.storyName = '基础用法';
Basic.desc = '多彩按钮的基础用法，`code`试一下能不能用';
