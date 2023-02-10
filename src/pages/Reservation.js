import React, { useState } from 'react';
import Title from '../components/Title';
import "./Reservation.css"
import Example from './Example';


const Reservation = () => {
    const [isShow, setIsShow] = useState(false);
    const [reservData, setReservData] = useState({
        rv_checkin: "",
        rv_checkout: "",
        rv_adult: "",
        rv_child: ""
    })
    const hideDateDiv =(start, end) => {
        setIsShow(false)
        setReservData({
            ...reservData,
            rv_checkin: start,
            rv_checkout: end
        })
    }
    const onChange = (e) => {
        const {name, value} = e.target;
        setReservData({
            ...reservData,
            [name]: value
        })
        console.log(reservData)
    }
    return (
        <div className='inner'>
            <Title title="Reservation"/>
            <div className='reservation'>
                <ul className='reservsearch'>
                    <li>
                        <div>
                            <span>Check in</span>
                            <input name='rv_checkin' onChange={onChange} 
                            onClick={()=>setIsShow(!isShow)}/>
                        </div>
                        <div>
                            <span>Check out</span>
                            <input name='rv_checkout' onChange={onChange}/>
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
                    <li>
                        <div>검색</div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Reservation;