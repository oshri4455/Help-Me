import logo from './logo.svg';
import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import Registar from './components/Registar'
import Home from './components/Home';
import Kibui from './components/Kibui';
import Mada from './components/Mada';
import Police from './components/Police';
import kibui from './components/Img/kibui.jpg'
import mada from './components/Img/mada.jpg'
import police from './components/Img/police.jpg'
import PoliceHelp from './components/policeHelp';
import KibuiHelp from './components/KibuiHelp';
import MadaHelp from './components/MadaHelp';
import Password from './components/Password';




function App() {
  const[client,setclient] =useState([])
  const[sos,setsos] = useState([{type:'police',number:'100',img:police ,src:'/police'},{type:'mada',number:'101',img:mada,src:'/mada'},{type:'kibui',number:'102',img:kibui,src:'/kibui'}])


const addClient = (n,p)=>{
let temp = {
  fullName:n,
  password:p
}


setclient([...client,temp])
}


  return (
    <div className="App">
    
    <HashRouter>

    <Routes>
<Route path='/' element = {<Registar client = {client}add = {addClient}   />} />

{client.map((val,index)=>{
  return <Route path={`/${val.fullName}`} element = {<Home client = {client} fullName = {val.fullName} password = {val.password}   add = {addClient}/>}   />
})}
<Route path='/kibui' element = {<Kibui        />} />
<Route path='/mada' element = {<Mada    />} />
<Route path='/police' element = {<Police    />}       />
{client.map((val)=>{
  return <Route element = {<Password fullName = {val.fullName} add = {addClient} client = {client} password = {val.password}   />} />
})}

{client.map((val,index)=>{
  return <Route path={'/100'} element = {<PoliceHelp add = {addClient} fullName = {val.fullName} password = {val.password}   />} />
})}
{client.map((val,index)=>{
  return <Route path={'/102'} element = {<KibuiHelp add = {addClient} fullName = {val.fullName} password = {val.password}  />} />
})}
{client.map((val,index)=>{
  return <Route path={'/101'} element = {<MadaHelp add = {addClient} fullName = {val.fullName} password = {val.password}  />} />
})}



    </Routes>
    </HashRouter>



    </div>
  );
}

export default App;
