import React from 'react';
import {useSelector} from 'react-redux';

const DisplayItemCounter = () =>{
    const allItemCount = useSelector((state) => state.itemCounter.value)
   return (
      <h3>All Counter is : {allItemCount}</h3>
   );
}

export default DisplayItemCounter;