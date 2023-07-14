
import React from 'react'
const NoData = (props) => {
    return (

        <div className='text-center'>
            <img
                src={props.image}
                className={props.classForImage}
                alt=""
                width={200}
            />
            <h4>{props.message}</h4>
        </div>

    )

}




export default NoData