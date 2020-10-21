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
import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion';



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

//test version of Tabs prop
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {title: 'mr',
   content: 'Mr goes to the store.'
  },
  {title: 'sir',
   content: 'Sir goes to the store.'
  },
  {title: 'senior',
  content: 'Senior goes to the store.'
  }

]

function App() {
  return (
    <main >
      <div className='App'>
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
      </div>

      <div className='bottom' flexbasis={1}>
        <Tabs tabs={tabsProp}/>
      </div>
      <div>
        <Accordion sections={sections}/>
      </div>
      
    </main>
  )
};

export default App;