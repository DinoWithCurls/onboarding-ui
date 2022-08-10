import React from 'react';
import ProgressBar from './progressBar';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <img alt='eden' src={require('../icons/edenlogo.jpg')} />
            <ProgressBar noOfScreens={4} />
        </div>
    )
}
export default Header;