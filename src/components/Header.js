import React, { useEffect } from 'react';
import './Header.css';
import { MdFace } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';
import { setLogin, setLogout } from '../moduls/loginCheck';

const Header = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin)
    const username = getCookie("username");
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('username');
        removeCookie('useremail');
        dispatch(setLogout());
    }
    useEffect(()=>{
        const loop = setInterval(()=>{
            const username = getCookie("username")
            if(username){
                dispatch(setLogin())   //2분후 쿠키삭제되고
            } else{
                dispatch(setLogout())  // 3초뒤 자동 로그아웃
                clearInterval(loop);
            }
        }, 3000)
        
    },[username, dispatch])
    return (
        <header>
            <h1><Link to="/"><img src="/images/logo2.png" alt=""></img></Link></h1>
            <ul className='menu'>
                <li><Link to="/special">스페셜오퍼</Link></li>
                <li><Link to="/room">객실안내</Link></li>
                <li><Link to="/reservation">예약하기</Link></li>   
                <li>이용안내</li>
                { isLogin && username === 'admin' ?
                <>
                 <li><Link to="/writeevent">이벤트 등록</Link></li>
                 <li><Link to="/writeroom">객실 등록</Link></li></> : null }
                
            </ul>
            <div>
                <div className='iconDiv'>
                    <MdFace/>
                    <ul className='membermenu'>
                        {isLogin ? <><li onClick={logoutClick}>로그아웃</li>
                        <li><Link to="/join">회원정보</Link></li></> :
                        <><li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li></>
                        }
                        
                    </ul>
                </div>
            </div>
            
        </header>
    );
};

export default Header;