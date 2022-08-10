import React from 'react';

const BlockHeader = ({header, subheader}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold mb-4'>{header}</h1>
            <h3 className='text-xl text-gray'>{subheader}</h3>
        </div>
    )
}

export default BlockHeader;