import './App.css';
import ComponentePrincipal from './components/componentePrincipal';
import React from 'react';


  

function App() {

  const vector = [
    { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description: 'Descripcion imagen 1'},
    { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description: 'Descripcion imagen 2'},
    { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description: 'Descripcion imagen 3'},
    { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description: 'Descripcion imagen 4'}
    ];

const respuesta = vector.map(unItem => <ComponentePrincipal key={unItem} url={unItem.url} title={unItem.title} description={unItem.description} />)
    return (
      <body className="body">
        <div className="header">
          <h1>TP2 Modulo V</h1>
        </div>
        <div className="App">
            {respuesta}
        </div>
      </body>
    )
}

export default App;
