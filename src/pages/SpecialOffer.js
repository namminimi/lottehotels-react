import React from 'react';
import "./SpecialOffer.css"

function SpecialList({list}){
    return(
        <li>
            <div className='imgdiv'>
                <img src={list.img} alt=""/>
            </div>
            <div className='textdiv'>
                <h3>{list.title}</h3>
                <p>
                    {list.desc}
                </p>
                <div>
                    +<br/>
                    READ MORE
                </div>
            </div>
        </li>
    )
}

const SpecialOffer = ({ data }) => {
    console.log(data)
    return (
        <div className='special'>
            <div className='inner'>
                <h2><span>스페셜오퍼</span>생각 밖의 선물, 마이다스 호텔 & 리조트</h2>
                <ul>
                    {data.map(d=><SpecialList list={d} key={d.id}/>)}
                </ul>
            </div>
        </div>
    );
};

export default SpecialOffer;