import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function (props) {
const [password,setPassword] = useState('')
const [confirmPassword,setconfirmPassword] =useState('')
const nav = useNavigate()





const checkPassword = ()=>{
 
if(password != props.password  && confirmPassword != props.password  ){
    document.getElementById('buttonCencel').addEventListener('click',function(){
        props.setflag(props.flag)
   
       
        
    })
}


else{
 
    nav(`/${props.fullName}`)

}
   

} 






  return (
    <div id='divPassword'>
<input className='pass' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter the password' />
<br />
<br />
<input className='pass' onChange={(e)=>{setconfirmPassword(e.target.value)}} type="password" placeholder='Enter the password again' />
<br />
<br />

<button id='bPass' onClick={()=>{checkPassword()}}>אישור</button>

<div id='messege' ></div>
    </div>
  )
}
