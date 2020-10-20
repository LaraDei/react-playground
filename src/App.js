// make React available
import React from 'react';

import Split from './composition/Split';

import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from  './state/Counter'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
);

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={1}>
        This is the content for the left `Split`. Lorm {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
         {/* make another tooltip directly inside the App */}
         <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`.  Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.

      </Split>
      <Split className='test'>
      <TheDate/>
      <hr/>
      <Counter count={123}/>
      </Split>
      <Split className='checkpoint'>
      <HelloWorld/>
      <hr/>
      <Bomb/>
      <hr/>
      <RouletteGun/>
      </Split>

      
    </main>
  )
};

export default App;