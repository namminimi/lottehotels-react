import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config/apiurl';
import { dataUpdate } from '../moduls/reserve';
import './RoomItem.css';

const RoomItem = ({item}) => {
    const navigate = useNavigate()
    const price = Number(item.r_price).toLocaleString('ko-kR')
    const dispatch = useDispatch()
    const onReserve = () =>{
        dispatch(dataUpdate({
            name:"rv_room",
            value: {
                roomname: item.r_name,
                roomno:  item.r_no,
                price: item.r_price
            }
        }))
        navigate("/reservation/register")
    }
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
                    <button><Link to={`/roomdetail/${item.r_no}`}>객실 상세보기</Link></button>
                    <button onClick={onReserve}>예약하기</button>
                </div>
            </div>
        </li>
    );
};

export default RoomItem;