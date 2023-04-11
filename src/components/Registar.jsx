import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Registart(props) {

const [fullName,setFullName] = useState('')
const [password,setPassword] = useState('')
const nav = useNavigate()
const checkInpt = ()=>{
  if(fullName.length  < 4 ){
    alert('user name need to be 4 char')
    return false
  }
  if(!isNaN(fullName)){
    alert('the user name need to be just char')
    return false
  }
  if(password <= 8 && password != isNaN() && fullName != fullName.toLowerCase() ){
    alert('password eror')
    return false
  }
  nav(`/${fullName}`)
}
  return (
    <div>

<div id='div1'><h1 id='mada1'>הרשמה</h1></div>
<div  id='divReg'>

<input className='reg' onChange={(e)=>{setFullName(e.target.value)}} type="text" placeholder='שם מלא' />
<br />
<br />
<input className='reg' onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='סיסמא' />
<br />
<br />
<button id='btnReg' onClick={()=>{props.add(fullName,password);checkInpt()}} >Help Me</button>
</div>
    </div>
  )
}
