import React from 'react'
import mada from './Img/mada.jpg'
import police from './Img/police.jpg'
import kibui from './Img/kibui.jpg'
import { Link } from 'react-router-dom'
export default function (props) {
  return (
    <div>
<div id='div1'><h1 id='mada1' >101</h1> <img id='mada' src={mada} alt="" /></div>
<div>
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
  
</div>

<Link to={'/101'}><button id='button1'>הצילו</button></Link>

</div>

<h1 id='h1'>Help Me!</h1>
    </div>
  )
}
