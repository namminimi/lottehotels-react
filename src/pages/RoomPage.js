import Title from 'antd/es/skeleton/Title';
import React from 'react';
import RoomItem from '../components/RoomItem';

const RoomPage = ({data, isreserve}) => {
    return (
        <div className='inner'>
            {/* 예약페이지가 아닐경우에만 title컴포넌트 나타내기 */}
            {!isreserve && <Title title="Room"/>}
            {isreserve && <div>객실</div>}
            <ul>
                {data.map(item=><RoomItem item={item}/>)}
            </ul>
        </div>
    );
};

export default RoomPage;