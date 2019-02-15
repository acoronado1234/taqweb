import React, {useState, useEffect} from 'react';

export function NavigationButtons(props) {
    const [position, setPosition] = useState(0);


    useEffect(() => {
        switch (position) {
            case 0:
                window.scrollTo({
                    top:0,
                    behavior:'smooth',
                });
                break;
            case 1:
                window.scrollTo({
                    top: 500,
                    behavior: 'smooth',
                });
                break;
            case 2:
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth',
                });
                break;
            default:
                break;
        }
    });


    return (
        <div className="navButtonDiv">
            <button className="navButton" onClick={() => setPosition(0)}>Home</button>
            <button className="navButton" onClick={() => setPosition(1)}>Menu</button>
            <button className="navButton" onClick={() => setPosition(2)}>Locations</button>
        </div>
    );
}