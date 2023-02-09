import Title from 'antd/es/skeleton/Title';
import React from 'react';
import RoomItem from '../components/RoomItem';

const RoomPage = ({data}) => {
    return (
        <div className='inner'>
            <Title title="Room"/>
            <ul>
                {data.map(item=><RoomItem item={item}/>)}
            </ul>
        </div>
    );
};

export default RoomPage;