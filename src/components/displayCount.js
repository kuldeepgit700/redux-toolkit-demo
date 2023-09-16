import React from "react";
import {useSelector} from 'react-redux'

const DisplayCount = () => {

    const totalCount = useSelector((state) => state.counter.value);

    return (

        <div>
          <h3>All Counter is : {totalCount}</h3>
        </div>
    );

}


export default DisplayCount;