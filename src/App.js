import logo from './logo.svg';
import './App.css';

function MiComponente() {
  const elementos = ['Learn React', 'Climb Mt. Everest', 'Run a marathon', 'Feed the dogs'];
  const listaElementos = elementos.map((elemento, indice) =>
    <li key={indice}>{elemento}</li>
  );

  return (
    <div>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>{listaElementos}</ul>
    </div>
  );
}

export default MiComponente;
