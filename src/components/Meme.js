import React, { useState } from 'react';
import '../App.css'
import { memesData } from '../data/memesData';

const Meme = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [memeURL, setMemeURL ] = useState('');
    const [memeAltTxt, setMemeAltTxt] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
        
        if (memesData.success) {
            setMemeURL(memesData.data.memes[randomIndex].url);
            setMemeAltTxt(memesData.data.memes[randomIndex].name);
        } else {
            throw new Error('Failed to fetch meme');
        }
    }

    return (
        <main className='main-content'>
            <form className='form-content'>
                <div>
                    <label htmlFor='setup' className='form-label'>Top Text</label>
                    <input 
                        id='setup'
                        type='text' 
                        placeholder='Be Quiet...' 
                        maxLength={50}
                        className='form-input'
                    />
                </div>
                <div>
                    <label htmlFor='punchline' className='form-label'>Bottom Text</label>
                    <input 
                        id='punchline'
                        type='text' 
                        placeholder='And take my money!' 
                        maxLength={150}
                        className='form-input'
                    />
                </div>
                <button 
                    type="button"
                    onClick={handleClick}
                    className='form-button'
                >
                    Get a new meme image  🖼
                </button>
            </form>
            <div className='meme-content'>
                <img src={memeURL} alt={'Meme of ' + memeAltTxt} className='meme-image' />
            </div>
        </main>
    );
}

export default Meme;