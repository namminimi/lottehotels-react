import React from 'react';
import { API_URL } from '../config/apiurl';
import './RoomItem.css';

const RoomItem = ({item}) => {
    const price = Number(item.r_price).toLocaleString('ko-kR')
    return (
        <li>
            <div className='roomitem'>
                <img src={`${API_URL}/upload/event/${item.r_img1}`} alt="" />
            </div>
            <div>
                <h3>{item.r_name}</h3>
                <p>기준인원: 2 <br/> 최대인원: 3</p>
            </div>
            <div>
                <div className='price'>
                    {price}<br/><span>원1박</span></div>
                <div>
                    <button>객실 상세보기</button>
                    <button>예약하기</button>
                </div>
            </div>
        </li>
    );
};

export default RoomItem;