import React, { useState } from 'react';
import Title from '../components/Title';
import "./Reservation.css"
import Example from './Example';
import { useDispatch, useSelector } from 'react-redux';
import { dataUpdate } from '../moduls/reserve';
import RoomContainer from '../container/RoomContainer';
import axios from 'axios';
import { API_URL } from '../config/apiurl';


const Reservation = () => {
    const [isShow, setIsShow] = useState(false);
    //체크인, 체크아웃 스토어에서 받아오기
    const rv_date = useSelector(state => state.reserve.rv_date);
    const dispatch = useDispatch();
    //예약이 불가능한 방목록 ===> 이미 그 날짜에 예약이 된 객실번호 배열
    const [reserveRoom, setReserveRoom] =  useState([])
    const hideDateDiv = (start, end) => {
        if(start && end) {
            dispatch(dataUpdate({
                name: "rv_date",
                value: {
                    checkin: start,
                    checkout: end
                }
            }))
            console.log(start, end);
            setIsShow(false);
        }else {
            console.log("데이터가 없음")
            return;
        }
        
        
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        dispatch(dataUpdate({
            name:name,
            value:value
        }))
        
       
    }
    //해당 날짜에 예약이 되어있는 객실번호 불러오기 
    
    const searchRoom = (start, end) => {
        //쿼리스트링으로 전달 쿼리문은 ?시작  start키  end키
        axios.get(`${API_URL}/searchRoom?start=${start}&end=${end}`)
        .then(res=>{
            console.log(res.data)
            setReserveRoom(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }


    return (
        <div className='inner'>
            <Title title="Reservation"/>
            <div className='reservation'>
                <ul className='reservsearch'>
                    <li>
                        <div>
                            <span>Check in</span>
                            <input name='rv_checkin' 
                            onClick={()=>setIsShow(!isShow)}
                            value={rv_date.checkin}/>
                        </div>
                        <div>
                            <span>Check out</span>
                            <input name='rv_checkout' 
                            onClick={()=>setIsShow(!isShow)}
                            value={rv_date.checkout}/>
                        </div>
                        <div className='checkdate'>
                            {isShow && <Example hideDateDiv={hideDateDiv}/>}
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>Adults</span>
                            <select name='rv_adult' onChange={onChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>children</span>
                            <select name='rv_childern' onChange={onChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </li>
                    <li onClick={()=>searchRoom(rv_date.checkin,
                         rv_date.checkout)}>
                        <div>
                            검색
                        </div>
                    </li>

                </ul>
            </div>
            <RoomContainer isreserve={true} reserveRoom={reserveRoom}/>
        </div>
    );
};

export default Reservation;