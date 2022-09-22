import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Background() {
    const colors = ['#232742', '#485930', '#249395']


    const [currentColor, setCurrentColor] = useState(colors[0]);

    useEffect(() => {
        document.body.style.backgroundColor = currentColor;
    })

    const changeColor = (e) => {
        setCurrentColor(colors[e.target.value])
    }

    return (
        <div className='wrapper'>
            <select onInput={changeColor}>
                <option value='0'>Sea</option>
                <option value='1'>Sand</option>
                <option value='2'>Peach</option>
            </select>
            <p>{currentColor}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Background />
    </React.StrictMode>
);

