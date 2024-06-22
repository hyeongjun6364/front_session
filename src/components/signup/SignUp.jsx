import React, { useState } from 'react';

import backward from '../../assets/backward.svg';
import smu from '../../assets/smu.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
function SignUp() {
  const [emailData,setEmailData] = useState('');
  const navigate = useNavigate();
  const handleInput=(value)=>{
    // emailData 상태 관리하기
  }
  const handleSubmit = async(event) => {
    //이메일을 입력하지 않았다면 alert을 활용해 오류표시
    //이메일을 제대로 작성했다면 /signup/3으로 이동
  }
  console.log(emailData)
  return (
    <form className='email-wrap' >
      <Link to='/'>
        <img src={backward} className='backward-image' alt='backward-image'/>
      </Link> 
      <div className='stage-wrap'>
        <span className='active'>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <h1>재학생 인증을 위해 <br/> 학교 이메일 주소를 입력해 주세요</h1>
      <div className='input-wrap'>
        <input placeholder='학번' onChange={(e)=>handleInput(e.target.value)}/>
        <img src={smu} className='smu-image' alt='smu-image' />
      </div>
      <div className='button-wrap'>
        <button onClick={handleSubmit} className={`${emailData!=='' ? 'active': ''}`}>인증메일받기</button>
      </div>
      
    </form>
  )  
}

export default SignUp