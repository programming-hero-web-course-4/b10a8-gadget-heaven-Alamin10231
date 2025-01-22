import React, { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{
        document.title =`${title}  Gadget Heaven`
    },[])
    return (
        <div>
            
        </div>
    );
};

export default UseTitle;