import React from 'react';
import './Header.css';
import { MdFace } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <h1>MIDAS</h1>
            <ul className='menu'>
                <li>스페셜오퍼</li>
                <li>객실안내</li>
                <li>예약하기</li>
                <li>이용안내</li>
            </ul>
            <div>
                <div className='iconDiv'>
                    <MdFace/>
                    <ul className='membermenu'>
                        <li>로그인</li>
                        <li>회원가입</li>
                    </ul>
                </div>
            </div>
            
        </header>
    );
};

export default Header;