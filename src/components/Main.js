import React, { useState, useEffect } from 'react';
import '../App.css'
import InputField from '../fields/InputField';

const MemeBody = () => {
    const [allMemes, setAllMemes] = useState([]);
    
    const [meme, setMeme ] = useState({
        topText: '',
        bottomText: '',
        name: '',
        url: 'https://i.imgflip.com/3si4.jpg'
    });

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data))
        .catch(error => console.log('Error fetching memes: ', error));
    }, [allMemes])
   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const randomIndex = Math.floor(Math.random() * allMemes.data.memes.length);
        
        if (allMemes.success) {
            setMeme(prevMeme => {
               return {
                ...prevMeme,
                name: allMemes.data.memes[randomIndex].name,
                url: allMemes.data.memes[randomIndex].url
                }
            });
        } else {
            throw new Error('Failed to fetch meme');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    [name]: value
                }
            })
        }
    

    return (
        <main className='main-content'>
            <form className='form-content' onSubmit={handleSubmit}>
                <InputField
                    name='topText'
                    label='Top Text'
                    type='text'
                    placeholder='Shut up...'
                    maxLength={50}
                    className='form-input'
                    handleInputChange={handleInputChange}
                    value={meme.topText}
                />
                <InputField
                    name='bottomText'
                    label='Bottom Text'
                    type='text'
                    placeholder='...and take my money!'
                    maxLength={150}
                    className='form-input'
                    handleInputChange={handleInputChange}
                    value={meme.bottomText}
                />
                <button
                    className='form-button'
                >
                    Get a new meme image  🖼
                </button>
            </form>
            <div className='meme-content'>
                <img src={meme.url} alt={meme.name} className='meme-image' />
                <h2 className='meme-top-text'>{meme.topText}</h2>
                <h2 className='meme-bottom-text'>{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default MemeBody;