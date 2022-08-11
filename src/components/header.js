import React from 'react';
import ProgressBar from './progressBar';
const Header = ({page}) => {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <img alt='eden' src={require('../icons/edenlogo.jpg')} />
            <ProgressBar noOfScreens={page} />
        </div>
    )
}
export default Header;