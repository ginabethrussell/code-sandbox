import React from 'react';
import logo from '../girl.png';
import downloadIcon from '../downloadIcon.png';
import openIcon from '../open.png';

export default function Header(props){
    return (
        <div className='header-wrapper'>
            <nav>
                <div className='title-wrapper'>
                    <img className='logo' src={logo} alt='logo' />
                    <h1>Code Friends Sandbox</h1>
                </div>
                <div className='button-div'>
                    <button className='header-button account'>Sign Up</button>
                    <button className='header-button account'>Log In</button>
                    <button className='header-button'><img className='icon-img' src={downloadIcon} alt='play-icon'/></button>
                    <button className='header-button'><img className='icon-img' src={openIcon} alt='play-icon'/></button>
                </div>
            </nav>
        </div>
    )
}