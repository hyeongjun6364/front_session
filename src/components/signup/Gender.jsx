import React, { useState } from 'react'

import backward from '../../assets/backward.svg';
import man from '../../assets/man.svg';
import women from '../../assets/women.svg';
import yellowman from '../../assets/yellowman.svg';
import yellowwomen from '../../assets/yellowfemale.svg';
import yellowcheck from '../../assets/yellowcheck.svg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Gender() {
    const [clickState,setClickState] = useState('');
    const navigate = useNavigate();
    const handleSubmit=async(event)=>{
      event.preventDefault();
      try{
        // 성별 통신 코드
        
        // 회원가입 통신 코드
       
        
        navigate('/');
      }
      catch(error){
        new Error(error);
      }
      navigate('/')
    }
    return (
      <form className='sex-wrap'>
          <Link to='/signup/3'>
          <img src={backward} className='backward-image' alt='backward-image'/>
          </Link> 
          <h1>성별을 알려주세요</h1>
          <div className='image-wrap'>
              <div className={`card ${clickState==='MALE' ? 'active' : ''}`} onClick={()=>setClickState('MALE')}>
                  <p>남자</p>
                  {/* 삼항연산자 이용하여 체크표시 나타나게하기 classname은 yellowcheck*/ }
                  <img src={clickState==="MALE" ?yellowman :man} alt='man-image'/>
              </div>
              <div className={`card ${clickState==='FEMALE' ? 'active' : ''}`} onClick={()=>setClickState('FEMALE')}>
              <p>여자</p>
              {/* 삼항연산자 이용하여 체크표시 나타나게하기  classname은 yellowcheck*/ }
              <img src={clickState==="FEMALE" ? yellowwomen : women} alt='women-image'/>
              </div>
          </div>
          <div className='button-wrap'>
          <button className={`${clickState!=='' ? 'active' : ''}`} onClick={handleSubmit}>다음</button>
          </div>
          
      </form>
    )
}

export default Gender