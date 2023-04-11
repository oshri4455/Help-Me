import React, { useState } from 'react'
import mada from './Img/mada.jpg'
import police from './Img/police.jpg'
import kibui from './Img/kibui.jpg'
import { Link } from 'react-router-dom'
import Password from './Password'
export default function PoliceHelp(props) {

    const[flag,setflag] = useState(false)

const showPassowrd = ()=>{
    if(flag === true){
        return <Password  flag = {flag} fullName = {props.fullName} password = {props.password} client= {props.client} setflag = {setflag}  />
    }
}


  return (
    <div id='div3'>
    <div id='div1'><h1 id='mada1' >100</h1> <img id='mada' src={police} alt="" /></div>
    <div class="dropdown">
      <button id='buttonicon'>
      <div id='divsIcon1'></div>
    <div id ='divsIcon2'></div>
    <div id='divsIcon3'></div>
      <div class="dropdown-content">
       <Link to={'/mada'}> <a  href="#" style={{fontSize:'30px',position:'relative',top:'-5px'}} >101 <img className='img' src={mada} alt="" /></a></Link>
      <Link to={'/police'}><a href="#" style={{fontSize:'30px',position:'relative',top:'-5px'}}>100 <img className='img' src={police} alt="" /></a></Link>
      <Link to={'/kibui'}> <a href="#" style={{fontSize:'30px',position:'relative',top:'-5px'}}>102 <img className='img' src={kibui} alt="" /></a></Link>
      </div>
      </button>
    
    /</div>
 
    <div id='divUser'>
    <h1>100 משטרה</h1>
<h1>{props.fullName}</h1>
</div>
<button onClick={()=>{setflag(!flag)}} id='buttonCencel'>ביטול</button>
{showPassowrd()}
    </div>

  )
}
