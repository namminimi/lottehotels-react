import React from 'react';
import SpecialContainer from '../container/SpecialContainer';
import Promotion from './Promotion';
import VisualSlider from './VisualSlider';


const Main = () => {
    
    return (
        <div>
            <VisualSlider/>
            <SpecialContainer isMain={true} limits={5}/>
            <Promotion/>
        </div>
    );
};

export default Main;