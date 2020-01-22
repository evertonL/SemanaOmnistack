// Componente : Bloco isolado de Html, css e js , o qual não interfere no restante da apalicação
// Estado: Informações que um componente Pai passa para o componente FILHO
// Propiedade: Informações mantidas pelo componente (Lembrar: imutabilidade)

import React from 'react';

import './global.css';
import './App.css';

function App() {

  return (
    <div id=" app ">
      <aside>

        <strong>Cadastrar</strong>

        <form>

          <div className="input-block">

            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />

          </div>

          <div className="input-block">

            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />

          </div>

          

        </form>

      </aside>

      <main>

      </main>

    </div>
  );
}

export default App;
