import React, { useState } from 'react';
import {Await, Link, useNavigate} from 'react-router-dom';

import backward from '../assets/backward.svg';
import gotopw from '../assets/gotopw.svg';
import smu from '../assets/smu.svg';
import axios from 'axios';
function Login() {
    const [userInfo,setUserInfo]=useState({
        id:'',
        pw:''
    })
    const handleInput=(identifier,value)=>{
            //id ,pw 상태관리하기
        
    }
    const handleSubmit= async(event)=>{
        event.preventDefault();
        try{
            //login api 통신해보기
        }
        catch(error){
            new Error(error);
        }
    }
    console.log(userInfo)
  return (
    <form className='login-wrap'>
        <img src={backward} alt='backward-image'/>
        <h1>학교 이메일 주소로 <br/> 로그인 해주세요</h1>
        <div className='input-wrap'>
            <input placeholder='학번' onChange={(e)=>handleInput('id',e.target.value)}/>
            <img src={smu} className='smu-image' alt='smu-image'/>
            <input type='password' placeholder='비밀번호' onChange={(e)=>handleInput('pw',e.target.value)}/>
            
             <Link to='/signup/1' className='gotopw'>
                <p>회원가입하러가기</p>
                <img src={gotopw} alt='gotopw-image'/>
            </Link>
          
            
            
        </div>
        <button onClick={handleSubmit} className={`login-button ${userInfo.id!=='' && userInfo.pw!=='' ? 'active' : ''}`} type='submit'>로그인</button>
    </form>
  )
}

export default Login;