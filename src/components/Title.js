import React from 'react';

const titleStyle = {
    padding: "60px 0",
    textAlign: "center",
    fontSize: "24px"
}

const Title = ({title}) => {
    return (
        <div>
           <h2 style={{titleStyle}}>{title}</h2> 
        </div>
    );
};

export default Title;