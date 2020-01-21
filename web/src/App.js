import React , { useState, useEffect}from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';
// Componente - Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade - Informações que um componenete PAI passa para o componenete FILHO
// Estado - Informações mantidas pelo componenete (Lembrar: imutabilidade = "Informação não é alterada")

// value = {variavel}

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
   

    const response = await api.post('/devs', data);
   

    setDevs([...devs, response.data]); //Cria um array dos devs existentes (...devs) e adiciona o novo dev criado, o response.data
  }

  
  


  //Conteúdo HTML
  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
             <DevItem dev ={dev} key = {dev._id}/>
          ))}
          

        </ul>
      </main>
    </div>
  );
}

export default App;
