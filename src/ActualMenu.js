import React from 'react';
import './App.css';

export default function ActualMenu({children}){
    return (
        <section className='menu'>
            {children}
        </section>
    );
}