import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';

const App = () =>{

  const [list, setList] = useState<Item[]>([
    {id: 1, name:'Comprar o pão na padaria',done: false},
    {id:2, name:'Comprar bolo no mercado', done: false}
  ]);

  return(
      <C.Container>
        <C.Area>
          <C.Header> Lista de Tarefas </C.Header>
            
            {list.map((item, index) => {
              return (
                <ListItem item={item} key={index}/>
              )
            })}

        </C.Area>
      </C.Container>
  );
}

export default App;