import Title from '../../components/Title';
import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config/apiurl';
import { setCookie } from '../../util/cookie';
import { useDispatch } from 'react-redux';
import { goToHome, setLogin } from '../../moduls/loginCheck';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        useremail: "",
        userpass: "",
    })
    const onChange = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        //form전송 이벤트 제거
        e.preventDefault();
        //인풋에 입력되었는지 체크
        if(loginData.useremail === '' || loginData.userpass === '') {
            alert("이메일과 비밀번호를 입력해주세요");
        }else {
            axios.post(`${API_URL}/login`, loginData)
            .then(result=>{
                const {m_email, m_nickname} = result.data[0];
                console.log(m_email, m_nickname)
                if(m_email && m_nickname){
                    alert("로그인 되었습니다.")
                    //현재 시간 객체 생성
                    let expires =  new Date();
                    //60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+60);
                    //쿠키생성
                    setCookie('useremail', `${m_email}`, {path: '/', expires});
                    setCookie('username', `${m_nickname}`, {path: '/', expires});
                    dispatch(setLogin());   //로그인을 true를 바꿔줌
                    dispatch(goToHome(navigate))  //고홈으로 보내줌
                }
            })
            .catch(e=>{
                console.log(e)
            })
        }
    }
    return (
        <div className='inner' id='login'>
            <Title title="Login"/>
            <form onSubmit={onSubmit}>
                <table>
                    <tr>
                        <td>아이디(이메일주소)</td>
                        <td><input type="text" name='useremail' value={loginData.useremail} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name='userpass' value={loginData.userpass} onChange={onChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">로그인</button>
                            <button>회원가입</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Login;